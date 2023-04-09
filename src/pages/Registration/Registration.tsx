import { Form, Input, Button, DatePicker } from "antd";
import RegistrationService from "./../../Services/Auth/Auth";
import styles from "./Registration.module.scss";

export const Registration = () => {
	const [form] = Form.useForm();

	const onFinish = () => {
		const email = form.getFieldValue("email");
		const raw_password = form.getFieldValue("raw_password");
		const full_name = form.getFieldValue("full_name");
		const date = new Date(form.getFieldValue("date_of_birth"));

		const date_of_birth =
			date.getDate() +
			"-" +
			(date.getMonth() + 1) +
			"-" +
			date.getFullYear();

		const data = {
			email,
			raw_password,
			full_name,
			date_of_birth,
		};

		RegistrationService.registration(data);
	};

	return (
		<div className={styles.page}>
			<main className={styles.body}>
				<h1>Регистрация</h1>
				<Form layout="vertical" onFinish={onFinish} form={form}>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
						label="email"
					>
						<Input placeholder={"Введите Ваш email"} allowClear />
					</Form.Item>
				</Form>
				<Form layout="vertical" onFinish={onFinish} form={form}>
					<Form.Item
						name="raw_password"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
						label="Пароль"
					>
						<Input
							placeholder={"Придумайте пароль"}
							type="password"
							allowClear
						/>
					</Form.Item>
				</Form>
				<Form layout="vertical" onFinish={onFinish} form={form}>
					<Form.Item
						name="full_name"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
						label="ФИО"
					>
						<Input placeholder={"Ваше имя?"} allowClear />
					</Form.Item>
				</Form>
				<Form layout="vertical" onFinish={onFinish} form={form}>
					<Form.Item
						name="date_of_birth"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
						label="Дата рождения"
					>
						<DatePicker
							style={{ width: "200px" }}
							placeholder={"Ваш день рождения?"}
							allowClear
						/>
					</Form.Item>
					<Form.Item>
						<Button
							className={styles.button}
							type="primary"
							size="large"
							htmlType="submit"
						>
							Зарегестрироваться
						</Button>
					</Form.Item>
				</Form>
			</main>
		</div>
	);
};

export default Registration;
