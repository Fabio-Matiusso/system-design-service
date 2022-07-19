import React from 'react';
import Logo from '../../assets/logo.svg';
import { Header, Button } from './StyledComponentsMenu';

const Menu = () => {
  return (
    <Header>
      <img src={Logo} alt="Logotipo" />
      <Button>Free Consultation</Button>
    </Header>
  );
};

export default Menu;
