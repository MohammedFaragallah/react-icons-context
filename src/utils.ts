export const keyFor = (url: string) => {
	const urlPattern = /^(?:https?:\/\/)?(?:w{3}\.)?([a-z\d.-]+)\.(?:[a-z.]{2,10})(?:[/\w.-]*)*/;
	const domainPattern = url.match(urlPattern);
	const domain = domainPattern?.[1];

	return domain;
};
