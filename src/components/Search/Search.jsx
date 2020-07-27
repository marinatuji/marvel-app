import React from 'react';

import { ReactComponent as IconLupa } from '../../assets/images/lupa.svg';

import './Search.scss';

const Search = ({ onChangeToSearch }) => {
  const myOnChange = (e) => {
    onChangeToSearch(e.target.value);
  };

  return (
    <div className="search">
      <IconLupa className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Procure por heróis..."
        onChange={myOnChange}
      />
    </div>
  );
};

export default Search;
