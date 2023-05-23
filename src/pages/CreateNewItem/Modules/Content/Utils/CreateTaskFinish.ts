import Api from "@api/index";
import { AnyAction } from "@reduxjs/toolkit";
import { FormInstance } from "antd";
import { Dispatch } from "react";
import { Actions } from "./../../../../../Store/actions";

type RegistrationFinishProps = {
	form: FormInstance;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
	dispatch: Dispatch<AnyAction>;
};

const CreateTaskFinish = (props: RegistrationFinishProps) => {
	const { form, dispatch } = props;
	const title = form.getFieldValue("title");
	const description = form.getFieldValue("description");
	const condition = form.getFieldValue("condition");
	const address = form.getFieldValue("address");
	const cost = form.getFieldValue("cost");
	const picture = form.getFieldValue("picture")[0].originFileObj;

	const data = {
		category_id: "507f1f77bcf86cd799439011",
		title,
		description,
		condition,
		address,
		cost,
		item_status: "1",
		picture,
	};
	dispatch(Actions.Items.createNewItem(data));
};

export default CreateTaskFinish;
