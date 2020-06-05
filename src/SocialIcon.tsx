import React, { FC } from 'react';

import { Icon, IconClassesOverrides } from './Icon';
import { Link, LinkClassesOverrides } from './Link';
import { SocialIconProps } from './types';

interface Props extends SocialIconProps {
	classes?: LinkClassesOverrides & IconClassesOverrides;
}

export const SocialIcon: FC<Props> = (props) => {
	return (
		<Link {...props}>
			<Icon {...props} />
		</Link>
	);
};
