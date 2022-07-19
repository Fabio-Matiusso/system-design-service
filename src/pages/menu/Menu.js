import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { Header, Button } from './StyledComponentsMenu';

const Menu = () => {
  const [button, setButton] = useState('#030303');

  const handleChange = () => {
    setButton('#755CDE');
  };

  const handleInitial = () => {
    setButton('#030303');
  };

  return (
    <Header>
      <img src={Logo} alt="Logotipo" />
      <Button
        style={{ background: button }}
        onMouseOver={handleChange}
        onMouseOut={handleInitial}
      >
        Free Consultation
      </Button>
    </Header>
  );
};

export default Menu;
