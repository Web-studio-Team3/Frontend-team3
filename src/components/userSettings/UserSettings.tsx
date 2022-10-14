import { PlusIcon } from "@assets/icons/Icons";
import classNames from "classnames";
import styles from "./UserSettings.module.scss";

const UserSettings = (): JSX.Element => {
	return (
		<div className={styles.block}>
			<h2 className={styles.title}>Общие настройки</h2>
			<ul className={styles.list}>
				<li className={styles.item}>
					<p className={styles.text}>Банковские карты</p>
					<p
						className={classNames(
							styles.text,
							styles.textNotStated
						)}
					>
						данных нет
					</p>
					<button className={styles.icon}>
						<PlusIcon />
					</button>
				</li>
				<li className={styles.item}>
					<p className={styles.text}>Уведомления</p>
					<p className={styles.text}>включены</p>
					<button type="button" className={styles.icon}>
						<PlusIcon />
					</button>
				</li>
				<li className={styles.item}>
					<p className={styles.text}>Сообщения</p>
					<p className={styles.text}>могут писать все</p>
					<button className={styles.icon}>
						<PlusIcon />
					</button>
				</li>
				<li className={styles.item}>
					<p className={styles.text}>Реквизиты для доставки</p>
					<p
						className={classNames(
							styles.text,
							styles.textNotStated
						)}
					>
						данных нет
					</p>
					<button className={styles.icon}>
						<PlusIcon />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default UserSettings;
