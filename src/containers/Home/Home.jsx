import React from 'react';

import { Header, HeaderList } from '../../components';
import { Characters } from '../../containers';

const Home = () => {
  return (
    <>
      <Header />
      <HeaderList />
      <Characters isLoading />
    </>
  );
};

export default Home;
