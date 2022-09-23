import React, { ReactElement } from 'react';
import {
  Dropdown as BootstrapDropdown
} from 'react-bootstrap';
import styled from '@emotion/styled';
import { layout } from 'styled-system';

interface DropdownProps {
  title?: any;
  children?: any;
  color?: string;
  background?: string;
  icon?: ReactElement;
  id?: string;
  width?: string;
  padding?: string;
}

export const DropDownWrapper = ({ ...props }: DropdownProps) => {
  const {
    title,
    children,
    icon,
    id,
    background,
    color,
    width,
    padding,
  } = props;
  return (
    <DropDownContainer
      width={width}
      background={background}
      color={color}
      padding={padding}
    >
      <BootstrapDropdown.Toggle id={id}>
        {title}
        {icon}
      </BootstrapDropdown.Toggle>
      <BootstrapDropdown.Menu>{children}</BootstrapDropdown.Menu>
    </DropDownContainer>
  );
};

const DropDownContainer = styled(BootstrapDropdown)<any>`
  width: ${props => props.width};
  .btn-primary,
  .btn-primary:not(:disabled):not(.disabled):active,
  .btn-primary.dropdown-toggle {
    color: ${props =>
      props.color !== ''
        ? props.theme.colors[props.color]
        : props.theme.colors.dimGray};
    border: ${props => props.theme.colors.northeastSnow};
    padding: 0;
    padding: ${props => props.padding};
    background-color: ${props =>
      props.background !== ''
        ? props.theme.colors[props.background] || props.background
        : props.theme.colors.primaryWhite};
  }

  .btn-primary:not(:disabled):not(.disabled):active:focus,
  .btn-primary:not(:disabled):not(.disabled).active:focus,
  .btn-primary.dropdown-toggle:focus {
    box-shadow: none;
  }

  .btn-primary::after {
    display: none;
  }

  .dropdown-menu.show {
    background: #fff;
    box-shadow: ${props => props.theme.shadows.hoverElement};
    border-radius: 5px;
    padding: 0;
    border: none;
    overflow: hidden;

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
