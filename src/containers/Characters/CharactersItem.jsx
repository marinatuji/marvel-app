import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as Heart } from '../../assets/images/heart.svg';
import { ReactComponent as HeartFilled } from '../../assets/images/heart-filled.svg';
import { apiKey, apiHost } from '../../constants/api.js';

import './CharactersItem.scss';

const CharactersItem = ({
  id,
  thumbnailPath,
  imgExtension,
  name,
  favoritesList,
  handleFavorites,
}) => {
  return (
    <div className="characters__item">
      <Link
        to={`${apiHost}/v1/public/characters/${id}?${apiKey}`}
        className="characters__item__link"
      >
        <img
          className="characters__item__image"
          data-testid="character"
          src={`${thumbnailPath}/portrait_xlarge.${imgExtension}`}
          alt="personagem marvel"
        />
      </Link>
      <section className="item-infos-wrapper">
        <div className="item-infos">
          <div className="item-infos__name">{name}</div>
          <button
            className="item-infos__favorites"
            onClick={() => handleFavorites(id)}
          >
            {favoritesList.includes(id) ? <HeartFilled /> : <Heart />}
          </button>
        </div>
        <span className="item-infos__favorites__message">
          Selecione até 5 favoritos!
        </span>
      </section>
    </div>
  );
};

CharactersItem.propTypes = {
  thumbnailPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CharactersItem;
