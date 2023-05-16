import { notification } from "antd";
import axios from "axios";
import { iApi } from "./types";

const prefix = "http://localhost:8000/api/";

const AccountApi = {
	async getUser(data: iApi.GetUser) {
		const url = `${prefix}users/${data.id}`;

		return axios.get(url, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + data.token,
			},
		});
	},

	async getPhoto(data: iApi.GetUser) {
		const url = `${prefix}pictures/${data.id}`;
		const token = localStorage.getItem("token");

		return axios.get(url, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
		});
	},

	async login(data: iApi.Login) {
		const url = `${prefix}users/sign_in`;
		return axios.post(url, data);
	},

	async registration(data: iApi.Registration) {
		const url = `${prefix}users/sign_up`;
		const formData = new FormData();
		formData.set("email", data.email);
		formData.set("raw_password", data.raw_password);
		formData.set("full_name", data.full_name);
		formData.set("date_of_birth", data.date_of_birth);
		formData.set("picture", data.picture);
		return axios.post(url, formData);
	},
};

export default AccountApi;
