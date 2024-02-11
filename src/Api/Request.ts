import axios, { AxiosRequestConfig } from "axios";
import { getApiUrl } from "@utils/commonHelpers";

const localAxios = axios.create({
	baseURL: getApiUrl(),
});

export default {
	post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
		return localAxios.post<T>(url, data, config);
	},
	get: <T>(url: string, params?: any, config?: AxiosRequestConfig) => {
		return localAxios.get<T>(url, {
			params,
			...config,
		});
	},
	put: <T>(url: string, params?: any, config?: AxiosRequestConfig) => {
		return localAxios.put<T>(url, params, config);
	},
	delete: <T>(url: string, params?: any, config?: AxiosRequestConfig) => {
		return localAxios.delete<T>(url, {
			params,
			...config,
		});
	},
	patch: <T>(url: string, params?: any) => {
		return localAxios.patch<T>(url, params);
	},
};
