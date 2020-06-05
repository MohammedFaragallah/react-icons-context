import { makeStyles, Theme } from '@material-ui/core';
import React, { FC } from 'react';
import { ClassesOverride, IconProps } from './types';

const useStyles = makeStyles<Theme, Partial<IconProps>>((theme) => {
	const { shape } = theme;
	const variants = {
		rounded: shape.borderRadius,
		square: '0px',
		circle: '50%',
	};

	return {
		svg: ({ variant, radius }) => ({
			borderRadius: radius || (variant && variants[variant]) || variants.circle,
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			fillRule: 'evenodd',
		}),
		background: {
			fill: 'transparent',
		},
		mask: ({ color, bgColor = color }) => ({
			fill: bgColor,
		}),
		icon: ({ fgColor }) => ({
			fill: fgColor || 'transparent',
		}),
	};
});

export type IconClassesOverrides = ClassesOverride<typeof useStyles>;

interface Props extends Partial<IconProps> {
	classes?: IconClassesOverrides;
}

export const Icon: FC<Props> = (props) => {
	const classes = useStyles(props);
	const { icon, mask } = props;

	return (
		<svg className={classes.svg} viewBox="0 0 64 64">
			<g className={classes.background}>
				<circle cx="32" cy="32" r="31" />
			</g>
			<g className={classes.icon}>
				<path d={icon} />
			</g>
			<g className={classes.mask}>
				<path d={mask} />
			</g>
		</svg>
	);
};
