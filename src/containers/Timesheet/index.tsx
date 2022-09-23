/**
 *
 * Login
 *
 */

import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Flex, FormControl, H3, IconWrapper, P } from '../../components';
import styled from '@emotion/styled';
import { DateRangePicker } from '../../components/DateRangePicker';
import moment from 'moment-timezone';
import { Delete } from 'components/IconWrapper/Library';
import { CustomTableForTimesheets } from 'components/TableContainer/components/CustomTableForTimesheets';
import InputGroup from 'react-bootstrap/InputGroup';
import { InputDotMenu } from 'components/IconWrapper/Global';

export const tableInfo = {
  tableName: 'timesheet',
  columns: [
    {
      id: 'project',
      value: 'project',
      checked: true,
      label: 'Project',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'monday_hour',
      value: 'monday',
      checked: true,
      label: 'Monday',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'tuesday_hour',
      value: 'tuesday',
      checked: true,
      label: 'Tuesday',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'wednesday_hour',
      value: 'wednesday',
      checked: true,
      label: 'Wednesday',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'thursday_hour',
      value: 'thursday',
      checked: true,
      label: 'Thursday',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'friday_hour',
      value: 'friday',
      checked: true,
      label: 'Friday',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'saturday_hour',
      value: 'saturday',
      checked: true,
      label: 'Saturday',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'sunday_hour',
      value: 'sunday',
      checked: true,
      label: 'Sunday',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'total_hour',
      value: 'total',
      checked: true,
      label: 'Total',
      isTitleHidden: false,
      isSortDisabled: true,
    },
  ],
};

export function Timesheet(props: any) {
  const [startDate, setStartDate] = useState(
    moment().startOf('week').weekday(1).toDate(),
  );
  const [endDate, setEndDate] = useState(
    moment().endOf('week').weekday(7).toDate(),
  );

  const listTimesheets = [
    {
      project_id: 1,
      project_name: 'Qualee',
      monday_hour: 5,
      tuesday_hour: 4,
      wednesday_hour: 0,
      thursday_hour: 6,
      friday_hour: 4,
      saturday_hour: '',
      sunday_hour: '',
      total_hour: 40,
    },
    {
      project_id: 2,
      project_name: 'Transportme',
      monday_hour: 5,
      tuesday_hour: 4,
      wednesday_hour: 0,
      thursday_hour: 6,
      friday_hour: 4,
      saturday_hour: '',
      sunday_hour: '',
      total_hour: 40,
    },
  ];

  const handleInputHour = () => {
    alert('all good');
  };

  const data = useMemo(
    () =>
      listTimesheets?.map(item => {
        return {
          project: (
            <P fontWeight="bold" color="primaryGreen" className="mb-0">
              {item.project_name}
            </P>
          ),
          monday_hour: (
            <InputGroupWrapper>
              <FormControl
                id="monday_hour"
                type="text"
                color="dimGray"
                readOnly={true}
                value={item.monday_hour}
              />
              <InputGroup.Text
                style={{ height: 40, cursor: 'pointer' }}
                onClick={() => handleInputHour()}
              >
                <IconWrapper icon={InputDotMenu} />
              </InputGroup.Text>
            </InputGroupWrapper>
          ),
          tuesday_hour: (
            <InputGroupWrapper>
              <FormControl
                id="tuesday_hour"
                type="text"
                color="dimGray"
                readOnly={true}
                value={item.tuesday_hour}
              />
              <InputGroup.Text
                style={{ height: 40, cursor: 'pointer' }}
                onClick={() => handleInputHour()}
              >
                <IconWrapper icon={InputDotMenu} />
              </InputGroup.Text>
            </InputGroupWrapper>
          ),
          wednesday_hour: (
            <InputGroupWrapper>
              <FormControl
                id="wednesday_hour"
                type="text"
                color="dimGray"
                readOnly={true}
                value={item.wednesday_hour}
              />
              <InputGroup.Text
                style={{ height: 40, cursor: 'pointer' }}
                onClick={() => handleInputHour()}
              >
                <IconWrapper icon={InputDotMenu} />
              </InputGroup.Text>
            </InputGroupWrapper>
          ),
          thursday_hour: (
            <InputGroupWrapper>
              <FormControl
                id="thursday_hour"
                type="text"
                color="dimGray"
                readOnly={true}
                value={item.thursday_hour}
              />
              <InputGroup.Text
                style={{ height: 40, cursor: 'pointer' }}
                onClick={() => handleInputHour()}
              >
                <IconWrapper icon={InputDotMenu} />
              </InputGroup.Text>
            </InputGroupWrapper>
          ),
          friday_hour: (
            <InputGroupWrapper>
              <FormControl
                id="friday_hour"
                type="text"
                color="dimGray"
                readOnly={true}
                value={item.friday_hour}
              />
              <InputGroup.Text
                style={{ height: 40, cursor: 'pointer' }}
                onClick={() => handleInputHour()}
              >
                <IconWrapper icon={InputDotMenu} />
              </InputGroup.Text>
            </InputGroupWrapper>
          ),
          saturday_hour: (
            <FormControl
              id="saturday_hour"
              type="text"
              color="dimGray"
              disabled={true}
              value={item.saturday_hour}
            />
          ),
          sunday_hour: (
            <FormControl
              id="sunday_hour"
              type="text"
              color="dimGray"
              disabled={true}
              value={item.sunday_hour}
            />
          ),
          total_hour: (
            <P fontWeight="bold" color="dimGray" className="mb-0">
              {item.total_hour}
            </P>
          ),
          actions: <IconWrapper icon={Delete} fill="dimGray" />,
        };
      }),
    [],
  );

  return (
    <>
      <Helmet
        titleTemplate={'%s - ' + 'Welcome to U-Work'}
        defaultTitle={'Timesheet'}
      />
      <HeaderContentWrapper>
        <H3 color="dimGray">{'Timesheet'}</H3>
        <DateRangePickerContainer>
          <DateRangePicker
            onChange={([startDate, endDate]) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
            startDate={startDate}
            endDate={endDate}
            popupStyle={{ right: 20, width: '770px' }}
          />
        </DateRangePickerContainer>
      </HeaderContentWrapper>
      <Flex mt="xl">
        <CustomTableForTimesheets
          listItemTable={listTimesheets}
          table={tableInfo}
          data={data}
        />
      </Flex>
    </>
  );
}

const HeaderContentWrapper = styled(Flex)<any>`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const DateRangePickerContainer = styled.div<any>`
  z-index: 1;
`;

const InputGroupWrapper = styled(InputGroup)<any>`
  position: relative;

  .form-control {
    width: 115px;
    border-radius: 3px !important;
  }
  .input-group-text {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
  }
  &:hover {
    .input-group-text {
      opacity: 1;
    }
  }
`;
