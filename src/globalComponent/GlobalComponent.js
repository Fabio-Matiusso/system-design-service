import React from 'react';
import Menu from '../pages/menu/Menu';
import Solutions from '../pages/menu/solutions/Solutions';
import GridServices from '../pages/menu/gridServices/GridServices';
import Apresentation from '../pages/menu/apresentation/Apresentation';
import Slide from '../pages/menu/slide/Slide';

const GlobalComponent = () => {
  return (
    <>
      <Menu />
      <Solutions />
      <GridServices />
      <Apresentation />
      <Slide />
    </>
  );
};

export default GlobalComponent;
