import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as HeroIcon } from '../../assets/images/hero.svg';
import { ReactComponent as HeartFilledIcon } from '../../assets/images/heart-filled.svg';

import './HeaderList.scss';

const HeaderList = ({ searchResult = 20 }) => {
  return (
    <section className="header-list">
      <p className="result-paragraph">{`Encontrados ${searchResult} resultados`}</p>

      <div className="sort-label">
        <HeroIcon className="icon" />
        <p>Ordenar por nome - A/Z</p>
      </div>

      <button className="toggle-button"></button>

      <Link className="favorites-page" to="/favorites">
        <HeartFilledIcon className="icon" />
        <p>Somente favoritos</p>
      </Link>
    </section>
  );
};

export default HeaderList;
