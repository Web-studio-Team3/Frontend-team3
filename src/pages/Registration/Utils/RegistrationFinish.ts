import Api from "@api/index";
import { AnyAction } from "@reduxjs/toolkit";
import { FormInstance } from "antd";
import { Dispatch } from "react";
import { Actions } from "./../../../Store/actions";

type RegistrationFinishProps = {
	form: FormInstance;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
	dispatch: Dispatch<AnyAction>;
};

const RegistrationFinish = (props: RegistrationFinishProps) => {
	const { form, dispatch } = props;
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
	dispatch(Actions.Auth.registration(data));
};

export default RegistrationFinish;
