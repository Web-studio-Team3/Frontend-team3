import { FC } from "react";
import { PlusIcon } from "@assets/icons/Icons";
import styles from "./UserData.module.scss";

const UserData: FC = () => {
	return (
		<div className={styles.block}>
			<h2 className={styles.title}>Личные данные</h2>
			<button className={styles.icon}>
				<PlusIcon />
			</button>
			<ul className={styles.list}>
				<li className={styles.item}>
					<p className={styles.text}>Профиль</p>
					<p className={styles.text}>
						Амарантова Жозефина Котлетовна
					</p>
				</li>
				<li className={styles.item}>
					<p className={styles.text}>Телефон</p>
					<p className={styles.text}>+7 (900)-888-88-88</p>
				</li>
				<li className={styles.item}>
					<p className={styles.text}>Место</p>
					<p className={styles.text}>Москва, 4 общежитие</p>
				</li>
				<li className={styles.item}>
					<p className={styles.text}>E-mail</p>
					<p className={styles.text}>kotletka@gmail.com</p>
				</li>
			</ul>
		</div>
	);
};

export default UserData;
