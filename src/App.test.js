import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 时光书 logo', () => {
  render(<App />);
  expect(screen.getByText('时光书')).toBeInTheDocument();
});

test('renders hero title', () => {
  render(<App />);
  expect(screen.getByText('写给爸妈的一本书')).toBeInTheDocument();
});
