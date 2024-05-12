export function trimLink(link: string) {
	// Check if the link has a protocol
	const hasProtocol =
		link.startsWith("http://") || link.startsWith("https://");

	// Extract the domain up to the first slash symbol
	let domain;
	if (hasProtocol) {
		domain = link.split("//")[1].split("/")[0];
	} else {
		domain = link.split("/")[0];
	}

	return domain;
}
