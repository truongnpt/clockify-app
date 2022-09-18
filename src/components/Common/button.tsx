import styled from '@emotion/styled';
import { variant } from 'styled-system';
import { layout, color, space, border, typography } from 'styled-system';

export const Button = styled.button<any>(
  {
    padding: '6px 15px;',
    borderRadius: '5px',
    fontWeight: 'bold',
    lineHeight: 'body',
    outline: 'none',
    border: '0',
    '&:focus': {
      outline: 'none',
    },
    height: '32px',
  },

  variant({
    prop: 'variant',
    variants: {
      primary: {
        color: 'primaryWhite',
        bg: 'primaryGreen',
        '&:hover': {
          bg: 'primaryBlack',
        },
        '&:disabled': {
          opacity: 0.5,
        },
        '&:focus': {
          outline: 'none',
        },
      },
      secondary: {
        color: 'primaryGreen',
        bg: 'primaryWhite',
        padding: '5px 14px;',
        border: '1px solid',
        borderColor: 'primaryGreen',
        '&:hover': {
          bg: 'primaryBlack',
          color: 'primaryWhite',
        },
        '&:disabled': {
          opacity: 0.5,
        },
      },
      warning: {
        color: 'primaryWhite',
        bg: 'redPigment',
        '&:hover': {
          bg: '#C20E0E',
        },
        '&:disabled': {
          opacity: 0.5,
        },
      },
      tertiary: {
        color: 'primaryGreen',
        '&:hover': {
          color: 'primaryGreen',
        },
        '&:disabled': {
          opacity: 0.5,
        },
      },
      tertiaryWarning: {
        color: 'redPigment',
        bg: 'transparent',
        '&:hover': {
          bg: 'transparent',
        },
        '&:disabled': {
          opacity: 0.5,
        },
      },
      number: {
        bg: 'white',
        height: '25px',
        justifyContent: 'center',
        padding: '0 7px',
        fontWeight: 'normal',
        border: '1px solid',
        borderColor: 'silver',
      },
      numberSelected: {
        bg: 'primaryGreen',
        color: 'white',
        height: '25px',
        justifyContent: 'center',
        padding: '0 7px',
        fontWeight: 'normal',
        border: '1px solid',
        borderColor: 'silver',
      },
    },
  }),
  layout,
  border,
  space,
  color,
  typography,
);
