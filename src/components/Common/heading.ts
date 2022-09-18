import styled from '@emotion/styled';
import {
  color,
  space,
  typography,
  position,
  border,
  fontWeight,
  ColorProps,
  SpaceProps,
  FontWeightProps,
  compose,
} from 'styled-system';

type BaseHeadingProps = ColorProps & SpaceProps & FontWeightProps & any;

export const H1 = styled('h1')<BaseHeadingProps>`
  font-size: ${props => props.theme.fontSizes.h1};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.h1};
  font-family: ${props => props.theme.fonts.secondary};
  ${compose(color, space, typography, position, border)};
`;

export const H2 = styled('h2')<BaseHeadingProps>`
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.h2};
  font-family: ${props => props.theme.fonts.secondary};
  ${compose(color, space, typography, position, border)};
`;

export const H3 = styled('h3')<BaseHeadingProps>`
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.h3};
  font-family: ${props => props.theme.fonts.secondary};
  ${compose(color, space, typography, position, border)};
`;

export const H4 = styled('h4')<BaseHeadingProps>`
  font-size: ${props => props.theme.fontSizes.h4};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.h4};
  font-family: ${props => props.theme.fonts.secondary};
  ${compose(color, space, typography, position, border)};
`;

export const H5 = styled('h5')<BaseHeadingProps>`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.h5};
  font-family: ${props => props.theme.fonts.secondary};
  ${compose(color, space, typography, position, border)};
`;

export const H6 = styled('h6')<BaseHeadingProps>`
  font-size: ${props => props.theme.fontSizes.h6};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.h6};
  font-family: ${props => props.theme.fonts.primary};
  ${compose(color, space, typography, position, border, fontWeight)};
`;
