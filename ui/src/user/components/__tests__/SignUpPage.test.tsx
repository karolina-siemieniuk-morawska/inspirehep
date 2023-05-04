import React from 'react';
import { render } from '@testing-library/react';

import SignUpPage from '../SignUpPage';

describe('SignUpPage', () => {
  it('renders page', () => {
    const { asFragment } = render(
      <SignUpPage loading={false} onSignUp={jest.fn()} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders page with loading', () => {
    const { asFragment } = render(<SignUpPage loading onSignUp={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders page with errors', () => {
    const { asFragment } = render(
      <SignUpPage loading={false} error onSignUp={jest.fn()} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
