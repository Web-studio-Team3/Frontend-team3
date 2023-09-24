import axios, { AxiosRequestConfig } from "axios";

const localAxios = axios.create({
	baseURL: "http://217.28.220.136:8000/api/",
});

export default {
	post: <T>(url: string, data?: any) => {
		return localAxios.post<T>(url, data);
	},
	get: <T>(url: string, params?: any, config?: AxiosRequestConfig) => {
		return localAxios.get<T>(url, {
			params,
			...config,
		});
	},
	put: <T>(url: string, params?: any) => {
		return localAxios.put<T>(url, params);
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
