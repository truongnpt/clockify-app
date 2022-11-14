/**
 *
 * Login
 *
 */

import React, { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Flex, FormControl, IconWrapper, Span } from 'components';
import styled from '@emotion/styled';
import { FormSelectNormal, FormCustomSelect } from 'components/Form/FormCustomSelect';
import { DatePicker } from 'components/DatePicker';
import { Calendar } from 'components/IconWrapper/LeftBarMenu';

export function CustomLabel(data) {
  return (
    <Span variant="body" ml="s">
      {data.label}
    </Span>
  );
}

export function AddTimeForm(props: any) {
  const currentDate = new Date();
  const minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const [tags, setTags] = useState<any>([]);
  const [dateSelected, setDateSelected] = useState<Date | undefined>(currentDate);

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
            name="title"
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
            className="mx-2"
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
            className="mx-2"
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
          <Flex alignItems="center">
            <FormControl
              id="start_time"
              name="start_time"
              width="120px"
              className="mx-2"
              type="time"
              color="dimGray"
              value={''}
              onChange={() => {}}
            />
            <Span color="dimGray">{'-'}</Span>
            <FormControl
              id="end_time"
              name="end_time"
              width="120px"
              className="mx-2"
              type="time"
              color="dimGray"
              value={''}
              onChange={() => {}}
            />
          </Flex>
          <DatePicker
            name="create_date"
            id="create_date"
            width="100px"
            className="mx-2"
            onChange={(date) => setDateSelected(date)}
            selected={dateSelected}
            minDate={minDate}
            icon={
              <IconWrapper
                icon={Calendar}
                position="absolute"
                top="calc(20px - 12px)"
                right={'4%'}
                zIndex="1"
              />
            }
          />
          <FormControl
            id="hour"
            name="hour"
            width="80px"
            className="mx-4"
            type="text"
            color="dimGray"
            value={''}
            onChange={() => {}}
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

  .form-control {
    margin: 0;
  }

  .react-datepicker__tab-loop {
    position: relative;

    .react-datepicker-popper {
      left: unset !important;
      right: 0;
      top: 10px !important;
      transform: unset !important;
    }
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
