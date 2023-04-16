import Api from "@api/index";
import { FormInstance } from "antd";

type RegistrationFinishProps = {
	form: FormInstance;
};

const LoginFinish = (props: RegistrationFinishProps) => {
	const { form } = props;

	const email = form.getFieldValue("email");
	const raw_password = form.getFieldValue("raw_password");

	const data = {
		email,
		raw_password,
	};

	Api.AccountApi.login(data);
};

export default LoginFinish;
