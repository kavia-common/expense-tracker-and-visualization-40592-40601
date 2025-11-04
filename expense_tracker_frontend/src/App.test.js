import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard overview card', () => {
  render(<App />);
  // Our App renders the Dashboard which shows an "Overview" card title
  const overview = screen.getByText(/Overview/i);
  expect(overview).toBeInTheDocument();
});
