/**
 *
 * LoadingPage
 *
 */
import React from 'react';

import { Flex } from '../Common';
import { IconWrapper } from '../IconWrapper';
import { LoadingIcon } from '../IconWrapper/Common';
import styled from '@emotion/styled';
import { LayoutProps } from 'styled-system';

interface Props extends LayoutProps {}

export function LoadingPage(props: Props) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      m="auto"
      width="27%"
      height="75vh"
      {...props}
    >
      <IconWrapper icon={LoadingIcon} className="loading" />
    </Flex>
  );
}

export function LoadingComponent(props) {
  return (
    <LoadingComponentContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      m="auto"
    >
      <IconWrapper icon={LoadingIcon} className="loading" {...props} />
    </LoadingComponentContainer>
  );
}

export function LoadingForEventPage() {
  return (
    <LoadingComponentContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      m="auto"
      transform="translate(calc(50vw - 200px), calc(500% + 200px))"
      zIndex="10"
      className="position-absolute w-auto h-auto"
    >
      <IconWrapper icon={LoadingIcon} className="loading" />
    </LoadingComponentContainer>
  );
}

const LoadingComponentContainer = styled(Flex)<any>`
  height: 100%;
  .loading {
    width: 24px;
  }
  transform: ${p => p.transform};
  opacity: ${p => p.opacity};
`;
