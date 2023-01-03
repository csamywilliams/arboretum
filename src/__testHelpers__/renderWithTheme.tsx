import { render, configure } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

configure({ testIdAttribute: 'data-test-id' });

const getWrappingComponent =
  () =>
  ({ children }) =>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const renderWithTheme = (ui, options = {}) =>
  render(ui, {
    ...options,
    wrapper: getWrappingComponent(),
  });

export default renderWithTheme;
