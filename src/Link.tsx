import { Link as MuiLink, Theme } from '@material-ui/core';
import React, { Children, cloneElement, FC, isValidElement } from 'react';
import { makeStyles } from '@material-ui/styles';

import { ReactIconsConsumer } from './context';
import { ClassesOverride, IconProps, SocialIconLinkProps } from './types';
import { keyFor } from './utils';

export const ICON_DEFAULT_SIZE = 33;

const useStyles = makeStyles<Theme, SocialIconLinkProps>({
	root: ({ size = ICON_DEFAULT_SIZE, height = size, width = size }) => ({
		width,
		height,
		display: 'inline-block',
		position: 'relative',
		overflow: 'hidden',
		verticalAlign: 'middle',
	}),
});

export type LinkClassesOverrides = ClassesOverride<typeof useStyles>;

interface Props extends SocialIconLinkProps {
	classes?: ClassesOverride<typeof useStyles>;
}

export const Link: FC<Props> = (props) => {
	const { href, network, classes: classesOverride, children, ...rest } = props;
	const classes = useStyles(props);

	const networkKey = (network || (href && keyFor(href)))?.toLowerCase();

	return (
		<ReactIconsConsumer>
			{(icons) => {
				const icon = (networkKey && icons[networkKey]) || icons.default;

				return (
					<MuiLink href={href} className={classes.root} {...rest}>
						{Children.map(children, (child) => {
							if (!isValidElement<IconProps>(child)) {
								return child;
							}

							return cloneElement(child, icon);
						})}
					</MuiLink>
				);
			}}
		</ReactIconsConsumer>
	);
};
