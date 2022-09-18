import React from 'react';
import styled from '@emotion/styled';

import {
  space,
  layout,
  position,
  typography,
  opacity,
  compose,
  system,
  variant,
} from 'styled-system';

const Wrapper = styled.span<any>`
  ${compose(space, layout, position, typography)};
  svg {
    ${variant({
      prop: 'size',
      variants: {
        micro: {
          height: '10px',
          width: '10px',
        },
        tiny: {
          height: '12px',
          width: '12px',
        },
        slightlySmall: {
          height: '16px',
          width: '16px',
        },
        small: {
          height: '24px',
          width: '24px',
        },
        medium: {
          height: '32px',
          width: '32px',
        },
        large: {
          height: '40px',
          width: '40px',
        },
      },
    })}
    ${compose(layout, opacity)},
  }
  path {
    ${system({
      fill: {
        property: 'fill',
        scale: 'colors',
      },
      stroke: {
        property: 'stroke',
        scale: 'colors',
      },
    })}
  }
`;

const CircleWrapper = styled.span`
  ${compose(space, layout, position, typography)};
  svg {
    ${variant({
      prop: 'size',
      variants: {
        micro: {
          height: '10px',
          width: '10x',
        },
        tiny: {
          height: '12px',
          width: '12x',
        },
        small: {
          height: '24px',
          width: '24px',
        },
        medium: {
          height: '32px',
          width: '32px',
        },
        large: {
          height: '40px',
          width: '40px',
        },
      },
    })}
    ${layout}
  }
  circle {
    ${system({
      fill: {
        property: 'fill',
        scale: 'colors',
      },
    })}
  }
`;

const DriverWrapper = styled.span`
  ${compose(space, layout, position, typography)};

  path:first-of-type {
    ${system({
      fillPath1: {
        property: 'fill',
        scale: 'colors',
      },
    })}
  }

  path:nth-of-type(2) {
    ${system({
      fillPath2: {
        property: 'fill',
        scale: 'colors',
      },
    })}
  }

  path:last-child {
    ${system({
      fillPath3: {
        property: 'fill',
        scale: 'colors',
      },
    })}
  }
`;

export function IconWrapper(props: any) {
  return <Wrapper {...props}>{React.createElement(props.icon)}</Wrapper>;
}

export function IconCircleWrapper(props: any) {
  return (
    <CircleWrapper {...props}>{React.createElement(props.icon)}</CircleWrapper>
  );
}

export function IconDriverWrapper(props: any) {
  return (
    <DriverWrapper {...props}>{React.createElement(props.icon)}</DriverWrapper>
  );
}
