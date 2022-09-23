/**
 *
 * DateRangePicker
 *
 */
import React, { memo, useEffect, useState } from 'react';
import moment from 'moment-timezone';
import styled from '@emotion/styled';

import { IconWrapper } from '../IconWrapper';
import { DatePicker } from '../DatePicker';
import { Box, Button, Flex, Span } from '../index';
import { formatDayMonthYear } from 'lib/helpers/DateTimeHelper';
import { ArrowRight, ChevronLeft, ChevronRight } from '../IconWrapper/Tools';
import { OutsideComponent } from '../OutsideComponent';

const WEEK_UNIT = 'week';

const DayPickerProps = {
  selectsRange: true,
  inline: true,
  disabledKeyboardNavigation: true,
};

interface Props {
  onChange: ([startDate, endDate]: [Date, Date]) => void;
  startDate?: Date;
  endDate?: Date;
  popupStyle?: any;
}

export const DateRangePicker = memo((props: Props) => {
  const {
    onChange,
    startDate: startDateProps,
    endDate: endDateProps,
    popupStyle,
  } = props;

  const [startDate, setStartDate] = useState<Date | undefined>(startDateProps);
  const [endDate, setEndDate] = useState<Date | undefined>(endDateProps);
  const [isDatePickerShown, setIsDatePickerShown] = useState<boolean>(false);
  const [isChangeWeek, setIsChangeWeek] = useState<boolean>(false);

  useEffect(() => {
    if (startDateProps) {
      setStartDate(startDateProps);
    }
  }, [startDateProps]);

  useEffect(() => {
    if (endDateProps) {
      setEndDate(endDateProps);
    }
  }, [endDateProps]);

  const quickSelects: Record<string, any>[] = [
    {
      title: 'This week',
      onClick: () => {
        setStartDate(moment().startOf(WEEK_UNIT).weekday(1).toDate());
        setEndDate(moment().endOf(WEEK_UNIT).weekday(7).toDate());
      },
    },
    {
      title: 'Last week',
      onClick: () => {
        setStartDate(
          moment()
            .subtract(1, WEEK_UNIT)
            .startOf(WEEK_UNIT)
            .weekday(1)
            .toDate(),
        );
        setEndDate(
          moment().subtract(1, WEEK_UNIT).endOf(WEEK_UNIT).weekday(7).toDate(),
        );
      },
    },
  ];

  const changeWeek = (number: number) => {
    setIsChangeWeek(true);
    setStartDate(
      moment()
        .subtract(number, WEEK_UNIT)
        .startOf(WEEK_UNIT)
        .weekday(1)
        .toDate(),
    );
    setEndDate(
      moment().subtract(number, WEEK_UNIT).endOf(WEEK_UNIT).weekday(7).toDate(),
    );
  };

  const repopulateDates = () => {
    if (!isChangeWeek) {
      if (startDateProps) {
        setStartDate(startDateProps);
      }
      if (endDateProps) {
        setEndDate(endDateProps);
      }
    }
  };

  const startDateFormatted = formatDayMonthYear(startDate);
  const endDateFormatted = formatDayMonthYear(endDate);

  return (
    <DatePickerWrapper flexDirection="column" alignItems="flex-start">
      <Flex
        className="form-control"
        alignItems="center"
        height="40px"
        minWidth="220px"
      >
        <Flex
          classame="cursor-pointer"
          alignItems="center"
          onClick={() => {
            repopulateDates();
            setIsDatePickerShown(!isDatePickerShown);
          }}
        >
          <Box>{startDateFormatted}</Box>
          {startDateFormatted && endDateFormatted && (
            <IconWrapper fill="primaryGreen" icon={ArrowRight} mx="xs" />
          )}
          <Box>{endDateFormatted}</Box>
        </Flex>
        <Box ml="s" style={{ borderLeft: '1px solid lightgrey' }}>
          <IconWrapper
            classame="cursor-pointer"
            icon={ChevronLeft}
            mx="s"
            onClick={() => {
              changeWeek(1);
            }}
          />
          <IconWrapper
            classame="cursor-pointer"
            icon={ChevronRight}
            onClick={() => {
              changeWeek(-1);
            }}
          />
        </Box>
      </Flex>
      {isDatePickerShown && (
        <OutsideComponent onClickOutside={() => setIsDatePickerShown(false)}>
          <Flex
            className="position-absolute"
            bg="white"
            boxShadow="hoverElement"
            border="1px solid"
            borderColor="northeastSnow"
            borderRadius="5px"
            mt="s"
            zIndex="9"
            style={popupStyle}
          >
            <Flex flexDirection="column" px="xl" py="l">
              {quickSelects.map((quickSelect, index) => (
                <Span
                  onClick={quickSelect.onClick}
                  className="cursor-pointer"
                  my="s"
                  key={index}
                >
                  {quickSelect.title}
                </Span>
              ))}
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="flex-end"
              justifyContent="space-between"
              pr={'m'}
              pl={'0'}
            >
              <Flex>
                <DatePicker
                  selected={startDate}
                  onChange={dates => {
                    const [start, end] = dates;
                    setStartDate(start);
                    setEndDate(end);
                  }}
                  startDate={startDate}
                  endDate={endDate}
                  {...DayPickerProps}
                />
                <DatePicker
                  selected={endDate}
                  onChange={dates => {
                    const [start, end] = dates;
                    setStartDate(start);
                    setEndDate(end);
                  }}
                  startDate={startDate}
                  endDate={endDate}
                  {...DayPickerProps}
                />
              </Flex>
              <Button
                fontWeight="bold"
                backgroundColor="white"
                color="primaryGreen"
                width="fit-content"
                mb="m"
                onClick={() => {
                  if (startDate && endDate) {
                    onChange([startDate, endDate]);
                  }
                  setIsDatePickerShown(false);
                }}
              >
                {'Select dates'}
                <IconWrapper
                  fill="primaryGreen"
                  icon={ArrowRight}
                  ml={'s'}
                  mr={'0'}
                />
              </Button>
            </Flex>
          </Flex>
        </OutsideComponent>
      )}
    </DatePickerWrapper>
  );
});

const DatePickerWrapper = styled(Flex)`
  .react-datepicker {
    box-shadow: none !important; // !important to override style in _common.scss
    border: none !important;
    margin-left: -10px;
    margin-right: -10px;
  }
`;
