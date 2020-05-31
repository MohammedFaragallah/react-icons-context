import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import React from 'react';

import { Background } from './background';
import { ReactIconsConsumer } from './context';
import { DEFAULT_KEY } from './defaults';
import { Icon } from './icon';
import { Mask } from './mask';
import { socialContainer, socialIcon, socialSvg } from './styles';
import { SocialIconProps } from './types';
import { keyFor } from './utils';

export const SocialIcon: React.FC<SocialIconProps> = (props) => {
	const {
		href,
		network,
		bgColor,
		fgColor,
		style,
		size,
		height,
		width,
		...rest
	} = props;

	const networkKey = network || (href ? keyFor(href) : DEFAULT_KEY);

	return (
		<ReactIconsConsumer>
			{(icons) => {
				const { icon, mask, color } =
					(networkKey && icons[networkKey]) || icons.default;

				return (
					<Link
						href={href}
						style={{ ...socialIcon({ size, height, width }), ...style }}
						{...rest}
					>
						<Box style={socialContainer}>
							<svg style={socialSvg} viewBox="0 0 64 64">
								<Background /> <Icon icon={icon} fgColor={fgColor} />
								<Mask mask={mask} bgColor={bgColor || color} />
							</svg>
						</Box>
					</Link>
				);
			}}
		</ReactIconsConsumer>
	);
};
