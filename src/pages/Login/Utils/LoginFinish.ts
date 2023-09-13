import Api from "@api/index";
import { FormInstance } from "antd";
import { Actions } from "./../../../Store/actions";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";
type RegistrationFinishProps = {
	form: FormInstance;
	dispatch: Dispatch<AnyAction>;
	saveLogin: boolean;
};

const LoginFinish = async (props: RegistrationFinishProps) => {
	const { form, dispatch, saveLogin } = props;

	const email = form.getFieldValue("email");
	if (saveLogin === true) {
		localStorage.setItem("saveLogin", email);
	}
	const raw_password = form.getFieldValue("raw_password");
	const data = {
		email,
		raw_password,
	};
	dispatch(Actions.Auth.authorization(data));
};

export default LoginFinish;
