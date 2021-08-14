import React from 'react';
import { render, configure } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

configure({ testIdAttribute: 'data-test-id' });

import theme from '../theme';

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
