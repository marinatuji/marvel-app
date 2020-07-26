import React from 'react';

import Header from '../../components/Header';
import HeaderList from '../../components/HeaderList';
import Characters from '../Characters';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HeaderList />
      <Characters />
    </React.Fragment>
  );
};

export default Home;
