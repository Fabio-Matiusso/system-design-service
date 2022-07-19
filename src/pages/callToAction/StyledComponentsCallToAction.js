import styled from 'styled-components';

export const ContainerCallToAction = styled.section`
  max-width: 1110px;
  margin: 100px auto;
  display: flex;
  justify-content: space-evenly;
  background: #030303;
  border-radius: 10px;
  flex-direction: row-reverse;
  height: 300px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 50%;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 50px;
  color: #fff7f0;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #fff7f0;
`;

export const Button = styled.button`
  color: white;
  width: 228px;
  height: 48px;
  border-radius: 50px;
  font-weight: 550;
  align-self: center;
  transition: all 0.1s ease;
`;
