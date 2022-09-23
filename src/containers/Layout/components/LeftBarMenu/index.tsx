import { Flex } from 'components';
import { Dashboard } from 'components/IconWrapper/LeftBarMenu';
import React from 'react';
import { useLocation } from 'react-router';
import { MenuItem, MenuItemProps } from './MenuItem';

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

  const menuItems: MenuItemProps[] | any = [
    listMenuTimesheet(),
    listMenuTimeTracker(),
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
          .map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              to={item.to}
              Icon={item.Icon}
              isActive={item.isActive}
              children={item.children}
            />
          ))}
      </Flex>
    </Flex>
  );
}
