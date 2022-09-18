/**
 *
 * LayoutAuthentication
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { H2, IconWrapper, Box, Flex } from 'components';
import { UWorkWhiteLogo } from 'components/IconWrapper/Common';
import ConsoleLoginPic from './assets/left-background-login.png';

interface Props {
  children?: any;
  color?: any;
}

export function PublicLayout(props: Props) {

  return (
    <PageWrapper className="container-fluid page-wrapper p-0">
      <Flex flexDirection={'initial'}>
        <LeftBackground
          className="console-picture col-md-7"
          imgSrc={ConsoleLoginPic}
          style={{ transform: 'initial' }}
        >
          <Flex className="min-vh-100 pl-5 pt-5" flexDirection="column" pl="xl">
            <Flex alignItems="center">
              <QualeeIcon
                icon={UWorkWhiteLogo}
                fill="white"
                onClick={() => window.open('/', '_blank')}
                className="cursor-pointer"
              />
              <H2 color="white" ml="m">
                {'U-Work'}
              </H2>
            </Flex>
            <Box className="col-md-8" mt="6rem" mb="10%" pl="0">
              <H2 color="white" mb="m">
                {'Wellcome back!'}
              </H2>
              <H2 color="white" my="m">
                {'Have a productive day.'}
              </H2>
            </Box>
          </Flex>
        </LeftBackground>
        <PublicLayoutWrapper
          className="public-layout-wrapper"
          style={{ textAlign: 'start' }}
        >
          {props.children}
        </PublicLayoutWrapper>
      </Flex>
    </PageWrapper>
  );
}

const LayoutWrapper = styled.div`
  display: flex;
  background: #f5f6f8;
  min-height: 100vh;
  overflow: hidden;
`;

const PageWrapper = styled.div<any>`
  @media (min-width: ${theme.screenResolution.ipad}) {
    .public-layout-wrapper {
      .qualee-icon {
        display: none;
      }
    }
  }

  @media (max-width: ${theme.screenResolution.ipad}) {
    .console-picture {
      display: none;
    }

    .public-layout-wrapper {
      min-height: 650px;
      height: 100vh;
      display: flex;
      justify-content: center;
      padding: 0 50px;

      > div {
        width: 100% !important;
        max-width: 100% !important;
      }

      h2 {
        font-size: ${p => p.theme.fontSizes.h3};
      }

      .header-title-wrapper {
        margin-top: 10rem;
      }

      .header-title {
        text-align: center;
      }

      .mw-form-field {
        max-width: 100% !important;
      }

      .qualee-icon svg {
        width: 120px;
        margin-bottom: ${p => p.theme.space.l};
      }
    }
  }
`;

const LeftBackground = styled(Box)<any>`
  width: 100%;
  height: 100%;
  background-image: url(${p => p.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
`;

const PublicLayoutWrapper = styled.div<any>`
  width: 100%;
  min-height: 100vh;
  padding: 0 100px;
  background: ${theme.colors.northeastSnow};
`;

const QualeeIcon = styled(IconWrapper)`
  width: 60px;

  svg {
    width: 60px;
  }
`;