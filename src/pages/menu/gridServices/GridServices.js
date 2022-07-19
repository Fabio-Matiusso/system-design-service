import React from 'react';
import { Fade } from 'react-reveal';
import PatternGraphicDesign from '../../../assets/pattern-graphic-design.svg';
import PatternUxUiDesign from '../../../assets/pattern-ui-ux.svg';
import PatternApps from '../../../assets/pattern-apps.svg';
import PatternIllustrations from '../../../assets/pattern-illustrations.svg';
import PatternMotionGraphics from '../../../assets/pattern-graphic-design.svg';
import PatternPhotography from '../../../assets/pattern-photography.svg';
import {
  GridContainerServices,
  GraphicDesign,
  UiUx,
  Apps,
  Illustration,
  Photograph,
  MotionGraphics,
  StyledTitle,
} from './StyledComponentsGridServices';

const GridServices = () => {
  const infos = [
    {
      title: 'Graphic Design',
      image: PatternGraphicDesign,
    },
    {
      title: 'UI/UX',
      image: PatternUxUiDesign,
    },
    {
      title: 'Apps',
      image: PatternApps,
    },
    {
      title: 'Photography',
      image: PatternPhotography,
    },
    {
      title: 'Illustrations',
      image: PatternIllustrations,
    },
    {
      title: 'Motion Graphics',
      image: PatternMotionGraphics,
    },
  ];

  function showContent(titleComponent, imageComponent) {
    const infosMap = infos.map(({ title, image }) => ({
      title: title,
      image: image,
    }));

    const info = infosMap.filter(
      ({ title, image }) =>
        title === titleComponent && image === imageComponent,
    );
    const mapingFilterInfo = info.map(({ title, image }) => (
      <>
        <StyledTitle>{title}</StyledTitle>
        <img src={image} alt="Service" />
      </>
    ));

    return mapingFilterInfo;
  }

  return (
    <Fade bottom>
      <GridContainerServices>
        <GraphicDesign>
          {showContent('Graphic Design', PatternGraphicDesign)}
        </GraphicDesign>
        <UiUx>{showContent('UI/UX', PatternUxUiDesign)}</UiUx>
        <Apps>{showContent('Apps', PatternApps)}</Apps>
        <Illustration>
          {showContent('Illustrations', PatternIllustrations)}
        </Illustration>
        <Photograph>
          {showContent('Photography', PatternPhotography)}
        </Photograph>
        <MotionGraphics>
          {showContent('Motion Graphics', PatternMotionGraphics)}
        </MotionGraphics>
      </GridContainerServices>
    </Fade>
  );
};

export default GridServices;
