import Api from "@api/index";
import { FormInstance } from "antd";

type RegistrationFinishProps = {
	form: FormInstance;
};

const RegistrationFinish = (props: RegistrationFinishProps) => {
	const { form } = props;
	console.log("i here");
	console.log(form);
	const email = form.getFieldValue("email");
	const raw_password = form.getFieldValue("raw_password");
	const full_name = form.getFieldValue("full_name");
	const picture = form.getFieldValue("picture")[0].originFileObj;
	// picture = picture;
	console.log(typeof picture);
	console.log(picture);
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

	Api.AccountApi.registration(data);
};

export default RegistrationFinish;
