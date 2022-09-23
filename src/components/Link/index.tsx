import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  color,
  space,
  typography,
  position,
  layout,
  flexbox,
  ColorProps,
  SpaceProps,
  compose,
} from 'styled-system';
import { Link as RouterLink } from 'react-router-dom';

const CustomRouterLink = props => {
  const { to } = props;
  const [link, setLink] = useState(to);

  useEffect(() => {
    setLink(to);
    console.log(link)
  }, [to, link]);

  return (
    <RouterLink {...props} to={link}>
      {props.children}
    </RouterLink>
  );
};

const Link = styled(CustomRouterLink)<ColorProps & SpaceProps & any>`
  ${compose(color, space, typography, position, flexbox, layout)};
`;

const LinkHoverState = styled(CustomRouterLink)<ColorProps & SpaceProps & any>`
  ${compose(color, space, typography, position, flexbox, layout)};

  &:hover {
    span {
      color: ${props => props.theme.colors.primaryBlack};
      path {
        fill: ${props => props.theme.colors.primaryBlack};
      }
    }
  }
`;

export { Link, LinkHoverState };
