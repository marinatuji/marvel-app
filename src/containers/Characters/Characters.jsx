import React from 'react';
import PropTypes from 'prop-types';

import { Loading } from '../../components';

import CharactersItem from './CharactersItem';

const Characters = ({ data, isLoading, url }) => (
  <div className="characters" data-testid="characters">
    <div className="container">
      {isLoading ? (
        <Loading text="Carregando..." />
      ) : (
        <div className="characters">
          {data.length &&
            data.map((character) => (
              <CharactersItem
                icon={character.icons[0]}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                url={url}
              />
            ))}
        </div>
      )}
    </div>
  </div>
);

Characters.defaultProps = {
  isLoading: false,
};

Characters.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  url: PropTypes.string.isRequired,
};

export default Characters;
