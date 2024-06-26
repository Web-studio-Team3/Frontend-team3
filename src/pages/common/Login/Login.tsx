import Input from "@ui-kit/Input";
import { Button, Form, Radio } from "antd";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { RootState } from "../../../Store/store";
import styles from "./Login.module.scss";
import RegistrationFinish from "./Utils/LoginFinish";

export const Login = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(true);
	}, []);

	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const token = useSelector((state: RootState) => state.Auth.token);
	const [saveLogin, setSaveLogin] = useState(false);

	if (token) return <Navigate to={"/"} />;

	const saveLoginRecovery = localStorage.getItem("saveLogin");

	return (
		<div className={classNames(styles.page, { [styles.visible]: visible })}>
			<main className={styles.body}>
				<h1>Вход в Барахолку</h1>
				<Form
					className={styles.form}
					layout="vertical"
					onFinish={() =>
						RegistrationFinish({ form, dispatch, saveLogin })
					}
					form={form}
				>
					<p className={styles.prevText}>
						<Link to={"/registration"}>Зарегистрироваться</Link> или
						Войти
					</p>
					<Form.Item
						initialValue={
							saveLoginRecovery !== null ? saveLoginRecovery : ""
						}
						name="email"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
					>
						<Input
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
						<Input
							autoComplete="off"
							placeholder={"Придумайте пароль"}
							type="password"
							value={""}
						/>
					</Form.Item>

					<Form.Item name="save_login" className={styles.radio}>
						<>
							<Radio
								onClick={() => {
									setSaveLogin((prev) => !prev);
								}}
							/>
							запомнить логин
						</>
					</Form.Item>

					<Form.Item>
						<Button
							className={styles.button}
							type="primary"
							size="large"
							htmlType="submit"
						>
							Войти
						</Button>
					</Form.Item>
					<Link className={styles.link} to={"/"}>
						Продолжить без входа в аккаунт
					</Link>
					{/* <p className={styles.prevText}>Или продолжить через</p> */}
				</Form>
			</main>
		</div>
	);
};

export default Login;
