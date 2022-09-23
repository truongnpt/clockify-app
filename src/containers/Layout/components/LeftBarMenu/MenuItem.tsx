import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box, Flex, IconWrapper, Span } from 'components';
import { ChevronRight } from 'components/IconWrapper/Common';

interface SubMenuItemProps {
  title: string;
  to: string;
  isActive: boolean;
  isAccessible?: boolean;
}

export interface MenuItemProps {
  Icon: any;
  title: string;
  to: string;
  isActive?: boolean;
  isAccessible?: boolean;
  children?: SubMenuItemProps[] | any;
}

export function MenuItem(props: MenuItemProps) {
  const [subMenuExpand, setSubMenuExpanded] = useState('');
  const { Icon, title, to, isActive, children: subMenu } = props;

  const location = useLocation();

  const { pathname } = location;
  const isSelectedSubMenu =
    subMenu && subMenu?.findIndex(menu => menu?.isActive) > -1;

  useEffect(() => {
    const isSubMenuReportActive = pathname.indexOf('/report') > -1;

    if (isSubMenuReportActive) setSubMenuExpanded('Reports');

    return () => {
      setSubMenuExpanded('');
    };
  }, [pathname]);

  const renderArrow = (isActive: boolean) => {
    return <IconWrapper icon={ChevronRight} fill="primaryWhite" />;
  };

  return to === '/report' ? (
    <div>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
        onClick={() => setSubMenuExpanded(title)}
        mb="m"
      >
        <Link to={`${to}`} className="w-100">
          <ItemContainer isActive={isActive}>
            <Box>
              <IconWrapper
                icon={Icon}
                fill="primaryWhite"
                opacity={isActive ? 1 : 0.8}
              />
            </Box>
            <MenuItemTitle isActive={isActive}>
              {title}
              {isActive &&
                pathname.indexOf('/report/') <= -1 &&
                !isSelectedSubMenu &&
                renderArrow(isActive)}
            </MenuItemTitle>
          </ItemContainer>
        </Link>
      </Flex>
      {subMenuExpand === title && (
        <SubMenuItem>
          {subMenu
            ?.filter(item => item.isAccessible)
            ?.map((item, index) => (
              <Link to={`${item.to}`} key={index}>
                <Span
                  lineHeight="body"
                  mb="s"
                  color="primaryWhite"
                  fontWeight={item.isActive && 'bold'}
                  opacity={item.isActive ? 1 : 0.8}
                  className="position-relative d-inline-block"
                >
                  {item.title}
                  {item.isActive && renderArrow(item.isActive)}
                </Span>
              </Link>
            ))}
        </SubMenuItem>
      )}
    </div>
  ) : (
    <Link to={`${to}`}>
      <ItemContainer isActive={isActive}>
        <Box mr="m">
          <IconWrapper icon={Icon} fill="primaryWhite" />
        </Box>
        <MenuItemTitle isActive={isActive}>{title}</MenuItemTitle>
        <RightArrow>{isActive && renderArrow(isActive)}</RightArrow>
      </ItemContainer>
    </Link>
  );
}

const ItemContainer = styled.div<any>`
  position: relative;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${p => p.theme.colors.primaryWhite};
  padding: 10px 30px;
  background-color: ${p =>
    p.isActive
      ? p.theme.colors.primaryGreenHover
      : p.theme.colors.primaryGreen};

  :hover {
    background-color: ${p => p.theme.colors.primaryGreenHover};
  }
`;

const MenuItemTitle = styled.span<any>`
  position: relative;
  height: 18px;
`;

const RightArrow = styled.span<any>`
  position: absolute;
  right: 20px;
`;

const SubMenuItem = styled.div<any>`
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: ${props => props.theme.space.m};
  display: flex;
  flex-direction: column;
  a:last-of-type span {
    margin-bottom: 0;
  }

  span:hover {
    color: ${p => p.theme.colors.primaryGreenHover};
  }
`;
