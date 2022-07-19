import styled from 'styled-components';

export const ContainerApresentation = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 500px;
  align-items: center;
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 200px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  max-width: 50%;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 50px;
  color: #030303;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #7a746e;
`;

export const Button = styled.button`
  width: 228px;
  height: 56px;
  border-radius: 40px;
  color: #fff;
  border: none;
  transition: all 0.1s ease;
`;
