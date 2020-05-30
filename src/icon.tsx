import React, { CSSProperties, FC } from 'react';

import { socialSvgContent } from './styles';
import { Color, Icon as IconType } from './types';

interface StyleProps {
	fgColor: Color;
}

const getStyle = ({ fgColor }: StyleProps): CSSProperties => ({
	...socialSvgContent,
	fill: fgColor || 'transparent',
});

interface Props extends StyleProps {
	icon: IconType['icon'];
}

export const Icon: FC<Props> = ({ fgColor, icon, ...props }) => (
	<g {...props} style={getStyle({ fgColor })}>
		<path d={icon} />
	</g>
);
