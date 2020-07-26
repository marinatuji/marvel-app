import React from 'react';

import { ReactComponent as IconLupa } from '../../assets/images/lupa.svg';

const Search = () => {
  return (
    <div className="search">
      <i className="search-icon" aria-hidden="true">
        <IconLupa />
      </i>
      <input className="search-input" placeholder="Procure por heróis..." />
    </div>
  );
};

export default Search;
