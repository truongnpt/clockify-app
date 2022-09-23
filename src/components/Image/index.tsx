import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from '@emotion/styled';
import { compose, layout, space, SpaceProps } from 'styled-system';

interface Props extends SpaceProps {
  alt: string;
  src: string;
  isCircle?: boolean;
  className?: string;
  onClick?: any;
  [key: string]: any;
}

/*
  This component use for loading image when the image is loading slowly
 */
export const Image = (props: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  return (
    <React.Fragment>
      {!isImageLoaded && (
        <Skeleton width={'100%'} height={'100%'} circle={props?.isCircle} />
      )}
      <ImageStyled
        isImageLoaded={isImageLoaded}
        onLoad={() => setIsImageLoaded(true)}
        {...props}
      />
    </React.Fragment>
  );
};

const ImageStyled = styled.img<Props & any>`
  display: ${props => (props.isImageLoaded ? 'block' : 'none')};
  ${compose(layout, space)}
`;
