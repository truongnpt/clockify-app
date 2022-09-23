import React from 'react';
import { render } from '@testing-library/react';

import { DateRangePicker } from '..';

jest.mock('moment-timezone', () => {
  return () =>
    jest.requireActual('moment-timezone')('2021-01-01T00:00:00.000Z');
});

describe('<DateRangePicker  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<DateRangePicker onChange={jest.fn()} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
