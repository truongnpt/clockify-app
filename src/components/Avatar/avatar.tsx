import styled from '@emotion/styled';
import React from 'react';
import { space, SpaceProps } from 'styled-system';
import { variant } from 'styled-system';
import { Image } from '../Image';

export const AvatarWrapper = styled.span<SpaceProps & any>(
  {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    borderRadius: '50%',
    img: {
      position: 'absolute',
      'object-fit': 'cover',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    },
  },
  space,
  variant({
    prop: 'size',
    variants: {
      small: {
        height: '24px',
        width: '24px',
        minWidth: '24px',
      },
      medium: {
        height: '32px',
        width: '32px',
        minWidth: '32px',
      },
      large: {
        height: '40px',
        width: '40px',
        minWidth: '40px',
      },
    },
  }),
);

export const Avatar = props => {
  const { img } = props;
  const avatar = img;

  return (
    <AvatarWrapper {...props}>
      <Image src={avatar} alt="avatar" isCircle={true} />
    </AvatarWrapper>
  );
};
