import { Box, CssBaseline } from '@material-ui/core';
import React from 'react';
import {
	defaultIcons,
	ICON_DEFAULT_SIZE,
	ReactIconsProvider,
	SocialIcon,
	SocialIconProps,
} from 'react-icons-context';
import { makeStyles } from '@material-ui/styles';
import { TitleProps } from 'TitleProps';

const useStyles = makeStyles((theme) => {
	const { transitions } = theme;

	return {
		root: {
			transition: transitions.create('all', { duration: 500 }),
			'&:hover': {
				transform: 'scale(1.1)',
			},
		},
	};
});

const mySocials: SocialIconProps[] = [
	{ href: 'https://github.com/MohammedFaragallah', bgColor: '#333' },
	{ href: 'https://twitter.com/ffragalla' },
	{ href: 'https://facebook.com/MohammedAliFaragallah' },
	{ href: 'https://instagram.com/mohammedalifaragallah', bgColor: '#E1306C' },
	{ href: 'mailto:ffragalla@gmail.com', network: 'mailTo', bgColor: '#dd4b39' },
	{
		network: 'share',
		fgColor: '#d7d8d9',
		bgColor: 'tomato',
		height: 120,
		width: 80,
		onClick: () =>
			window.open(
				'https://github.com/MohammedFaragallah/react-icons-context',
				'_blank',
			),
	},
];

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
	const classes = useStyles();

	return (
		<ReactIconsProvider value={defaultIcons}>
			<CssBaseline />
			<Box
				width="100vw"
				height="100vh"
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Box display="flex" mb={4}>
					{mySocials.map((network, index) => {
						const props = {
							target: '_blank',
							size: ICON_DEFAULT_SIZE + (mySocials.length - index) * 10,
							radius: (mySocials.length - index) * 8,
							...network,
						};

						return (
							<Box mr={2} key={JSON.stringify(network)}>
								<TitleProps props={props} condition>
									<SocialIcon classes={classes} {...props} />
								</TitleProps>
							</Box>
						);
					})}
				</Box>
				<Box display="flex" flexWrap="wrap">
					{Object.keys(defaultIcons).map((network) => (
						<Box
							key={network}
							mr={2}
							display="flex"
							flexDirection="column"
							alignItems="center"
						>
							<SocialIcon network={network} title={network} />
						</Box>
					))}
				</Box>
			</Box>
		</ReactIconsProvider>
	);
};
