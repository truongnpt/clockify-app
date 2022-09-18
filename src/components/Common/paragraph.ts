import styled from '@emotion/styled';
import {
  color,
  space,
  textAlign,
  ColorProps,
  FontWeightProps,
  SpaceProps,
  FontSizeProps,
  TypographyProps,
  fontSize,
  variant,
  TextAlignProps,
  compose,
  fontWeight,
  layout,
  typography,
  opacity,
} from 'styled-system';

const P = styled.p<
  ColorProps &
    SpaceProps &
    FontWeightProps &
    FontSizeProps &
    TypographyProps &
    TextAlignProps &
    any
>`
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.primaryBlack};
  ${fontSize};
  ${compose(color, space, fontSize, textAlign, fontWeight)};
`;

const Span = styled.span<
  ColorProps & FontSizeProps & SpaceProps & FontWeightProps & any
>`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.regular};
  ${color};
  ${space};
  ${fontSize};
  ${fontWeight};
  ${layout};
  ${typography};
  ${opacity};
  ${variant({
    prop: 'variant',
    variants: {
      body: {
        fontWeight: 'regular',
      },
      bodyBold: {
        fontWeight: 'bold',
      },
      bodyItalic: {
        fontStyle: 'italic',
      },
      small: {
        fontSize: 'small',
        fontWeight: 'regular',
      },
      smallBold: {
        fontSize: 'small',
        fontWeight: 'bold',
      },
    },
  })}
`;

export { P, Span };
