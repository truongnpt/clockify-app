import { Flex } from 'components';
import { Dashboard } from 'components/IconWrapper/LeftBarMenu';
import React from 'react';
import { useLocation } from 'react-router';
import { MenuItem, MenuItemProps } from './MenuItem';
import styled from '@emotion/styled';

export function LeftBarMenu() {
  const location = useLocation();
  const { pathname } = location;

  const listMenuTimesheet = (): MenuItemProps => {
    return {
      title: 'Timesheet',
      to: '/timesheet',
      Icon: Dashboard,
      isActive: pathname.split('/')[1] === 'timesheet',
      isAccessible: true,
      children: [],
    };
  };

  const listMenuTimeTracker = (): MenuItemProps => {
    return {
      title: 'Time Tracker',
      to: '/time-tracker',
      Icon: Dashboard,
      isActive: pathname.split('/')[1] === 'time-tracker',
      isAccessible: true,
      children: [],
    };
  };

  const listMenuDashboard = (): MenuItemProps => {
    return {
      title: 'Dashboard',
      to: '/dashboard',
      Icon: Dashboard,
      isActive: pathname.split('/')[1] === 'dashboard',
      isAccessible: true,
      children: [],
    };
  };

  const listMenuReports = (): MenuItemProps => {
    return {
      title: 'Reports',
      to: '/reports',
      Icon: Dashboard,
      isActive: pathname.split('/')[1] === 'reports',
      isAccessible: true,
      children: [],
    };
  };

  const listMenuProjects = (): MenuItemProps => {
    return {
      title: 'Projects',
      to: '/projects',
      Icon: Dashboard,
      isActive: pathname.split('/')[1] === 'projects',
      isAccessible: true,
      children: [],
    };
  };

  const listMenuTeams = (): MenuItemProps => {
    return {
      title: 'Team',
      to: '/team',
      Icon: Dashboard,
      isActive: pathname.split('/')[1] === 'team',
      isAccessible: true,
      children: [],
    };
  };

  const titleMenu = (name: string) => {
    return {
      title: name,
      to: null,
      isAccessible: true,
    };
  };

  const menuItems: MenuItemProps[] | any = [
    listMenuTimesheet(),
    listMenuTimeTracker(),
    titleMenu('Analyze'),
    listMenuDashboard(),
    listMenuReports(),
    titleMenu('Manage'),
    listMenuProjects(),
    listMenuTeams(),
  ];

  return (
    <Flex
      position="fixed"
      width="200px"
      height="100vh"
      flexDirection="column"
      bg="primaryGreen"
      id="main-sidebar-menu"
    >
      <Flex flexDirection="column">
        {menuItems
          .filter(item => item.isAccessible)
          .map((item, index) => {
            if(item.to === null) {
              return (
                <MenuItemTitle>{item.title}</MenuItemTitle>
              );
            } else {
              return (
                <MenuItem
                  key={index}
                  title={item.title}
                  to={item.to}
                  Icon={item.Icon}
                  isActive={item.isActive}
                  children={item.children}
                />
              );
            }
          })}
      </Flex>
    </Flex>
  );
}

const MenuItemTitle = styled.span<any>`
  position: relative;
  padding: 20px 30px 10px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
`;
