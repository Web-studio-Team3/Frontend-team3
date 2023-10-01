import styles from "./Input.module.scss";
import { ChangeEvent, FC, HTMLProps, ReactNode, Ref, useState } from "react";
import { TCustomVoidFunction, TSizing } from "@utils/commonTypes";
import cc from "classnames";
import Button from "@components/Button";
import { SearchIcon } from "@assets/icons/Icons";

type TInputType = "text" | "password" | "number" | "search";

interface IInput
	extends Omit<
		HTMLProps<HTMLInputElement>,
		"onChange" | "onBlur" | "onFocus" | "onSubmit"
	> {
	value: string;
	type?: TInputType;
	sizing?: TSizing;
	fluid?: boolean;
	label?: string;
	isError?: boolean;
	isSuccess?: boolean;
	isWarning?: boolean;
	isFocus?: boolean;
	placeholder?: string;
	errorText?: string;
	onChange?: TCustomVoidFunction<string>;
	onFocus?: TCustomVoidFunction<string>;
	onBlur?: TCustomVoidFunction<string>;
	inputRef?: Ref<HTMLInputElement>;
	validator?: (value: string) => boolean;
	onSubmit?: TCustomVoidFunction<string>;
	renderInputIcon?: () => ReactNode;
	onIconClick?: TCustomVoidFunction<string>;
}

const Input: FC<IInput> = ({
	type = "text",
	sizing = "medium",
	label,
	fluid = false,
	isError,
	isSuccess,
	isWarning,
	isFocus,
	value,
	placeholder,
	errorText,
	onSubmit,
	onChange,
	onFocus,
	onBlur,
	inputRef,
	validator,
	onIconClick,
	renderInputIcon,
	...other
}) => {
	const [isInvalidValue, setIsInvalidValue] = useState<boolean>(false);

	const isSearch = type === "search";
	const handleChange = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>): void => {
		if (validator && !validator(value)) {
			setIsInvalidValue(true);
			setTimeout(() => setIsInvalidValue(false), 200);
			return;
		}

		if (onChange) onChange(value);
	};

	const handleFocus = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>): void => {
		if (onFocus) onFocus(value);
	};

	const handleBlur = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>): void => {
		if (onBlur) onBlur(value);
	};

	const handleSubmit = () => {
		if (onSubmit) onSubmit(value);
	};

	return (
		<div className={styles.container}>
			<p className={styles.label} hidden={!label}>
				{label}
			</p>
			<input
				type={type}
				className={cc(styles.input, styles[sizing], {
					[styles.fail]: isError || isInvalidValue,
					[styles.success]: isSuccess,
					[styles.warning]: isWarning,
					[styles.fluid]: fluid,
					[styles.search]: isSearch,
				})}
				placeholder={placeholder || ""}
				ref={inputRef}
				value={value}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				{...other}
			/>
			<p className={styles.errorText} hidden={!isError}>
				{errorText}
			</p>
			{isSearch && (
				<div className={cc(styles.button, styles.buttonSearch)}>
					<Button
						onClick={handleSubmit}
						variant="ghost"
						fluid
						size="xs"
						style={{ height: "100%" }}
					>
						<SearchIcon />
					</Button>
				</div>
			)}
			{renderInputIcon && renderInputIcon()}
		</div>
	);
};

export default Input;
