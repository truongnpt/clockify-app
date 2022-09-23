import React from 'react';
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import moment from 'moment-timezone';
import styled from '@emotion/styled';
import 'react-datepicker/dist/react-datepicker.css';

import { Flex, Span } from '../Common';
import { ReactComponent as ChevronLeft } from '../IconWrapper/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../IconWrapper/icons/chevron-right.svg';
import { FormControl, FormLabel, H3, H4, H5, IconWrapper } from 'components';
import {
  datePickerDateTimeFormat,
  datePickerDisplayingFormat,
} from 'lib/helpers/DateTimeHelper';
import { FormSelectNormal } from '../Form/FormCustomSelect';
import en_gb from 'date-fns/locale/en-GB';
import vi from 'date-fns/locale/vi';

registerLocale('en-GB', en_gb);
registerLocale('vi', vi);
setDefaultLocale('vi');

interface YearOption {
  label: string | number;
  value: number;
}

const months = () => {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
};

export const getArrayOptionYears = (
  start: number,
  stop: number,
  step: number,
): YearOption[] =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => {
    return { label: start + i * step, value: start + i * step };
  });

const CustomInput = props => {
  return (
    <div className="position-relative">
      <FormControl type="text" {...props} />
      <FormLabel htmlFor={props.id} mb="0" className="d-inline">
        {props.icon}
      </FormLabel>
    </div>
  );
};

export const DatePicker = props => {
  const { isDateTime, listYears } = props;
  const currentYear = new Date().getFullYear();

  let years: YearOption[] = [];
  if (!props.justGetThreeNextYears) {
    years = getArrayOptionYears(currentYear + 10, currentYear - 100, -1);
  } else {
    years = getArrayOptionYears(currentYear, currentYear + 3, 1);
  }

  if (listYears) {
    years = listYears;
  }

  return (
    <DatePickerWrapper
      height={props.height}
      showTimeSelectOnly={props.showTimeSelectOnly}
    >
      <ReactDatePicker
        locale={'en-GB'}
        useWeekdaysShort
        renderCustomHeader={({
          date,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <Flex
            justifyContent="space-between"
            width="100%"
            px="xs"
            height="30px"
          >
            <Flex justifyContent="space-between" width="50%">
              <IconWrapper
                icon={ChevronLeft}
                className="cursor-pointer"
                fill="dimGray"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              />

              <Span variant="bodyBold" fontSize="body">
                {months()[moment(date).month()]}
              </Span>

              <IconWrapper
                icon={ChevronRight}
                className="cursor-pointer"
                fill="dimGray"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              />
            </Flex>
            <Span variant="bodyBold" fontSize="body">
              {currentYear}
            </Span>
          </Flex>
        )}
        className="form-control"
        customInput={<CustomInput icon={props.icon} />}
        dateFormat={
          isDateTime ? datePickerDateTimeFormat : datePickerDisplayingFormat
        }
        {...props}
      />
    </DatePickerWrapper>
  );
};

const DatePickerWrapper = styled.div<any>`
  height: ${props => props.height};
  .react-datepicker {
    padding: ${props => !props.showTimeSelectOnly && '15px 20px 10px 20px'};
    display: flex;
    .react-datepicker__month-container {
      width: 100%;
      .react-datepicker__day--outside-month {
        color: ${props => props.theme.colors.dimGray};
      }
      .react-datepicker__day-name {
        font-family: ${props => props.theme.fonts.primary};
      }
      .react-datepicker__day {
        font-family: ${props => props.theme.fonts.primary};
        margin: 0.225rem 0.55rem;
      }
      .react-datepicker__day-name {
        margin: 0.6rem 0.6rem 0 0.6rem;
      }
    }
  }
  .react-datepicker__day--in-range,
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__time-list-item--selected,
  .react-datepicker__time-list-item:hover {
    background: ${props => props.theme.colors.primaryGreen} !important;
    color: ${props => props.theme.colors.white} !important;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
`;

const FormSelectWithoutBorder = styled(FormSelectNormal)<any>`
  border: 0;
  outline: 0;

  .react-select__control {
    border: 0;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: ${p => p.theme.fontSizes.body};
    font-family: ${p => p.theme.fonts.primary};
  }

  .react-select__value-container {
    height: 22px;
    padding-right: ${p => p.theme.space.xs};
    place-content: flex-end;
  }

  .react-select__single-value {
    font-weight: ${p => p.theme.fontWeights.bold};
  }

  .react-select__indicator {
    padding: 0;
    display: flex;
    place-self: flex-start;
  }

  .react-select__menu {
    margin: 0;
  }
`;
