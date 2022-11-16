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
import { MemberContent } from './components/MemberContent';
import { GroupContent } from './components/GroupContent';
import { RoleContent } from './components/RoleContent';

export function Team(props: any) {

  const tabLists = [
    {
      id: 'members',
      title: 'Members',
      contents: <MemberContent />,
    },
    {
      id: 'roles',
      title: 'Roles',
      contents: <RoleContent />,
    },
    {
      id: 'groups',
      title: 'Groups',
      contents: <GroupContent />,
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
        defaultTitle={'Team'}
      />
      <HeaderContentWrapper>
        <Box>
          <H3 color="dimGray">{'Team'}</H3>
        </Box>
      </HeaderContentWrapper>
      <ListTeamWrapper mt="xl" bg="white" p="l">
        <Tabs tabs={tabLists} contents={data} />
      </ListTeamWrapper>
    </>
  );
}

const HeaderContentWrapper = styled(Flex)<any>`
  width: 100%;
  align-items: end;
  justify-content: space-between;
`;

const ListTeamWrapper = styled(Flex)<any>`
  z-index: 1;
`;
