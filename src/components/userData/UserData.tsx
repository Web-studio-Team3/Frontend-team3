import { PlusIcon } from "@assets/icons/Icons";
import styles from "./UserData.module.scss";

const UserData = (): JSX.Element => {
	return (
		<div className={styles["user-data"]}>
			<h2 className={styles["user-data__title"]}>Личные данные</h2>
			<ul className={styles["user-data__list"]}>
				<li className={styles["user-data__item"]}>
					<p className={styles["user-data__text"]}>Профиль</p>
					<p className={styles["user-data__text"]}>
						Амарантова Жозефина Котлетовна
					</p>
					<button className={styles["user-data__icon"]}>
						<PlusIcon />
					</button>
				</li>
				<li className={styles["user-data__item"]}>
					<p className={styles["user-data__text"]}>Телефон</p>
					<p className={styles["user-data__text"]}>
						+7 (900)-888-88-88
					</p>
					<button type="button" className={styles["user-data__icon"]}>
						<PlusIcon />
					</button>
				</li>
				<li className={styles["user-data__item"]}>
					<p className={styles["user-data__text"]}>Место</p>
					<p className={styles["user-data__text"]}>
						Москва, 4 общежитие
					</p>
					<button className={styles["user-data__icon"]}>
						<PlusIcon />
					</button>
				</li>
				<li className={styles["user-data__item"]}>
					<p className={styles["user-data__text"]}>E-mail</p>
					<p className={styles["user-data__text"]}>
						kotletka@gmail.com
					</p>
					<button className={styles["user-data__icon"]}>
						<PlusIcon />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default UserData;
