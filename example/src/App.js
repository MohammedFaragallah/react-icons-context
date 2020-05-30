import React from 'react';

import { Box, CssBaseline } from '@material-ui/core';
import {
	ReactIconsContext,
	defaultIcons,
	SocialIcon,
} from 'react-icons-context';

const App = () => {
	return (
		<ReactIconsContext.Provider value={defaultIcons}>
			<CssBaseline></CssBaseline>
			<Box
				width={'100vw'}
				height={'100vh'}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				{['twitter', 'facebook', 'instagram'].map((network) => (
					<Box mr={2}>
						<SocialIcon network={network}></SocialIcon>
					</Box>
				))}
			</Box>
		</ReactIconsContext.Provider>
	);
};

export default App;
