import { Form, Button, DatePicker, Input, Upload } from "antd";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import styles from "./Registration.module.scss";
import RegistrationFinish from "./Utils/RegistrationFinish";

export const Registration = () => {
	const [form] = Form.useForm();

	const updateFileFormValue = (e: UploadChangeParam<UploadFile<any>>) => {
		return e && e.fileList;
	};

	return (
		<div className={styles.page}>
			<main className={styles.body}>
				<h1>Регистрация</h1>
				<Form
					layout="vertical"
					onFinish={() => RegistrationFinish({ form })}
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
							className={styles.input}
							placeholder={"Ваше имя?"}
						/>
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
							// onChange={base64Uploader}
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
							Зарегестрироваться
						</Button>
					</Form.Item>
				</Form>
			</main>
		</div>
	);
};

export default Registration;
