import styled from 'styled-components';

export const ContainerSolution = styled.section`
  max-width: 740px;
  max-height: 300px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 150px 0px;

  @media (max-width: 600px) {
    max-height: 500px;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 71px;

  @media (max-width: 900px) {
    font-size: 48px;
  }
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
