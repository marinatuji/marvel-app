import React from 'react';
import PropTypes from 'prop-types';

import CharactersItem from './CharactersItem';
import { Loading } from '../../components';

import './Characters.scss';

const Characters = ({ data, isLoading, setFavorites, favoritesList }) => {
  const handleFavorites = (id) => {
    if (favoritesList.includes(id)) {
      setFavorites(favoritesList.filter((selectedId) => selectedId !== id));
    } else if (favoritesList.length < 5) {
      setFavorites([...favoritesList, id]);
      console.log(favoritesList);
    }
  };

  return (
    <div className="characters" data-testid="characters">
      <div className="container">
        {isLoading ? (
          <Loading text="Carregando..." />
        ) : (
          <div className="characters__list">
            {data.length &&
              data.map((character) => (
                <CharactersItem
                  className="characters__link__item"
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  thumbnailPath={character.thumbnail.path}
                  imgExtension={character.thumbnail.extension}
                  uri={character.resourceURI}
                  setFavorites={setFavorites}
                  favoritesList={favoritesList}
                  handleFavorites={handleFavorites}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

Characters.defaultProps = {
  isLoading: false,
  like: false,
};

Characters.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Characters;
