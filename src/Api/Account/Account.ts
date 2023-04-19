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
			notification.success({
				type: "success",
				message: "Аккаунт зарегистрирован",
			});
			const formDataLogin = new FormData();
			const url1 = `${prefix}users/sign_in`;
			formDataLogin.set("email", data.email);
			formDataLogin.set("raw_password", data.raw_password);
			const response1 = await axios.post(url1, data);
			localStorage.setItem("token", response1.data.jwt_token);
			localStorage.setItem("user_id", response1.data.user_id);

			const url2 = `${prefix}users/{user_id}`.replace(
				"{user_id}",
				`${localStorage.getItem("user_id")}`
			);
			const response3 = await axios.get(url2, {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			});
			console.log(response3);
			sessionStorage.setItem("userData", JSON.stringify(response3.data));
		} catch (error) {
			notification.error({
				type: "error",
				message: "произошла ошибка регистрации",
			});
		}
	},
	async login(data: iApi.Login) {
		const url = `${prefix}users/sign_in`;

		try {
			const response = await axios.post(url, data);
			await notification.success({
				type: "success",
				message: "Вы успешно вошли в аккаунт",
			});
			localStorage.setItem("token", response.data.jwt_token);
			localStorage.setItem("user_id", response.data.user_id);
			const url2 = `${prefix}users/{user_id}`.replace(
				"{user_id}",
				`${localStorage.getItem("user_id")}`
			);
			const response3 = await axios.get(url2, {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			});
			console.log(response3);
			sessionStorage.setItem("userData", JSON.stringify(response3.data));
		} catch (error) {
			await notification.error({
				type: "error",
				message: "Неверный email или пароль",
			});
		}
	},
	async getUser(data: iApi.GetUser) {
		const url = `${prefix}users/{user_id}`.replace(
			"{user_id}",
			`${data.id}`
		);
		const token = localStorage.getItem("token");
		try {
			const response = await axios.get(url, {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			});
			sessionStorage.setItem("user", response.data);
			await notification.success({
				type: "success",
				message: "Информация о аккаунте загружена",
			});
		} catch (error) {
			await notification.error({
				type: "error",
				message: "При получении информации произошла ошибка",
			});
		}
	},
};

export default AccountApi;
