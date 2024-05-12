import Request from "@api/Request";
import { iApi } from "./types";

const AccountApi = {
	async getUser(data: iApi.GetUser) {
		const url = `users/info/${data.id}`;

		return Request.get(url, null, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + data.token,
			},
		});
	},

	async getPhoto(data: iApi.GetUser) {
		const url = `pictures/${data.id}`;
		const token = localStorage.getItem("token");

		return Request.get(url, null, {
			headers: {
				"Content-Type": "application/json",
			},
		});
	},

	async login(data: iApi.Login) {
		const url = `users/sign_in`;
		return Request.post(url, data);
	},

	async registration(data: iApi.Registration) {
		const url = `users/sign_up`;
		const formData = new FormData();
		formData.set("email", data.email);
		formData.set("raw_password", data.raw_password);
		formData.set("full_name", data.full_name);
		formData.set("date_of_birth", data.date_of_birth);
		formData.set("picture", data.picture);
		return Request.post(url, formData);
	},
};

export default AccountApi;
