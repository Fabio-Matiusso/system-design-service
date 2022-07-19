import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import {
  ContainerCallToAction,
  Button,
  Info,
  Title,
  Description,
} from './StyledComponentsCallToAction';

const CallToAction = () => {
  const [button, setButton] = useState('#EB7565');

  const handleChange = () => {
    setButton('#F6A560');
  };

  const handleInitial = () => {
    setButton('#EB7565');
  };

  const infos = [
    {
      title: 'Book a call with me',
      description:
        'I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.',
    },
  ];

  const infosMap = infos.map(({ title, description }) => (
    <Fade bottom cascade>
      <ContainerCallToAction>
        <Button
          style={{ background: button }}
          onMouseOver={handleChange}
          onMouseOut={handleInitial}
        >
          Free Consultation
        </Button>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
      </ContainerCallToAction>
    </Fade>
  ));

  return infosMap;
};

export default CallToAction;
