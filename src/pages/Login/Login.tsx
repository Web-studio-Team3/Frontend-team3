import { useEffect, useState } from "react";
import { Form, Button, Input, Radio } from "antd";
import { Link, Navigate } from "react-router-dom";
import styles from "./Login.module.scss";
import RegistrationFinish from "./Utils/LoginFinish";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/Store/store";
import classNames from "classnames";

export const Login = () => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setVisible(true);
	}, []);
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const token = useSelector((state: RootState) => state.Auth.token);
	if (token) return <Navigate to={"/"} />;

	return (
		<div
			className={classNames(styles.page, {
				[styles.visible]: visible,
			})}
		>
			<main className={styles.body}>
				<h1>Вход в Барахолку</h1>
				<Form
					className={styles.form}
					layout="vertical"
					onFinish={() => RegistrationFinish({ form, dispatch })}
					form={form}
				>
					<p className={styles.prevText}>
						<Link to={"/registration"}>Зарегистрироваться</Link> или
						Войти
					</p>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
					>
						<Input
							className={styles.input}
							autoComplete="off"
							placeholder={"Введите логин"}
							type="text"
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
							className={styles.input}
							autoComplete="off"
							placeholder={"Придумайте пароль"}
							type="password"
						/>
					</Form.Item>

					<Form.Item name="raw_password" className={styles.radio}>
						<>
							<Radio />
							запомнить меня
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
					<Link to={"/"}>Продолжить без входа в аккаунт</Link>
					{/* <p className={styles.prevText}>Или продолжить через</p> */}
				</Form>
			</main>
		</div>
	);
};

export default Login;
