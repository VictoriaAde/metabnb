import React from 'react';
import Cta from './cta/Cta';
import Header from './header/Header';
import Halfnfts from './place-to-stay/Halfnfts';

const Main = () => {
  return (
    <main>
      <Header />
      <Halfnfts />
      <Cta />
    </main>
  );
};

export default Main;
