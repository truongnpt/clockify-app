import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import styled from '@emotion/styled';
import { layout } from 'styled-system';

interface DropdownProps {
  title?: any;
  children?: any;
  color?: string;
  background?: string;
  id?: string;
  width?: string;
  titleItem?: string;
}

export const NavDropDownWrapper = ({ ...props }: DropdownProps) => {
  const { title, children, id, color, background, width } = props;

  return (
    <NavDropDownContainer
      width={width}
      background={background}
      color={color}
      title={title}
      id={id}
    >
      {children}
    </NavDropDownContainer>
  );
};

const NavDropDownContainer = styled(NavDropdown)<any>`
  width: ${props => props.width};
  .dropdown-toggle.nav-link {
    color: ${props =>
      props.color !== ''
        ? props.theme.colors[props.color]
        : props.theme.colors.dimGray};
    border: ${props => props.theme.colors.northeastSnow};
    padding: 0;
    background-color: ${props =>
      props.background !== ''
        ? props.theme.colors[props.background] || props.background
        : props.theme.colors.primaryWhite};
  }

  .dropdown-menu.show {
    background: #fff;
    box-shadow: ${props => props.theme.shadows.hoverElement};
    border-radius: 5px;
    padding: 0;
    border: none;
    overflow: hidden;

    .dropdown-item-text {
      color: ${props => props.theme.colors.dimGray};
    }

    > div:not(.dropdown-table) {
      padding: 0;
      margin: 0;

      a,
      p,
      span {
        margin: 0;
      }

      a:hover,
      p:hover,
      p:hover > a,
      span:hover,
      label:hover {
        background: ${props => props.theme.colors.primaryGreen};
        color: ${props => props.theme.colors.primaryWhite} !important;
      }

      > a,
      > p,
      > span,
      div > a,
      div > p,
      div > span {
        padding: ${props => props.theme.space.s} ${props => props.theme.space.m};
        margin-bottom: 0;
        overflow: hidden;
      }
    }
  }
  .dropdown-menu {
    ${layout}
  }
`;
