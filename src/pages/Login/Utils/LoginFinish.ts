import Api from "@api/index";
import { FormInstance } from "antd";

type RegistrationFinishProps = {
	form: FormInstance;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginFinish = async (props: RegistrationFinishProps) => {
	const { form } = props;

	const email = form.getFieldValue("email");
	const raw_password = form.getFieldValue("raw_password");
	const data = {
		email,
		raw_password,
	};

	await Api.AccountApi.login(data);
	if (localStorage.getItem("token") && localStorage.getItem("user_id")) {
		props.setSuccess(true);
		const user_id = localStorage.getItem("user_id");
		if (user_id) Api.AccountApi.getUser({ id: user_id });
	}
};

export default LoginFinish;
