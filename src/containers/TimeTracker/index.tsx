/**
 *
 * Login
 *
 */

import React, { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Flex, FormControl, Span } from '../../components';
import styled from '@emotion/styled';
import { FormSelectNormal, FormCustomSelect } from 'components/Form/FormCustomSelect';
import { NavDropdown } from 'react-bootstrap';

export function CustomLabel(data) {
  return (
    <Span variant="body" ml="s">
      {data.label}
    </Span>
  );
}

export function TimeTracker(props: any) {

  const [tags, setTags] = useState<any>([]);
  const listProjects = [
    {
      label: 'Qualee',
      value: 1,
    },
    {
      label: 'Transportme',
      value: 2,
    },
  ];

  const listTags = [
    {
      label: 'Web',
      value: 1,
    },
    {
      label: 'Mobile',
      value: 2,
    },
    {
      label: 'Meetings',
      value: 3,
    },
    {
      label: 'Training',
      value: 4,
    },
  ];

  const promiseListTags = inputValue =>
    new Promise(resolve => {
      resolve(filterData(inputValue));
    });

  const filterData = useCallback(
    (inputValue: string) => {
      const data = listTags.map(item => {
        return {
          label: item.label,
          value: item.value,
        };
      });
      return (
        data.length > 0 &&
        data.filter(item =>
          item.label.toLowerCase().includes(inputValue.toLowerCase()),
        )
      );
    },
    [listTags],
    );

  const setValueForSelect = () => {
    return listTags.filter((item: any) => {
      if (tags.includes(item.value)) {
        return {
          label: item.label,
          value: item.value,
        };
      }
      return null;
    });
  };

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
            onChange={() => {}}
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
          <FormCustomSelect
            select
            width="200px"
            className="mx-3"
            name="tags"
            isMulti
            cacheOptions
            defaultOptions
            onChange={data => {
              const values = data?.map(item => item.value);
              setTags(values);
            }}
            value={setValueForSelect()}
            loadOptions={promiseListTags}
            placeholder={'Tags'}
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
