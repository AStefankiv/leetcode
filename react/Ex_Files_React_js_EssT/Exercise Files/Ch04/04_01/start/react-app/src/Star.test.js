import { Star } from './Star';
import { render } from '@testing-library/react';

test('render an h1', () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/cool star/i);
  expect(h1).toHaveTextContent('Cool Star');
});