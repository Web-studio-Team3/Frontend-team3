import { FC } from "react";
import { Form, Input } from "antd";
import styles from "./Content.module.scss";

export const Content = () => {
	return (
		<div className={styles.wrapper}>
			<Form>
				<Form.Item>
					<Input />
				</Form.Item>
			</Form>
		</div>
	);
};
