/**
 *
 * Login
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Flex, H3 } from '../../components';
import styled from '@emotion/styled';

export function TimeTracker(props: any) {
  return (
    <>
      <Helmet
        titleTemplate={'%s - ' + 'Welcome to U-Work'}
        defaultTitle={'Time Tracker'}
      />
      <HeaderContentWrapper>
        <Flex alignItems="center">
          <H3 color="dimGray">{'Time Tracker'}</H3>
        </Flex>
      </HeaderContentWrapper>
    </>
  );
}

const HeaderContentWrapper = styled(Flex)<any>`
  width: 100%;
`;
