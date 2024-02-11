import axios, { AxiosRequestConfig } from "axios";

const localAxios = axios.create({
	// baseURL: "http://217.28.220.136:8000/api/",
	baseURL: "http://127.0.0.1:8000/api/",
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
