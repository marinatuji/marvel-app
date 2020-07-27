import React from 'react';

import { Search } from '../index.jsx';

import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';

import './Header.scss';

const Header = ({ onChangeToSearch }) => {
  return (
    <div className="container">
      <header className="header">
        <LogoSvg
          className="header-logo"
          src="../../assets/images/logo@2x.png"
          alt="logo marvel buscar heroes"
        />

        <div className="header-title">
          <h1>Explore o Universo</h1>
          <p>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve!
          </p>
        </div>

        <div className="header-search">
          <Search onChangeToSearch={onChangeToSearch} />
        </div>
      </header>
    </div>
  );
};

export default Header;
