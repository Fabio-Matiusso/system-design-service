import styled from 'styled-components';

export const GridContainerServices = styled.article`
  display: grid;
  max-width: 1100px;
  max-height: 388px;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 20px;
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
`;

export const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
`;
