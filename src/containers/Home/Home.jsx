import React, { useState, useEffect } from 'react';

import { Header, HeaderList } from '../../components';
import { Characters } from '../../containers';
import { slugify } from '../../utils/index';

import { getCharacters } from '../../services/characters';

const Home = () => {
  // states
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [isActive, setIsActive] = useState(true);

  const handleGetCharacters = async () => {
    const response = await getCharacters();
    setData(response);
    setFilteredData(response);
    setIsLoading(!isLoading);
    console.log('data', data);
    return data;
  };

  useEffect(() => {
    handleGetCharacters();
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setIsActive(true);
  };

  useEffect(() => {
    const resultSearch = data.filter(({ name }) =>
      slugify(name).includes(slugify(searchTerm))
    );

    setFilteredData(resultSearch);
  }, [searchTerm, data]);

  const sortByName = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      setFilteredData(
        filteredData.sort((characterA, characterB) =>
          characterA.name >= characterB.name ? 1 : -1
        )
      );
    } else {
      setFilteredData(
        filteredData.sort((characterA, characterB) =>
          characterA.name >= characterB.name ? -1 : 1
        )
      );
    }
  }, [isActive]);

  return (
    <div className="container">
      <Header onChangeToSearch={handleSearch} />
      <HeaderList
        data={filteredData}
        favoritesList={favorites}
        sortByName={sortByName}
      />
      <Characters
        data={filteredData}
        isLoading={isLoading}
        setFavorites={setFavorites}
        favoritesList={favorites}
      />
    </div>
  );
};

export default Home;
