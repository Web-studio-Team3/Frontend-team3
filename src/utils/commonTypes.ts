export interface ResponseGenerator {
	config?: any;
	data?: any;
	headers?: any;
	request?: any;
	status?: number;
	statusText?: string;
}

export type TSizing = "xs" | "sm" | "md" | "lg";

export type TCustomVoidFunction<T> = (value: T) => void;
