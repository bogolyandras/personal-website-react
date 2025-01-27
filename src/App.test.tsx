
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders home link exists', async () => {
  render(<App />);

  // Wait for the content to be loaded
  await waitFor(() => {
    const homeLinkElement = screen.getByText('Home');
    expect(homeLinkElement).toBeInTheDocument();
  });
});
