import React from 'react';
import { render } from '@testing-library/react';

import { CircleLoading } from '..';

describe('<CircleLoading  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CircleLoading />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
