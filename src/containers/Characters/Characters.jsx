import React from 'react';
import PropTypes from 'prop-types';

import CharactersItem from './CharactersItem';
import { Loading } from '../../components';

const Characters = ({ data, isLoading }) => {
  return (
    <div className="characters" data-testid="characters">
      <div className="container">
        {isLoading ? (
          <Loading text="Carregando..." />
        ) : (
          <div className="characters">
            {data.length &&
              data.map((character) => (
                <CharactersItem
                  // icon={character.icons[0]}
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  // image={character.thumbnail.path}
                  // url={url}
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
};

// Characters.propTypes = {
//   data: PropTypes.array,
//   isLoading: PropTypes.bool,
//   url: PropTypes.string,
// };

export default Characters;
