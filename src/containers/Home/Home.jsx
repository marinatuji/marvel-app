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

  const handleGetCharacters = async () => {
    const response = await getCharacters();
    setData(response);
    setFilteredData(response);
    console.log('data', data);
    return data;
  };

  useEffect(() => {
    handleGetCharacters();
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    const resultSearch = data.filter(({ name }) =>
      slugify(name).includes(slugify(searchTerm))
    );

    setFilteredData(resultSearch);
  }, [searchTerm]);

  return (
    <div className="container">
      <Header onChangeToSearch={handleSearch} />
      <HeaderList data={data} />
      <Characters
        data={filteredData}
        searchTerm={searchTerm}
        filteredData={filteredData}
      />
    </div>
  );
};

export default Home;
