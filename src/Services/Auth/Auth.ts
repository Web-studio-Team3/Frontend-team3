import { notification } from "antd";
import axios from "axios";
import { iApi } from "./types";

const prefix = "http://localhost:8000/api/";

const RegistrationService = {
	async registration(data: iApi.Registration) {
		const url = `${prefix}users/sign_up`;

		try {
			const resp = await axios.post(url, data);
			console.log(resp.data);
		} catch (error) {
			await notification.error({
				type: "error",
				message: "произошла ошибка регистрации",
			});
		}
	},
};

export default RegistrationService;
