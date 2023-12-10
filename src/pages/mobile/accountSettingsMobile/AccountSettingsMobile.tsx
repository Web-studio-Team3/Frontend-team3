import React, { FC } from "react";
import styles from "./AccountSettingsMobile.module.scss";
import BreadcrumbsMobile from "@components/mobile/breadcrumbsMobile";
import { NavLink } from "react-router-dom";
import { CollapseArrowIcon } from "@assets/icons/Icons";
import ProfileCardMobile from "@components/mobile/profileCardMobile";
import classNames from "classnames";
import WithBottomNavigator from "@components/WithBottomNavigator";

const AccountMessagesMobile: FC = () => {
	return (
		<>
			<BreadcrumbsMobile></BreadcrumbsMobile>

			<ProfileCardMobile type={"my"} reviewsCount={5}></ProfileCardMobile>
			<div className={styles.navigationList}>
				<NavLink
					to="address"
					className={classNames(styles.navLink, styles.first)}
				>
					Адрес
					<span className={styles.counter}>
						Москва, 800-летия Москвы...
					</span>
					<CollapseArrowIcon />
				</NavLink>

				<div className={styles.separator}></div>

				<div>
					<NavLink to="email" className={styles.navLink}>
						Email
						<span className={styles.counterWhite}>
							kotletka@gmail.com
						</span>
						<CollapseArrowIcon />
					</NavLink>
				</div>

				<div className={styles.separator}></div>

				<div>
					<NavLink
						to="phone"
						className={classNames(styles.navLink, styles.last)}
					>
						Телефон
						<span className={styles.counterWhite}>
							+7 900 888-88-88
						</span>
						<CollapseArrowIcon />
					</NavLink>
				</div>
			</div>
			<div className={styles.navigationList}>
				<NavLink
					to="notifications"
					className={classNames(styles.navLink, styles.first)}
				>
					Уведомления
					<CollapseArrowIcon />
				</NavLink>

				<div className={styles.separator}></div>

				<div>
					<NavLink to="messages" className={styles.navLink}>
						Сообщения
						<CollapseArrowIcon />
					</NavLink>
				</div>

				<div className={styles.separator}></div>

				<div>
					<NavLink to="delivery" className={styles.navLink}>
						Реквизиты для доставки
						<CollapseArrowIcon />
					</NavLink>
				</div>

				<div className={styles.separator}></div>

				<div>
					<NavLink
						to="calls"
						className={classNames(styles.navLink, styles.last)}
					>
						Управление звонками
						<CollapseArrowIcon />
					</NavLink>
				</div>
			</div>
			<div className={classNames(styles.navigationList, styles.navLast)}>
				<NavLink
					to="blacklist"
					className={classNames(styles.navLink, styles.first)}
				>
					Черный список
					<CollapseArrowIcon />
				</NavLink>

				<div className={styles.separator}></div>

				<div>
					<NavLink to="support" className={styles.navLink}>
						Служба поддержки
						<CollapseArrowIcon />
					</NavLink>
				</div>

				<div className={styles.separator}></div>

				<div>
					<NavLink
						to="policy"
						className={classNames(styles.navLink, styles.last)}
					>
						Политика конфиденциальности
						<CollapseArrowIcon />
					</NavLink>
				</div>
			</div>
			<button className={styles.resetButton}>Выйти</button>
		</>
	);
};

export default AccountMessagesMobile;
