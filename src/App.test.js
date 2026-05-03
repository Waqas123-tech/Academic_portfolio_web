import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElements = screen.getAllByText(/Waqas Ahmad/i);
  expect(headerElements.length).toBeGreaterThan(0);
});
