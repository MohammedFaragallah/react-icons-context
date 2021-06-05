import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { Theme } from '@material-ui/core/styles';

const theme = createTheme();

declare module '@material-ui/styles/defaultTheme' {
	interface DefaultTheme extends Theme {}
}

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root'),
);
