/**
 *
 * Login
 *
 */

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { PublicLayout } from '../../components/PublicLayout';
import { Flex, Box, H2, P } from '../../components';
import { LoginForm } from './components/LoginForm';

export function Login(props: any) {

  return (
    <>
      <Helmet>
        <title>{'Login to U-Work'}</title>
        <meta name="description" content="Login to U-Work" />
      </Helmet>
      <PublicLayout>
        <Flex
          minHeight="100%"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Flex
            mt="17rem"
            className={`col-md-10 p-0 header-title-wrapper`}
            flexDirection="column"
          >
            <Box pb="xl" className="header-title">
              {/* <IconWrapper icon={QualeeLogo} className="qualee-icon" /> */}
              <H2 color="primaryGreen" mb="xs">
                {'Log in to U-Work'}
              </H2>
              <P fontSize="h6" lineHeight="body">
                {'Helping you manage your work flexibly and efficiently.'}
              </P>
            </Box>
            <LoginForm />
          </Flex>
          <div />
        </Flex>
      </PublicLayout>
    </>
  );
}

