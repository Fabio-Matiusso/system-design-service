import styled from 'styled-components';

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

  @media (max-width: 600px) {
    max-width: 300px;
  }
`;
