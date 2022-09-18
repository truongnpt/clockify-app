import { Form } from 'react-bootstrap';
import styled from '@emotion/styled';
import {
  color,
  space,
  display,
  layout,
  DisplayProps,
  border,
} from 'styled-system';

const FormControl = styled(Form.Control)<DisplayProps & any>`
  text-align: 'left';
  border-radius: 3px;
  margin-bottom: 7px;
  height: 40px;
  background-color: ${props =>
    props.readOnly && props.theme.colors.northeastSnow} !important;
  color: ${props => props.readOnly && 'hsl(0,0%,60%)'} !important;
  &:focus {
    box-shadow: none;
    outline: none;
    border-color: ${props => props.readOnly && props.theme.colors.silver};
  }
  font-family: ${props => props.theme.fonts.secondary};
  border: 1px solid
    ${props => (props.border ? props.border : props.theme.colors.silver)};
  border-color: ${props => props.readOnly && props.theme.colors.silver};
  background-image: none !important;
  box-shadow: none !important;
  border-color: ${props =>
    props.successValidation ? props.theme.colors.amazon : ''};
  word-break: normal;
  ${color};
  ${space};
  ${display};
  ${layout};
  ${border};

  &:disabled {
    background-color: ${p => p.theme.colors.northeastSnow};
    opacity: 0.8;
  }
`;

const FormControlSelect = styled(Form.Control)<any>`
  width: auto;
  border: none;
  outline: none;
  border-radius: 0;
  padding: 0.375rem 1.75rem 0.375rem 0;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.dimGray};
`;

export { FormControl, FormControlSelect };
