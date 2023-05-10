import { FC, useState } from "react";
// import Categories from "@pages/market/components/Categories/Categories";
import { Form, Input } from "antd";
import Categories from "../Categories/Categories";
import styles from "./Content.module.scss";

export const Content = () => {
	const [category, setCategory] = useState<string | null>(null);
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Размещение объявления</div>
			<Form>
				{/* <Form.Item> */}
				<div className={styles.categoriesBlock}>
					<div
						style={{
							color: "#ffffff",
							fontSize: 14,
						}}
					>
						Выберете категорию
					</div>
					<Categories
						actionCategory={(e) => console.log(e)}
						currentCategory="dddd"
					/>
				</div>
				<Input />
				{/* </Form.Item> */}
			</Form>
		</div>
	);
};
