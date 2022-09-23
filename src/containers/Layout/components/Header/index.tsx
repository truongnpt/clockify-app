/**
 *
 * Header
 *
 */

import styled from '@emotion/styled';
import {
  Box,
  DropDownWrapper,
  NavDropDownWrapper,
  Flex,
  H3,
  IconWrapper,
  Span,
} from 'components';
import { UWorkWhiteLogo } from 'components/IconWrapper/Common';
import { Notification } from 'components/IconWrapper/Header';
import React, { memo, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { ActionsDropdown } from '../AcctionsDropDown';

export const Header = memo(() => {
  const listWorkspaces = [
    {
      id: 1,
      name: 'Fabatechnology, Ltd',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Codespace, Ltd',
      status: 'Active',
    },
  ];

  const listNotifications = [];

  const infoUser = {
    name: 'TruongNP',
    avata: null,
    email: 'truongnp@fabatechnology.com',
  };

  const [currentWorkspace, setCurrentWorkspace] = useState(listWorkspaces[0]);

  return (
    <HeaderWrapper
      alignItems="center"
      justifyContent="space-between"
      bg="primaryGreen"
      pr="s"
      py="m"
      id="main-header"
    >
      <Flex alignItems="center">
        <UWorkLogo
          icon={UWorkWhiteLogo}
          fill="primaryWhite"
          onClick={() => window.open('/')}
          className="cursor-pointer"
        />
        <H3 color="primaryWhite" ml="m">
          {'U-Work'}
        </H3>
      </Flex>
      <Flex alignItems="center">
        <Box mx="m">
          <NavDropDownWrapper
            id="workspaces"
            background="transparent"
            color="primaryWhite"
            title={currentWorkspace.name}
          >
            <NavDropdown.Header className="mx-3 mt-3 text-uppercase">
              {'workspaces'}
            </NavDropdown.Header>
            <NavDropdown.Divider />
            <Flex py="m" px="l" flexDirection="column" width="250px">
              <Flex flexDirection="column">
                {listWorkspaces.map(workspace => (
                  <Span
                    color={
                      workspace.id === currentWorkspace.id
                        ? 'primaryWhite'
                        : 'dimGray'
                    }
                    backgroundColor={
                      workspace.id === currentWorkspace.id
                        ? 'primaryGreen'
                        : 'primaryWhite'
                    }
                    key={workspace.id}
                    className="cursor-pointer"
                    onClick={() => {
                      setCurrentWorkspace(workspace);
                    }}
                  >
                    {workspace.name}
                  </Span>
                ))}
              </Flex>
            </Flex>
          </NavDropDownWrapper>
        </Box>
        <Box mx="m">
          <DropDownWrapper
            id="notifications"
            background="transparent"
            color="primaryWhite"
            icon={
              <IconWrapper
                size="small"
                icon={Notification}
                fill="primaryWhite"
              />
            }
          >
            <NavDropdown.Header className="mx-3 mt-3 text-uppercase">
              {'notifications'}
            </NavDropdown.Header>
            <NavDropdown.Divider />
            <Flex py="m" px="l" flexDirection="column" width="250px">
              <Flex flexDirection="column">
                {listNotifications.length > 0 ? (
                  listNotifications.map((noti: any) => (
                    <Span
                      key={noti?.id}
                      className="cursor-pointer"
                      onClick={() => {}}
                    >
                      {noti?.name}
                    </Span>
                  ))
                ) : (
                  <Span color="dimGray">{'No new notifications'}</Span>
                )}
              </Flex>
            </Flex>
          </DropDownWrapper>
        </Box>
        <Box mx="m">
          <ActionsDropdown infoUser={infoUser} />
        </Box>
      </Flex>
    </HeaderWrapper>
  );
});

const HeaderWrapper = styled(Flex)<any>`
  width: 100%;
  padding: 10px 30px;
  box-shadow: 0 0 5px #9b9b9b;
`;

const UWorkLogo = styled(IconWrapper)`
  width: 40px;
  height: auto;

  svg {
    width: 40px;
    height: auto;
  }
`;
