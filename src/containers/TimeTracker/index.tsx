/**
 *
 * Login
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Flex, FormControl, Span } from '../../components';
import styled from '@emotion/styled';
import { FormSelectNormal } from 'components/Form/FormCustomSelect';
import { NavDropdown } from 'react-bootstrap';

export function CustomLabel(data) {
  return (
    <Span variant="body" ml="s">
      {data.label}
    </Span>
  );
}

export function TimeTracker(props: any) {
  const listProjects = [
    {
      label: 'Qualee',
      value: 'qualee',
    },
    {
      label: 'Transportme',
      value: 'Transportme',
    },
  ];

  return (
    <>
      <Helmet
        titleTemplate={'%s - ' + 'Welcome to U-Work'}
        defaultTitle={'Time Tracker'}
      />
      <HeaderContentWrapper>
        <TitleWrapper>
          <FormControl
            id="title"
            type="text"
            placeholder={'What have you worked on?'}
            color="dimGray"
            value={''}
          />
        </TitleWrapper>
        <ActionsWrapper>
          <FormSelectNormal
            select
            width="200px"
            className="mx-3"
            name="projects"
            onChange={() => {}}
            defaultValue={null}
            options={listProjects}
            placeholder={'Task @Project'}
            isSearchable={true}
            formatOptionLabel={CustomLabel}
          />
          <FormSelectNormal
            select
            width="200px"
            className="mx-3"
            name="projects"
            onChange={() => {}}
            defaultValue={null}
            options={listProjects}
            placeholder={'Task @Project'}
            isSearchable={true}
            formatOptionLabel={CustomLabel}
          />
        </ActionsWrapper>
      </HeaderContentWrapper>
    </>
  );
}

const HeaderContentWrapper = styled(Flex)<any>`
  width: 100%;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${p => p.theme.colors.northeastSnow};
  background-color: ${p => p.theme.colors.primaryWhite};
`;

const TitleWrapper = styled.div<any>`
  flex: 1;

  .form-control {
    margin: 0;
    border: none !important;
  }
`;

const ActionsWrapper = styled(Flex)<any>`
  & > div {
    margin: 0;
  }

  .react-select__placeholder {
    width: auto;
    text-transform: capitalize;
    color: ${p => p.theme.colors.primaryGreen};
    font-weight: ${p => p.theme.fontWeights.semiBold};
  }
  .react-select__control {
    margin: 0;
    /* border: none !important; */
    cursor: pointer;
  }

  .react-select__single-value {
    color: ${p => p.theme.colors.primaryGreen};
  }

  .react-select__indicator {
    path {
      fill: ${p => p.theme.colors.primaryGreen};
    }
  }
`;
