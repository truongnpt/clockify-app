import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Header } from './components/Header';
import { LoadingComponent } from '../../components/LoadingPage';
import { Box, Flex } from 'components';
import { LeftBarMenu } from './components/LeftBarMenu';
import { Timesheet } from 'containers/Timesheet';
import { TimeTracker } from 'containers/TimeTracker';
import { Route, Routes } from 'react-router-dom';
import { Team } from 'containers/Team';
import { Projects } from 'containers/Projects';
declare global {
  interface Window {
    fcWidget: any;
  }
}

export function Layout() {
  const isLoading = false;
  const adminRoutes = [
    {
      path: '/timesheet',
      name: 'timesheet',
      exact: true,
      element: <Timesheet />,
      isAccessible: true,
    },
    {
      path: '/time-tracker',
      name: 'time_tracker',
      exact: true,
      element: <TimeTracker />,
      isAccessible: true,
    },
    {
      path: '/projects',
      name: 'projects',
      exact: true,
      element: <Projects />,
      isAccessible: true,
    },
    {
      path: '/team',
      name: 'team',
      exact: true,
      element: <Team />,
      isAccessible: true,
    },
  ];

  return (
    <Routes>
      {adminRoutes.map(adminRoute => (
        <Route
          key={adminRoute.name}
          path={adminRoute.path}
          element={
            <LayoutWrapper>
              {!isLoading ? (
                <Container>
                  <Header />
                  <PageWrapper>
                    <LeftBarMenu />
                    <Content>{adminRoute.element}</Content>
                  </PageWrapper>
                </Container>
              ) : (
                <Box height="100vh" width="100%">
                  <LoadingComponent />
                </Box>
              )}
            </LayoutWrapper>
          }
        />
      ))}
    </Routes>
  );
}

const LayoutWrapper = styled.div`
  display: flex;
  background: #f5f6f8;
  min-height: 100vh;
  overflow: hidden;
`;

const PageWrapper = styled(Flex)<any>``;

const Content = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  width: calc(100% - 200px);
  transform: translateX(200px);
`;

const Container = styled.div<any>`
  width: 100%;
`;
