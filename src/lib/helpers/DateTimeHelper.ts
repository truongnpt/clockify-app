import moment from 'moment';
export const defaultTypeFormat = 'ddd, DD MMM';
export const apiSupportedFormat = 'YYYY-MM-DD';
export const datePickerDisplayingFormat = 'dd MMM yyyy';
export const datePickerDateTimeFormat = 'dd MMM yyyy HH:mm';
const tableTypeFormat = 'DD MMM YYYY';
const tableDateTimeType = 'DD MMM YYYY HH:mm';

export const convertUtcToLocal = (date: moment.MomentInput) => {
  return moment(date).toISOString();
};

export const convertLocalToUtc = (
  date: moment.MomentInput,
  isJustFormatDate = false,
) => {
  return isJustFormatDate
    ? moment(date).locale('en_US').hours(0).minutes(0).seconds(0).utc().format()
    : moment(date).locale('en_US').utc().format();
};

export const isSame = (
  startTime: moment.MomentInput,
  endTime: moment.MomentInput,
) => {
  return moment(startTime)
    .seconds(0)
    .milliseconds(0)
    .isSame(moment(endTime).seconds(0).milliseconds(0));
};
//Use for format default date time
export const formatDefaultDate = (date: moment.MomentInput) => {
  return date ? moment(date).format(defaultTypeFormat) : '';
};
//Use for format date time in table
export const formatDateOnTable = (date: moment.MomentInput) => {
  return date ? moment(date).format(tableTypeFormat) : '';
};

export const formatDateOnDatePicker = (date: moment.MomentInput) => {
  return date ? moment(date, 'MM/DD/YYYY').format(tableTypeFormat) : '';
};

export const convertFullDateTime = (date: moment.MomentInput) => {
  if (date)
    return `${moment(date).format(tableTypeFormat)}  at  ${formatTime(date)}`;
};

export const formatDateDMY = (date: moment.MomentInput) => {
  return date ? moment(date).format(tableTypeFormat) : '';
};

export const formatTime = (date: moment.MomentInput) => {
  return date ? moment(date).format('HH:mm') : '';
};
// Format type year-month-day
export const formatYearMonthDay = (date: moment.MomentInput) => {
  return moment(date).locale('en_US').format('YYYY-MM-DD');
};

// Format type month day
export const formatMonthDay = (date: moment.MomentInput) => {
  return moment(date).format('MMM DD');
};

// Format type day/month/year
export const formatDayMonthYear = (date: moment.MomentInput) => {
  return date ? moment(date).format('DD/MM/YYYY') : '';
};

// Format type month year
export const formatMonthYear = (date: moment.MomentInput) => {
  return date ? moment(date).format('MMM YYYY') : '';
};

export const formatDateTimeToUTCTime = (date: moment.MomentInput): any => {
  if (!date) return '';
  return moment(date).toDate();
};

export const formatDateConversationMessage = (date: moment.MomentInput) => {
  return moment(date).fromNow();
};

export const compareDate = (
  firstDate: moment.MomentInput,
  secondDate: moment.MomentInput,
) => {
  return moment(firstDate)
    .hour(0)
    .minute(0)
    .seconds(0)
    .milliseconds(0)
    .isSame(moment(secondDate).hour(0).minute(0).seconds(0).milliseconds(0));
};

export const compareDateTime = (
  firstDate: moment.MomentInput,
  secondDate: moment.MomentInput,
) => {
  if (!firstDate) return false;
  if (firstDate && !secondDate) return true;
  return moment(firstDate).isAfter(secondDate);
};

export const getCurrentDate = () => {
  return moment().format('YYYY-MM-DD');
};

/**
 * @param {string} date
 * @param {number} quantity
 * @param {string} type
 */
export const subtractDate = (date: moment.MomentInput, quantity, type) => {
  return moment(date).subtract(quantity, type).format('YYYY-MM-DD');
};

/**
 * @param {string} date
 * @param {number} quantity
 * @param {string} type
 */
export const addDate = (date: moment.MomentInput, quantity, type) => {
  return moment(date).add(quantity, type).format('YYYY-MM-DD');
};

/**
 * @param {string} date
 */
export const calcDistanceDate = (date: moment.MomentInput) => {
  const currentDate = moment.now();
  const futureDate = moment(date);
  return futureDate.diff(currentDate, 'days');
};

/**
 * @param {string} dateTime
 */
export const formatDateTimeTable = (dateTime: moment.MomentInput) => {
  return dateTime ? moment(dateTime).format(tableDateTimeType) : '';
};

/**
 * @param {string} dateTime
 */
export const getFirstDayOfMonth = dateTime => {
  return moment(dateTime).startOf('month');
};

/**
 * @param {string} dateTime
 */
export const getLastDayOfMonth = dateTime => {
  return moment(dateTime).endOf('month');
};

export const convertFullCalendarLocale = (currentUserLanguage: string) => {
  switch (currentUserLanguage) {
    case 'zh_Hans':
      return 'zh-CN';
    case 'zh_Hant':
      return 'zh-TW';
  }
  return currentUserLanguage;
};

export const convertMomentLocale = (currentUserLanguage: string) => {
  switch (currentUserLanguage) {
    case 'zh_Hans':
      return 'zh-cn';
    case 'zh_Hant':
      return 'zh-tw';
  }
  return currentUserLanguage;
};

export const diffBetweenTwoDate = (startDate: Date, endDate: Date, type) => {
  const startDateTime = moment(startDate);
  const endDateTime = moment(endDate);
  return endDateTime.diff(startDateTime, type);
};

export const splitToSingleDay = (startDate, endDate) => {
  const result: {
    is_full_day: boolean;
    startDate: string;
    endDate: string;
  }[] = [];
  const countDiffDay = diffBetweenTwoDate(startDate, endDate, 'day');
  const countDiffHour = diffBetweenTwoDate(startDate, endDate, 'hour');
  const timeZoneOffset = new Date().getTimezoneOffset();

  const isDateTimeUTCBeginningOfTheDay = dateTimeUTC => {
    return moment(dateTimeUTC).format().indexOf('T00:00:00') > -1;
  };

  const addDateTimeUTCByTimezone = dateTimeUTC => {
    return moment(`${dateTimeUTC.split('T')[0]}T00:00:00Z`)
      .add(timeZoneOffset, 'minute')
      .utc()
      .format();
  };

  // check is same date, diff hours
  if (countDiffDay < 1) {
    result.push({
      is_full_day: false,
      startDate,
      endDate,
    });
  }

  //check is diff date; same hour or diff hour
  if (countDiffDay > 0) {
    for (let i = 0; i <= countDiffDay; i++) {
      const increaseStartDate =
        i === 0
          ? startDate
          : convertLocalToUtc(moment(startDate).add(i, 'day'));

      const increaseEndDate = convertLocalToUtc(
        moment(increaseStartDate).add(1, 'day'),
      );

      const isFullDay =
        countDiffHour % 24 === 0 &&
        isDateTimeUTCBeginningOfTheDay(startDate) &&
        isDateTimeUTCBeginningOfTheDay(endDate);

      if (isFullDay && !moment(increaseStartDate).isAfter(endDate)) {
        i !== 0 &&
          result.push({
            is_full_day: true,
            startDate: addDateTimeUTCByTimezone(increaseStartDate),
            endDate: addDateTimeUTCByTimezone(increaseEndDate),
          });
      } else {
        if (i === 0) {
          result.push({
            is_full_day: false,
            startDate,
            endDate: addDateTimeUTCByTimezone(increaseEndDate),
          });
        } else if (i === countDiffDay) {
          result.push({
            is_full_day: false,
            startDate: addDateTimeUTCByTimezone(increaseStartDate),
            endDate,
          });
        } else {
          result.push({
            is_full_day: true,
            startDate: addDateTimeUTCByTimezone(increaseStartDate),
            endDate: addDateTimeUTCByTimezone(increaseEndDate),
          });
        }
      }
    }
  }

  return result;
};
