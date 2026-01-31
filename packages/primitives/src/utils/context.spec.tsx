import { render } from '@testing-library/react';

import { createContext } from './context';

describe('createContext', () => {
  it('should create a provider and hook', () => {
    const [Provider, useValue] = createContext<string>('Test');
    expect(Provider).toBeDefined();
    expect(useValue).toBeDefined();
  });

  it('should provide and consume context value', () => {
    const [Provider, useValue] = createContext<string>('Test');

    const Consumer = () => {
      const value = useValue();
      return <span>{value}</span>;
    };

    const { getByText } = render(
      <Provider value="hello">
        <Consumer />
      </Provider>,
    );

    expect(getByText('hello')).toBeTruthy();
  });
});
