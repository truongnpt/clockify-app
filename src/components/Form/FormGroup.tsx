import { FormGroup as BootstrapFormGroup } from 'react-bootstrap';
import shouldForwardProp from '@styled-system/should-forward-prop';
import styled from '@emotion/styled';
import {
  flexbox,
  color,
  space,
  layout,
  ColorProps,
  SpaceProps,
  FlexboxProps,
  typography,
} from 'styled-system';

const FormGroup = styled(BootstrapFormGroup)<any>(
  {
    marginBottom: '20px',
  },
  layout,
  color,
  space,
  typography,
);

const FlexFormGroup = styled(BootstrapFormGroup, { shouldForwardProp })<
  ColorProps & SpaceProps & FlexboxProps
>`
  display: flex;
  ${color};
  ${space};
  ${flexbox};
  ${layout};
`;

export { FormGroup, FlexFormGroup };
