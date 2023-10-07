import styles from "./Button.module.scss";
import {
	ComponentProps,
	FC,
	ReactNode,
	SyntheticEvent,
} from "react";
import { Link } from "react-router-dom";
import cc from "classnames";

type TButtonVariant = "purple" | "green" | "ghost";

type TButtonSize = "xs" | "sm" | "md" | "lg";

type TButtonProps = ComponentProps<"button"> & {
	variant?: TButtonVariant;
	size?: TButtonSize;
	fluid?: boolean;
	onClick?: VoidFunction;
	children: ReactNode;
	isVisible?: boolean;
	isLink?: boolean;
	to?: string;
};

const Button: FC<TButtonProps> = ({
	variant = "purple",
	size = "md",
	fluid,
	onClick,
	children,
	isVisible = true,
	isLink = false,
	to,
	type,
	disabled,
	...other
}) => {
	const className = cc(styles.button, styles[variant], styles[size], {
		[styles.fluid]: fluid,
	});

	const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (onClick) {
			onClick();
		}
	};

	return (
		<>
			{isVisible &&
				(isLink && !disabled ? (
					<Link to={to!} className={className}>
						{children}
					</Link>
				) : (
					<button
						onClick={handleClick}
						type={type}
						className={className}
						disabled={disabled}
						{...other}
					>
						{children}
					</button>
				))}
		</>
	);
};

export default Button;
