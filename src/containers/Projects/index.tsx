/**
 *
 * Login
 *
 */

import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Flex, Box, H3 } from '../../components';
import styled from '@emotion/styled';
import { Tabs } from 'components/Tabs';
import { TabPanel } from 'react-tabs';
import { ProjectContent } from '../Projects/components/ProjectContent';
import { ClientContent } from './components/ClientContent';

export function Projects(props: any) {

  const tabLists = [
    {
      id: 'projects',
      title: 'Projects',
      contents: <ProjectContent />,
    },
    {
      id: 'clients',
      title: 'Clients',
      contents: <ClientContent />,
    },
  ];

  const data = useMemo(
    () =>
      tabLists?.map(item => {
        return <TabPanel key={item.id}>{item.contents}</TabPanel>;
      }),
    [],
  );

  return (
    <>
      <Helmet
        titleTemplate={'%s - ' + 'Welcome to U-Work'}
        defaultTitle={'Projects'}
      />
      <HeaderContentWrapper>
        <Box>
          <H3 color="dimGray">{'Projects'}</H3>
        </Box>
      </HeaderContentWrapper>
      <ListProjectsWrapper mt="xl" bg="white" p="l">
        <Tabs tabs={tabLists} contents={data} />
      </ListProjectsWrapper>
    </>
  );
}

const HeaderContentWrapper = styled(Flex)<any>`
  width: 100%;
  align-items: end;
  justify-content: space-between;
`;

const ListProjectsWrapper = styled(Flex)<any>`
  z-index: 1;
`;
