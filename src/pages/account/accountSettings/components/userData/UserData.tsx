import { FC } from "react";
import { PlusIcon } from "@assets/icons/Icons";
import { sss } from "@components/userCard/UserCard";
import styles from "./UserData.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "src/Store/store";
const UserData: FC = () => {
	const user = useSelector((state: RootState) => state.User.user);
	return (
		<div className={styles.block}>
			<h2 className={styles.title}>Личные данные</h2>
			<button className={styles.icon}>
				<PlusIcon />
			</button>
			<ul className={styles.list}>
				<li className={styles.item}>
					<p className={styles.text}>Профиль</p>
					<p className={styles.text}>{user?.full_name}</p>
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
					<p className={styles.text}>{user?.email}</p>
				</li>
			</ul>
		</div>
	);
};

export default UserData;
