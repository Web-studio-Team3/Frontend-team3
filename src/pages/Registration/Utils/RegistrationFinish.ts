import Api from "@api/index";
import { FormInstance } from "antd";

type RegistrationFinishProps = {
	form: FormInstance;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegistrationFinish = async (props: RegistrationFinishProps) => {
	const { form } = props;
	const email = form.getFieldValue("email");
	const raw_password = form.getFieldValue("raw_password");
	const full_name = form.getFieldValue("full_name");
	const picture = form.getFieldValue("picture")[0].originFileObj;
	const date = new Date(form.getFieldValue("date_of_birth"));

	const date_of_birth =
		date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

	const data = {
		email,
		raw_password,
		full_name,
		date_of_birth,
		picture,
	};

	await Api.AccountApi.registration(data);
	if (localStorage.getItem("token") && localStorage.getItem("user_id")) {
		props.setSuccess(true);
		const user_id = localStorage.getItem("user_id");
		if (user_id) Api.AccountApi.getUser({ id: user_id });
	}
};

export default RegistrationFinish;
