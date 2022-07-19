import React, { useState } from 'react';
import Amy from '../../../assets/image-amy.webp';
import { Fade } from 'react-reveal';
import {
  ContainerApresentation,
  Image,
  Info,
  Title,
  Description,
  Button,
} from './StyledComponentsApresentation';

const Apresentation = () => {
  const [colorButton, setColorButton] = useState('#EB7565');

  const handleChange = () => {
    setColorButton('#F6A560');
  };

  const handleInitial = () => {
    setColorButton('#EB7565');
  };

  const infos = [
    {
      title: 'I’m Amy, and I’d love to work on your next project',
      description:
        'I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!',
    },
  ];

  const infosMap = infos.map(({ title, description }) => (
    <Fade left cascade>
      <ContainerApresentation>
        <Image src={Amy} alt="Amy" />
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button
            onMouseOver={handleChange}
            onMouseOut={handleInitial}
            style={{ background: colorButton }}
          >
            Free Consultation
          </Button>
        </Info>
      </ContainerApresentation>
    </Fade>
  ));

  return infosMap;
};

export default Apresentation;
