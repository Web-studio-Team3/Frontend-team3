import { Form, Button, Input, Radio } from "antd";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import RegistrationFinish from "./Utils/LoginFinish";

export const Login = () => {
	const [form] = Form.useForm();

	return (
		<div className={styles.page}>
			<main className={styles.body}>
				<h1>Вход в Барахолку</h1>
				<Form
					layout="vertical"
					onFinish={() => RegistrationFinish({ form })}
					form={form}
				>
					<p className={styles.prevText}>
						<Link to={"/registration"}>Зарегестрироваться</Link> или
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
							// allowClear
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
						<Radio />
						запомнить меня
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
					{/* <p className={styles.prevText}>Или продолжить через</p> */}
				</Form>
			</main>
		</div>
	);
};

export default Login;
