import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as HeroIcon } from '../../assets/images/hero.svg';
import { ReactComponent as HeartFilledIcon } from '../../assets/images/heart-filled.svg';

import './HeaderList.scss';

const HeaderList = ({ data = [], sortByName }) => {
  return (
    <section className="header-list">
      <p className="result-paragraph">{`Encontrados ${data.length} resultados`}</p>

      <div className="sort-label">
        <HeroIcon className="sort-label__icon" />
        <p>Ordenar por nome - A/Z</p>
        <button className="toggle-button" onClick={() => sortByName()}></button>
      </div>

      <Link to="/favorites" className="favorites-page__link">
        <HeartFilledIcon className="favorites-page__icon" />
        <p>Somente favoritos</p>
      </Link>
    </section>
  );
};

export default HeaderList;
