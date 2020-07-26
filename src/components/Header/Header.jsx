import React from 'react';

import { Search } from '../index.jsx';

import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';

import './Header.scss';

const Header = () => {
  return (
    <header className="container">
      <div className="container__header">
        <LogoSvg
          src="../../assets/images/logo@2x.png"
          alt="logo marvel buscar heroes"
        />

        <div className="header-title">
          <h1>Explore o Universo</h1>
          <p>
            Mergulhe no domínio deslumbrantee todos os personagens clássicos que
            você ama - e aqueles que você descobrirá em breve!
          </p>
        </div>

        <div className="header-search">
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
