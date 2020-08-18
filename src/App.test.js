import React from 'react';
import { render } from '@testing-library/react';
import EnterPoint from "./App";

test('renders learn react link', () => {
  const { getByText } = render(<EnterPoint />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
