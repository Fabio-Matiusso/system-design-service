import styled from 'styled-components';

export const GridContainerServices = styled.article`
  display: grid;
  max-width: 1100px;
  max-height: 388px;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 100px);
  }
`;

export const GraphicDesign = styled.div`
  grid-column: 1;
  grid-row: 1 /-1;
  background: #755cde;
  border-radius: 8px;
  display: grid;
  padding: 8px;
  img {
    align-self: flex-start;
    grid-row: 1;
    justify-self: flex-end;
  }

  h1 {
    align-self: flex-end;
  }

  @media (max-width: 600px) {
    grid-row: 1 / 3;
    grid-column: 1 / 3;

    img {
      max-width: 40%;
    }

    h1 {
      font-size: 18px;
    }
  }
`;

export const UiUx = styled.div`
  grid-row: 1;
  grid-column: 2;
  background: #f6a560;
  border-radius: 8px;
  display: grid;
  padding: 8px;

  img {
    align-self: flex-start;
    grid-row: 1;
    justify-self: flex-end;
  }

  h1 {
    align-self: flex-end;
  }

  @media (max-width: 600px) {
    grid-column: 3 / 4;

    img {
      max-width: 40%;
    }

    h1 {
      font-size: 18px;
    }
  }
`;

export const Apps = styled.div`
  grid-row: 1;
  grid-column: 3;
  background: #f39e9e;
  border-radius: 8px;
  padding: 8px;

  display: grid;

  img {
    align-self: flex-start;
    grid-row: 1;
    justify-self: flex-end;
  }

  h1 {
    align-self: flex-end;
  }

  @media (max-width: 600px) {
    grid-column: 4 / 5;

    img {
      max-width: 40%;
    }

    h1 {
      font-size: 18px;
    }
  }
`;

export const Illustration = styled.div`
  grid-row: 2;
  grid-column: 2 / 4;
  background: #eb7565;
  border-radius: 8px;
  padding: 8px;
  display: grid;

  img {
    align-self: flex-start;
    grid-row: 1;
    justify-self: flex-end;
  }

  h1 {
    align-self: flex-end;
  }

  @media (max-width: 600px) {
    grid-column: 3 / 5;

    img {
      max-width: 40%;
    }

    h1 {
      font-size: 18px;
    }
  }
`;

export const Photograph = styled.div`
  grid-row: 1;
  grid-column: 4;
  background: #61c4b7;
  border-radius: 8px;
  padding: 8px;

  display: grid;

  img {
    align-self: flex-start;
    grid-row: 1;
    justify-self: flex-end;
    max-width: 120px;
  }

  h1 {
    align-self: flex-end;
  }

  @media (max-width: 600px) {
    grid-column: 1 / 3;
    grid-row: 3;
  }

  h1 {
    font-size: 18px;
  }
`;

export const MotionGraphics = styled.div`
  grid-row: 2;
  grid-column: 4 / 5;
  background: #552049;
  border-radius: 8px;
  padding: 8px;
  display: grid;

  img {
    align-self: flex-start;
    grid-row: 1;
    justify-self: flex-end;
  }

  h1 {
    align-self: flex-end;
    grid-row: 2;
  }

  @media (max-width: 600px) {
    grid-column: 3 / 5;
    grid-row: 3;
    grid-template-columns: repeat(1, 1fr);

    img {
      max-width: 40%;
      grid-row: 1 / -1;
      grid-column: 2;
    }

    h1 {
      font-size: 18px;
      grid-column: 1 / -1;
      grid-row: 1;
    }
  }
`;

export const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
`;
