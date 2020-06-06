import React, { FC } from 'react';

import { Icon, IconClassesOverrides } from './Icon';
import { Link, LinkClassesOverrides } from './Link';
import { SocialIconProps } from './types';

interface Props extends SocialIconProps {
	classes?: LinkClassesOverrides & IconClassesOverrides;
}

export const SocialIcon: FC<Props> = (props) => {
	const { radius, variant, bgColor, fgColor, ...rest } = props;

	return (
		<Link {...rest}>
			<Icon
				radius={radius}
				variant={variant}
				bgColor={bgColor}
				fgColor={fgColor}
			/>
		</Link>
	);
};
