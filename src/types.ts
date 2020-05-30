import { CSSProperties, SVGAttributes } from 'react';

export type Color = SVGAttributes<'g'>['fill'];
export type Path = SVGAttributes<'path'>['d'];

export interface Icon {
	icon: Path;
	mask: Path;
	color: Color;
}

export interface Icons {
	default: Icon;
	[key: string]: Icon;
}

export type SquareSize = CSSProperties['width'] | CSSProperties['height'];

export interface Options {
	size?: SquareSize;
	height?: CSSProperties['height'];
	width?: CSSProperties['width'];
}

// TODO: extends root component props Link|span
export interface SocialIconProps extends Options {
	bgColor?: Color;
	fgColor?: Color;
	label?: string;
	network?: string;
	url?: string;
	className?: string;
	style?: CSSProperties;
}
