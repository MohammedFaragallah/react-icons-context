import { CSSProperties, SVGAttributes } from 'react';
import { LinkProps } from '@material-ui/core';

export type ClassesOverride<
	UseStyles extends (props: any) => Record<string, string>
> = Partial<Record<keyof ReturnType<UseStyles>, string>>;

export type Color = SVGAttributes<'g'>['fill'];
export type Path = SVGAttributes<'path'>['d'];
export type SquareSize = CSSProperties['width'] | CSSProperties['height'];

export interface SvgIcon {
	icon: Path;
	mask: Path;
	color: Color;
}

export interface Icons {
	default: SvgIcon;
	[key: string]: SvgIcon;
}

export type Variant = 'square' | 'circle' | 'rounded';

export interface IconProps extends SvgIcon {
	bgColor?: Color;
	fgColor?: Color;
	radius?: CSSProperties['borderRadius'];
	variant?: Variant;
}

export interface SocialIconLinkProps extends Omit<LinkProps, keyof IconProps> {
	size?: SquareSize;
	height?: CSSProperties['height'];
	width?: CSSProperties['width'];
	network?: string;
}

export interface SocialIconProps
	extends SocialIconLinkProps,
		Partial<IconProps> {}
