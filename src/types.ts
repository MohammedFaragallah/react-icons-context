import { CSSProperties, SVGAttributes } from 'react';
import { LinkProps } from '@material-ui/core';

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

export interface SocialIconStyleProps {
	size?: SquareSize;
	height?: CSSProperties['height'];
	width?: CSSProperties['width'];
}

export interface SocialIconProps extends SocialIconStyleProps, LinkProps {
	bgColor?: Color;
	fgColor?: Color;
	network?: string;
}
