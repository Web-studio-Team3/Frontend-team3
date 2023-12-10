import styles from "./NavBar.module.scss";
import { FC, ReactNode } from "react";
import { BackArrowIcon } from "@assets/icons/Icons";
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";

interface INavBarProps {
	title: string;
	linkTo?: string;
	children?: ReactNode;
	goBackLink?: boolean;
}

const NavBar: FC<INavBarProps> = ({
	title,
	linkTo,
	children,
	goBackLink = false,
}) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (goBackLink) {
			navigate(-1);
		}
	};

	return (
		<header className={styles.colored_wrapper}>
			<div className={styles.container}>
				<div className={styles.left_block}>
					<Button
						isLink={!goBackLink}
						to={linkTo}
						variant="ghost"
						size="xs"
						onClick={handleClick}
					>
						<BackArrowIcon noBorder />
					</Button>
					<p className={styles.text}>{title}</p>
				</div>
				{children}
			</div>
		</header>
	);
};

export default NavBar;
