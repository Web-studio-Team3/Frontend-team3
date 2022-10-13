import { PlusIcon } from "@assets/icons/Icons";
import classNames from "classnames";
import styles from "./UserSettings.module.scss";

const UserSettings = (): JSX.Element => {
	return (
		<div className={styles["user-settings"]}>
			<h2 className={styles["user-settings__title"]}>Общие настройки</h2>
			<ul className={styles["user-settings__list"]}>
				<li className={styles["user-settings__item"]}>
					<p className={styles["user-settings__text"]}>
						Банковские карты
					</p>
					<p
						className={classNames(
							styles["user-settings__text"],
							styles["not-stated"]
						)}
					>
						данных нет
					</p>
					<button className={styles["user-settings__icon"]}>
						<PlusIcon />
					</button>
				</li>
				<li className={styles["user-settings__item"]}>
					<p className={styles["user-settings__text"]}>Уведомления</p>
					<p className={styles["user-settings__text"]}>включены</p>
					<button
						type="button"
						className={styles["user-settings__icon"]}
					>
						<PlusIcon />
					</button>
				</li>
				<li className={styles["user-settings__item"]}>
					<p className={styles["user-settings__text"]}>Сообщения</p>
					<p className={styles["user-settings__text"]}>
						могут писать все
					</p>
					<button className={styles["user-settings__icon"]}>
						<PlusIcon />
					</button>
				</li>
				<li className={styles["user-settings__item"]}>
					<p className={styles["user-settings__text"]}>
						Реквизиты для доставки
					</p>
					<p
						className={classNames(
							styles["user-settings__text"],
							styles["not-stated"]
						)}
					>
						данных нет
					</p>
					<button className={styles["user-settings__icon"]}>
						<PlusIcon />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default UserSettings;
