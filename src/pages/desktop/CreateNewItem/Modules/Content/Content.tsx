import { Button, Form, Input, Upload } from "antd";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import styles from "./Content.module.scss";
import CreateTaskFinish from "./Utils/CreateTaskFinish";

export const Content = () => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const [success, setSuccess] = useState(false);

	const updateFileFormValue = (e: UploadChangeParam<UploadFile<any>>) => {
		return e && e.fileList;
	};

	if (success) return <Navigate to="/" />;
	return (
		<div className={styles.page}>
			<main className={styles.body}>
				<h1>Создание объявления</h1>
				<Form
					className={styles.form}
					layout="vertical"
					onFinish={() => {
						CreateTaskFinish({ form, setSuccess, dispatch });
						setSuccess(true);
					}}
					form={form}
				>
					<span className={styles.inputTitle}>
						Название объявления
					</span>
					<Form.Item
						name="title"
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
							type="text"
						/>
					</Form.Item>
					<span className={styles.inputTitle}>Описание</span>
					<Form.Item
						name="description"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
					>
						<Input.TextArea
							className={styles.input}
							autoComplete="off"
						/>
					</Form.Item>
					<span className={styles.inputTitle}>
						Опишите состояние продаваемого товара
					</span>
					<Form.Item
						name="condition"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
					>
						<Input className={styles.input} />
					</Form.Item>
					<span className={styles.inputTitle}>
						Адресс для встречи
					</span>
					<Form.Item
						name="address"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
					>
						<Input className={styles.input} />
					</Form.Item>

					<span className={styles.inputTitle}>Цена</span>
					<Form.Item
						name="cost"
						rules={[
							{
								required: true,
								message: "Поле не может быть пустым",
							},
						]}
					>
						<Input
							className={styles.input}
							type="number"
							width={"20%"}
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
							Создать
						</Button>
					</Form.Item>
				</Form>
			</main>
		</div>
	);
};
