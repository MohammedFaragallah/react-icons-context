import React from 'react';

import { Box, CssBaseline } from '@material-ui/core';
import {
	ReactIconsProvider,
	defaultIcons,
	SocialIcon,
	SocialIconProps,
} from 'react-icons-context';

const mySocials: SocialIconProps[] = [
	{ href: 'https://github.com/MohammedFaragallah', bgColor: '#333' },
	{ href: 'https://twitter.com/ffragalla' },
	{ href: 'https://facebook.com/MohammedAliFaragallah' },
	{ href: 'https://instagram.com/mohammedalifaragallah', bgColor: '#E1306C' },
	{ href: 'mailto:ffragalla@gmail.com', network: 'mailTo', bgColor: '#dd4b39' },
	{
		network: 'shareThis',
		fgColor: '#d7d8d9',
		bgColor: 'tomato',
		onClick: () =>
			window.open(
				'https://github.com/MohammedFaragallah/react-icons-context',
				'_blank',
			),
	},
];

const App = () => {
	return (
		<ReactIconsProvider value={defaultIcons}>
			<CssBaseline />
			<Box
				width={'100vw'}
				height={'100vh'}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				{mySocials.map((network) => (
					<Box mr={2} key={JSON.stringify(network)}>
						<SocialIcon {...network} />
					</Box>
				))}
			</Box>
		</ReactIconsProvider>
	);
};

export default App;
