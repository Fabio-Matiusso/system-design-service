import React from 'react';
import { Fade } from 'react-reveal';
import {
  ContainerSolution,
  Title,
  Description,
} from './StyledComponentsSolutions';

const Solutions = () => {
  const infos = [
    {
      title: 'Design solutions made easy',
      description:
        'With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.',
    },
  ];

  const infosMap = infos.map(({ title, description }) => (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  ));

  return (
    <Fade top>
      <ContainerSolution>{infosMap}</ContainerSolution>
    </Fade>
  );
};

export default Solutions;
