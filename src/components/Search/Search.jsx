import React from 'react';

import { ReactComponent as IconLupa } from '../../assets/images/lupa.svg';

import './Search.scss';

const Search = ({ onChangeToSearch }) => {
  return (
    <div className="search">
      <IconLupa className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Procure por heróis..."
        onChange={(e) => onChangeToSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
