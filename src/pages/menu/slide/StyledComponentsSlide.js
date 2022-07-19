import styled from 'styled-components';

export const ContainerSlide = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #030303;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
`;
