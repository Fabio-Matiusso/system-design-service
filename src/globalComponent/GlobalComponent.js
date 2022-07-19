import React from 'react';
import Menu from '../pages/menu/Menu';
import Solutions from '../pages/solutions/Solutions';
import GridServices from '../pages/gridServices/GridServices';
import Apresentation from '../pages/apresentation/Apresentation';
import Slide from '../pages/slide/Slide';
import CallToAction from '../pages/callToAction/CallToAction';

const GlobalComponent = () => {
  return (
    <>
      <Menu />
      <Solutions />
      <GridServices />
      <Apresentation />
      <Slide />
      <CallToAction />
      <Menu />
    </>
  );
};

export default GlobalComponent;
