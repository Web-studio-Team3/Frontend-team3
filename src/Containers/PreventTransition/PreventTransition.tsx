import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { trustedAddresses } from "../../constants/trustedAddresses";
import { TransitionWindow } from "./TransitionWindow";

const PreventTransition: FC<PropsWithChildren> = ({ children }) => {
	const [blocked, setBlocked] = useState(false);
	const [link, setLink] = useState("");

	const getIsAddressTrusted = (link: string) => {
		const addressesList = Object.values(trustedAddresses);
		return addressesList.some(
			(address) => link === address || link.startsWith(address + "/")
		);
	};

	const clickHandler = useCallback(
		(e: MouseEvent) => {
			const anchor = (e.target as HTMLElement).closest("a");
			if (anchor && !getIsAddressTrusted(anchor.href)) {
				if (!blocked) {
					e.preventDefault();
					setLink(anchor.href);
				}
				setBlocked((prevState) => !prevState);
			}
		},
		[blocked]
	);

	useEffect(() => {
		document.addEventListener("click", clickHandler);

		return () => {
			document.removeEventListener("click", clickHandler);
		};
	}, [clickHandler]);

	return (
		<>
			{blocked ? (
				<TransitionWindow link={link} setBlocked={setBlocked} />
			) : (
				children
			)}
		</>
	);
};

export default PreventTransition;
