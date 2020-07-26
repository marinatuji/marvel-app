import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharactersItem = ({ id, icon, name, url, image }) => (
  <div
    className="characters__item"
    data-testid="character"
    style={{ backgroundImage: `url(${icon.url})` }}
  >
    <Link to={`${url}/${id}`} className="characters__item__link">
      <span className="characters__item__title">{name}</span>

      <div>{image}</div>
    </Link>
  </div>
);

CharactersItem.propTypes = {
  icon: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CharactersItem;
