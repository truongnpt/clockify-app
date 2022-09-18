import styled from '@emotion/styled';
import {
  flexbox,
  color,
  space,
  layout,
  position,
  border,
  typography,
  BorderProps,
  ColorProps,
  SpaceProps,
  FlexboxProps,
  ShadowProps,
  LayoutProps,
  shadow,
  compose,
  system,
  variant,
  TypographyProps,
} from 'styled-system';
// import shouldForwardProp from '@styled-system/should-forward-prop';

const Box = styled.div<
  ColorProps & SpaceProps & BorderProps & ShadowProps & any
>`
  ${system({
    cursor: {
      property: 'cursor',
      defaultScale: { pointer: 'pointer' },
    },
  })}
  ${variant({
    prop: 'variant',
    variants: {
      default: {
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.04)',
        borderRadius: '5px',
        border: '1px solid',
        borderColor: 'northeastSnow',
      },
    },
  })}
  ${compose(color, space, layout, position, border, shadow, flexbox)};
`;

const Flex = styled(Box)<
  ColorProps & SpaceProps & FlexboxProps & LayoutProps & TypographyProps & any
>`
  display: flex;
  ${compose(flexbox, layout)};
`;
const DivideFlex = styled.div`
  ${flexbox}
`;

const Div = styled.div<
  ColorProps & SpaceProps & BorderProps & ShadowProps & TypographyProps & any
>`
  ${compose(
    color,
    space,
    layout,
    position,
    border,
    shadow,
    flexbox,
    typography,
  )};
`;

export { Box, Flex, DivideFlex, Div };
