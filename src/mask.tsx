import React, { CSSProperties, FC } from 'react';

import { socialSvgMask } from './styles';
import { Color, Icon } from './types';

interface StyleProps {
	bgColor: Color;
}

const getStyle = ({ bgColor }: StyleProps): CSSProperties => ({
	...socialSvgMask,
	fill: bgColor,
});

interface Props extends StyleProps {
	mask: Icon['mask'];
}

export const Mask: FC<Props> = ({ bgColor, mask }) => (
	<g style={getStyle({ bgColor })}>
		<path d={mask} />
	</g>
);
