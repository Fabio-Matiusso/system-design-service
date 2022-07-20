import styled from 'styled-components';

export const ContainerApresentation = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 500px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 1100px;
  }
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 200px;

  @media (max-width: 900px) {
    width: 300px;
    height: 300px;
    border-radius: 150px;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }
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

  @media (max-width: 900px) {
    font-size: 26px;
  }
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #7a746e;

  @media (max-width: 900px) {
    max-width: 80%;
  }

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  width: 228px;
  height: 56px;
  border-radius: 40px;
  color: #fff;
  border: none;
  transition: all 0.1s ease;

  @media (max-width: 900px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;
