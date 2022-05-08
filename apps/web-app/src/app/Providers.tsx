
import React from 'react';
import { ThemeProvider } from '@fixed-income-markets/core-ui';
import { Provider } from 'react-redux';
import { store } from '@fixed-income-markets/core-state'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
  