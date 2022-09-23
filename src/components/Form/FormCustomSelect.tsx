import styled from '@emotion/styled';
import React from 'react';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import { FormControl } from 'react-bootstrap';
import { Span } from '../Common';

export const NoOptionComponent = () => {
  return (
    <Span variant="small" color="primaryBlack">
      {'There are no results for your keyword'}
    </Span>
  );
};

export function FormCustomSelect(props) {
  const { select, isNoneBorder, isSingle } = props;

  return select ? (
    <FormSelect
      classNamePrefix="react-select"
      isNoneBorder={isNoneBorder}
      menuPlacement="auto"
      noOptionsMessage={NoOptionComponent}
      loadingMessage={() => {
        return 'Loading...';
      }}
      components={{
        ...props.components,
        ClearIndicator: () => null,
      }}
      {...props}
    />
  ) : (
    <FormAsyncSelect
      classNamePrefix="react-select"
      isMulti={!isSingle}
      isClearable
      isSearchable
      menuPlacement="auto"
      noOptionsMessage={NoOptionComponent}
      loadingMessage={() => {
        return 'Loading...';
      }}
      components={{
        ...props.components,
        DropdownIndicator: () => null,
        ClearIndicator: () => null,
      }}
      {...props}
    />
  );
}

export function FormSelectTable(props) {
  return <FormControlSelect {...props} />;
}

export function FormSelectNormal(props) {
  return (
    <FormNormalStyle
      menuPlacement="auto"
      classNamePrefix="react-select"
      placeholder={'Select...'}
      noOptionsMessage={NoOptionComponent}
      {...props}
    />
  );
}

const FormSelect = styled(AsyncSelect)<any>`
  padding-left: 1px;
  height: 40px;
  margin-bottom: 5px;
  width: ${props => props.width};
  pointer-events: auto !important;

  .react-select__control--is-disabled {
    background-color: ${p => p.theme.colors.northeastSnow};
    opacity: 0.8;
    cursor: not-allowed;
  }

  .react-select__control--is-disabled .react-select__multi-value__label {
    pointer-events: none;
  }

  .react-select__control--is-focused,
  .react-select__control:focus {
    box-shadow: none;
    outline: 0;
    border-color: #80bdff;
    &:hover {
      border-color: #80bdff;
    }
  }
  &:focus {
    outline: none !important;
  }
  .react-select__control,
  .react-select__control:hover {
    height: 100%;
    border-radius: 3px;
    border-color: ${p => p.theme.colors.silver} !important;
    &:focus {
      box-shadow: none;
    }
    .react-select__value-container {
      &:focus {
        outline: none !important;
      }
    }
  }
  .react-select__multi-value,
  .react-select__multi-value__remove:hover {
    background: ${props => props.theme.colors.white};
  }

  .react-select__indicators {
    display: ${props => (props.select ? '' : 'none')};
    .react-select__indicator-separator {
      display: none;
    }
    .svg {
      color: ${props => props.theme.colors.primaryBlack};
      opacity: ${props => props.isDisabled && 0.5};
    }
  }

  .react-select__menu {
    z-index: 9999;
    box-shadow: ${p => p.theme.shadows.hoverElement};
    background: ${p => p.theme.colors.white};
    border: 1px solid ${p => p.theme.colors.primaryWhite};
    overflow: hidden;
  }

  .react-select__indicator.react-select__dropdown-indicator {
    color: ${props => props.theme.colors.primaryBlack};
  }

  .react-select__option:hover {
    background: ${props => props.theme.colors.primaryGreen} !important;
    color: ${props => props.theme.colors.primaryWhite}!important;
  }

  .react-select__option--is-focused {
    background: transparent;
    color: ${props => props.theme.colors.primaryBlack};
  }

  .react-select__option--is-selected {
    background: ${props => props.theme.colors.primaryGreen} !important;
    color: ${props => props.theme.colors.white} !important;
  }

  .react-select__placeholder {
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .react-select__menu-notice--no-options {
    text-align: left;
  }

  .react-select__menu-list {
    padding: 0;
  }
`;

const FormNormalStyle = styled(Select)<any>`
  height: ${props => (props.isMulti ? 'auto' : '40px')};
  margin-bottom: 5px;
  width: ${props => props.width};
  pointer-events: auto !important;

  .react-select__control--is-disabled {
    background-color: ${p => p.theme.colors.northeastSnow};
    opacity: 0.8;
    cursor: not-allowed;
  }

  .react-select__control--is-disabled .react-select__multi-value__label {
    pointer-events: none;
  }

  .react-select__control--is-focused,
  .react-select__control:focus {
    box-shadow: none;
    outline: 0;
    border-color: #80bdff;
    &:hover {
      border-color: #80bdff;
    }
  }
  &:focus {
    outline: none !important;
  }
  .react-select__control,
  .react-select__control:hover {
    height: 100%;
    border-radius: 3px;
    border-color: ${p => p.theme.colors.silver} !important;
    &:focus {
      box-shadow: none;
    }
    .react-select__value-container {
      &:focus {
        outline: none !important;
      }
    }
  }
  .react-select__multi-value,
  .react-select__multi-value__remove:hover {
    background: ${props => props.theme.colors.white};
  }

  .react-select__indicators {
    display: ${props => (props.select ? '' : 'none')};
    .react-select__indicator-separator {
      display: none;
    }
    .svg {
      color: ${props => props.theme.colors.primaryBlack};
      opacity: ${props => props.isDisabled && 0.5};
    }
    .react-select__dropdown-indicator {
      display: ${props => (props.isClearable ? 'none' : 'block')};
    }
  }

  .react-select__menu {
    z-index: 9999;
    box-shadow: ${p => p.theme.shadows.hoverElement};
    background: ${p => p.theme.colors.white};
    border: 1px solid ${p => p.theme.colors.primaryWhite};
    overflow: hidden;
  }

  .react-select__indicator.react-select__dropdown-indicator {
    color: ${props => props.theme.colors.primaryBlack};
  }

  .react-select__option:hover {
    background: ${props => props.theme.colors.primaryGreen} !important;
    color: ${props => props.theme.colors.primaryWhite} !important;
  }

  .react-select__option--is-focused {
    background: transparent;
    color: ${props => props.theme.colors.primaryBlack};
  }

  .react-select__option--is-selected {
    background: ${props => props.theme.colors.primaryGreen} !important;
    color: ${props => props.theme.colors.white} !important;
  }

  .react-select__placeholder {
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .react-select__menu-notice--no-options {
    text-align: left;
  }

  .react-select__menu-list {
    padding: 0;
  }
`;

const FormAsyncSelect = styled(AsyncSelect)<any>`
  width: ${props => props.width};
  padding-left: 1px;
  pointer-events: auto !important;

  .react-select__control,
  .react-select__control:hover {
    height: 100%;
    border-radius: 3px;
    border-color: ${p => p.theme.colors.silver} !important;
    &:focus {
      box-shadow: none;
    }
  }

  .react-select__control--is-disabled {
    background-color: ${p => p.theme.colors.northeastSnow};
    opacity: 0.8;
    cursor: not-allowed;
  }

  .react-select__control--is-disabled .react-select__multi-value__label {
    pointer-events: none;
  }

  .react-select__control--is-focused,
  .react-select__control:focus {
    box-shadow: none;
    outline: 0;
    border-color: #80bdff;
    &:hover {
      border-color: #80bdff;
    }
  }

  .react-select__multi-value,
  .react-select__multi-value__remove:hover {
    background: ${props => props.theme.colors.white};
  }

  .react-select__indicators {
    display: ${props => (props.isMulti ? 'none' : 'flex')};
    .react-select__indicator-separator,
    .react-select__dropdown-indicator {
      display: ${props => (props.isMulti ? 'block' : 'none')};
    }
  }

  .react-select__menu {
    z-index: 9999;
    box-shadow: ${p => p.theme.shadows.hoverElement};
    background: ${p => p.theme.colors.white};
    border: 1px solid ${p => p.theme.colors.primaryWhite};
    overflow: hidden;
  }

  .react-select__indicator.react-select__dropdown-indicator {
    color: ${props => props.theme.colors.primaryBlack};
  }

  .react-select__option--is-focused {
    background: transparent;
    color: ${props => props.theme.colors.primaryBlack};
  }

  .react-select__option:hover {
    background: ${props => props.theme.colors.primaryGreen};
    color: ${props => props.theme.colors.primaryWhite};
  }

  .react-select__placeholder {
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .react-select__menu-notice--no-options {
    text-align: left;
  }

  .react-select__menu-list {
    padding: 0;
  }
`;

const FormControlSelect = styled(FormControl)<any>`
  width: auto;
  border: none;
  outline: none;
  border-radius: 0;
  padding: 0.375rem 1.75rem 0.375rem 0;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.dimGray};
`;
