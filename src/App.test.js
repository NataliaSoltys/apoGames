import { render, screen } from '@testing-library/react';
import MostAwaited from './components/MostAwaited';
import Navbar from './components/Navbar.js'
import Welcome from './components/Welcome.js'
import CInner from './components/Inner.js'
import GameList from './components/GameList';
import Footer from './components/Footer';
import Ranking from './components/Ranking';

test('renders welcoming on a page', () => {
  render(<Welcome />);
  const linkElement = screen.getByText('welcome');
  expect(linkElement).toBeInTheDocument();
});

test('has navbar 4 options', () => {
  render(<Navbar />);
  const { container } = render(<a variant="MuiButton-root" />)
  expect(container.getElementsByClassName('MuiButton-root').length).toBe(4);
});

test('is ipg present by alt', () => {
  render(<MostAwaited />);
  const linkElement = screen.getByAltText()('theDayBefore.jpg');
  expect(linkElement).toBeInTheDocument();
});


test("Test theme buttone", () => {
  render(<Welcome />);
  const buttonEl = screen.getByText("I/'m in");

  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent('dark');
});

test('form test', () => {
  render(<CInner />);
  const linkElement = screen.getByDisplayValue()('first name');
  expect(linkElement).toBeInTheDocument();
});

test('random game list value presence', () => {
  render(<GameList />);
  const linkElement = screen.getByText('Metro 2033');
  expect(linkElement).toBeInTheDocument();
});


test('footer className test', () => {
  render(<Footer />);
  render(<div data-testid="text-uppercase" />);
  const element = screen.getByTestId('text-uppercase');
  expect(element).toBeInTheDocument();
});


test('is topography in Ranking', () => {
  render(<Ranking />);
  const linkElement = screen.getByRole()('Typography');
  expect(linkElement).toBeInTheDocument();
});

test('has most awaited h2 with forward word', () => {
  render(<MostAwaited />);
  expect(screen.getByRole('h2')).toHaveTextContent('forward')
});

test('has most awaited h2 with forward word', () => {
  render(<MostAwaited />);
  expect(screen.getByRole('h2')).toHaveTextContent('forward')
});

test('is alert active after email input', () => {
  render(<CInner/>);
  expectexpect(Alert.alert).toHaveBeenCalledWith('whatever')
});