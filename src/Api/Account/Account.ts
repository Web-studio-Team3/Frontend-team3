import { notification } from "antd";
import axios from "axios";
import { iApi } from "./types";

const prefix = "http://localhost:8000/api/";

const AccountApi = {
	async registration(data: iApi.Registration) {
		const url = `${prefix}users/sign_up`;
		const formData = new FormData();
		formData.set("email", data.email);
		formData.set("raw_password", data.raw_password);
		formData.set("full_name", data.full_name);
		formData.set("date_of_birth", data.date_of_birth);
		formData.set("picture", data.picture);

		try {
			const response = await axios.post(url, formData);
			console.log(response.data);
		} catch (error) {
			await notification.error({
				type: "error",
				message: "произошла ошибка регистрации",
			});
		}
	},
	async login(data: iApi.Login) {
		const url = `${prefix}users/sign_in`;

		try {
			const response = await axios.post(url, data, {
				headers: {
					"Access-Control-Allow-Origin": "*",
				},
			});
			console.log(response.data);
		} catch (error) {
			await notification.error({
				type: "error",
				message: "произошла ошибка входа",
			});
		}
	},
};

export default AccountApi;
