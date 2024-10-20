import Input from "@ui-kit/Input";
import { Button, DatePicker, Form, Upload } from "antd";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { RootState } from "../../../Store/store";
import styles from "./Registration.module.scss";
import RegistrationFinish from "./Utils/RegistrationFinish";

export const Registration = () => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setVisible(true);
	}, []);
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const [success, setSuccess] = useState(false);

	const updateFileFormValue = (e: UploadChangeParam<UploadFile<any>>) => {
		return e && e.fileList;
	};

	const token = useSelector((state: RootState) => state.Auth.token);
	if (token) return <Navigate to={"/"} />;

	if (success) return <Navigate to={"/"} />;

	return (
		<div
			className={classNames(styles.page, {
				[styles.visible]: visible,
			})}
		>
			<main className={styles.body}>
				<h1>Регистрация</h1>
				<Form
					className={styles.form}
					layout="vertical"
					onFinish={() =>
						RegistrationFinish({ form, setSuccess, dispatch })
					}
					form={form}
				>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
					>
						<Input style = {{width: "100%", borderRadius: 15}}
							autoComplete="off"
							placeholder={"Введите логин"}
							type="text"
							value={""}
						/>
					</Form.Item>

					<Form.Item
						name="raw_password"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
					>
						<Input style = {{width: "100%", borderRadius: 15}}
							autoComplete="off"
							placeholder={"Придумайте пароль"}
							type="password"
							value={""}
						/>
					</Form.Item>
					<Form.Item
						name="full_name"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
					>
						<Input
							style= {{width: "100%", borderRadius: 15}}
							placeholder={"Ваше имя?"} value={""} />
					</Form.Item>
					<Form.Item
						name="date_of_birth"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
					>
						<DatePicker
							className={styles.input}
							allowClear={false}
							placeholder={"Ваш день рождения?"}
						/>
					</Form.Item>
					<Form.Item
						name="picture"
						rules={[
							{
								required: true,
								message: "Загрузите фотографию",
							},
						]}
						valuePropName="fileList"
						getValueFromEvent={updateFileFormValue}
						label="Фотография"
						className={styles.upload}
					>
						<Upload
							maxCount={1}
							multiple={false}
							beforeUpload={() => false}
						>
							<Button>Загрузить фотографию</Button>
						</Upload>
					</Form.Item>
					<Form.Item>
						<Button
							className={styles.button}
							type="primary"
							size="large"
							htmlType="submit"
						>
							Зарегистрироваться
						</Button>
					</Form.Item>
					<Link className={styles.link_text} to={"/login"}>
						Венуться на страницу входа
					</Link>
				</Form>
			</main>
		</div>
	);
};

export default Registration;
