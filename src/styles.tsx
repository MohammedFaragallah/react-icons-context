import { CSSProperties } from 'react';

import { ICON_DEFAULT_SIZE } from './defaults';
import { SocialIconStyleProps } from './types';

export const socialIcon = ({
	size = ICON_DEFAULT_SIZE,
	height = size,
	width = size,
}: SocialIconStyleProps): CSSProperties => ({
	display: 'inline-block',
	width,
	height,
	position: 'relative',
	overflow: 'hidden',
	verticalAlign: 'middle',
});

export const socialContainer: CSSProperties = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
};

export const socialSvg: CSSProperties = {
	borderRadius: '50%',
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	fillRule: 'evenodd',
};

export const socialSvgContent: CSSProperties = {
	fill: 'transparent',
};

export const socialSvgMask: CSSProperties = {
	...socialSvgContent,
	fill: '#0f0b0b',
};
