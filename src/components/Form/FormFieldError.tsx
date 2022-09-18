import styled from '@emotion/styled';
import { color, space, SpaceProps, ColorProps } from 'styled-system';
import { ThemeProps } from 'types/theme';
import { ErrorMessage } from 'formik';
import React from 'react';

const ErrorMessageWrapper = function (props: any) {
  return <ErrorMessage component="span" {...props} />;
};

export const FormFieldError = styled(ErrorMessageWrapper)<
  SpaceProps & ColorProps & ThemeProps & any
>`
  margin-top: 5px;
  color: ${props =>
    props.color ? props.color : props.theme.colors.redPigment} !important;
  ${color};
  ${space};
`;
