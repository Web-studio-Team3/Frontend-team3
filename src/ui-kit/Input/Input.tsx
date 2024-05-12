import { SearchIcon } from "@assets/icons/Icons";
import Button from "@components/Button";
import { TCustomVoidFunction, TSizing } from "@utils/commonTypes";
import cc from "classnames";
import {
	ChangeEvent,
	FC,
	HTMLProps,
	ReactNode,
	Ref,
	useRef,
	useState,
} from "react";
import styles from "./Input.module.scss";

type TInputType = "text" | "password" | "number" | "search" | "textarea";

interface IInput
	extends Omit<
		HTMLProps<HTMLInputElement>,
		"onChange" | "onBlur" | "onFocus" | "onSubmit" | "className"
	> {
	value: string;
	type?: TInputType;
	sizing?: TSizing;
	extraRounded?: boolean;
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
	inputContainerProps?: HTMLProps<HTMLDivElement>;
}

const Input: FC<IInput> = ({
	type = "text",
	sizing = "md",
	extraRounded = false,
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
	const inputElementRef = useRef<HTMLInputElement>(null);

	const isSearch = type === "search";
	const isTextarea = type === "textarea";
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

	const defaultParams = {
		type: type,
		className: cc(styles.input, styles[sizing], {
			[styles.fail]: isError || isInvalidValue,
			[styles.success]: isSuccess,
			[styles.warning]: isWarning,
			[styles.fluid]: fluid,
			[styles.search]: isSearch,
			[styles.extra_rounded]: extraRounded,
		}),
		placeholder: placeholder || "",
		ref: inputElementRef,
		value: value,
		onChange: handleChange,
		onFocus: handleFocus,
		onBlur: handleBlur,
	};

	return (
		<div className={styles.container}>
			<p className={styles.label} hidden={!label}>
				{label}
			</p>
			<input {...defaultParams} {...other} />
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
