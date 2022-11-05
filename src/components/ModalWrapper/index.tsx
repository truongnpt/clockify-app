import React from 'react';
import { Modal as ModalBootstrap } from 'react-bootstrap';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { Box, H4 } from '../Common';

interface Props {
  title: string;
  children: any;
  visible: boolean;
  handleClose: any;
  width: string;
  marginTop?: string;
  className?: string;
}

export function ModalWrapper(props: Props & any) {
  const { visible, handleClose, title, children, width, className } = props;
  return (
    <ModalContainer
      show={visible}
      onHide={handleClose}
      width={width}
      className={className}
    >
      <Box boxShadow="element" borderRadius="5px" bg="northeastSnow">
        <ModalBootstrap.Header
          closeButton
          className="mb-1"
        >
          <H4>{title}</H4>
        </ModalBootstrap.Header>
        <ModalBody>
          {children}
        </ModalBody>
      </Box>
    </ModalContainer>
  );
}

export const ModalContainer = styled(ModalBootstrap)<any>`
  .modal-dialog {
    max-width: ${props => props.width};
    width: ${props => props.width};
  }

  .modal-header {
    border: 0;
    padding: 30px 30px 0;
    align-items: center;
  }

  .close,
  .close:not(:disabled):not(.disabled):hover,
  .close:not(:disabled):not(.disabled):focus {
    opacity: 1;
    font-size: 2rem;
    margin: -1rem -1rem -1rem auto;
  }

  .close:not(:disabled):not(.disabled):hover {
    color: ${props => props.theme.colors.primaryBlue};
  }
`;

export const ModalBody = styled(ModalBootstrap.Body, { shouldForwardProp })<
  any
>`
  padding: 0px 30px 30px;
`;
