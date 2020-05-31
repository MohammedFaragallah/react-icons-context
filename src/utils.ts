export const keyFor = (href: string) => {
	const hrefPattern = /^(?:https?:\/\/)?(?:w{3}\.)?([a-z\d.-]+)\.(?:[a-z.]{2,10})(?:[/\w.-]*)*/;
	const domainPattern = href.match(hrefPattern);
	const domain = domainPattern?.[1];

	return domain;
};
