import React from 'react';

import { Toggle } from '../../components/index';
import { ReactComponent as HeroIcon } from '../../assets/images/hero.svg';
import { ReactComponent as HeartFilledIcon } from '../../assets/images/heart-filled.svg';

import './HeaderList.scss';

const HeaderList = ({ data = [], sortByName, handleOnlyFavorites }) => {
  return (
    <section className="header-list">
      <p className="result-paragraph">{`Encontrados ${data.length} resultados`}</p>

      <div className="sort-label">
        <HeroIcon className="sort-label__icon" />
        <p>Ordenar por nome - A/Z</p>
        <Toggle sortByName={sortByName} />
      </div>

      <button
        className="button-favorites"
        onClick={() => handleOnlyFavorites()}
      >
        <HeartFilledIcon className="button-favorites__icon" />
        <p>Somente favoritos</p>
      </button>
    </section>
  );
};

export default HeaderList;
