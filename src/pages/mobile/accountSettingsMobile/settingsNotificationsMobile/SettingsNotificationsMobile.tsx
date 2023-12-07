import React, { FC } from "react";
import styles from "./SettingsNotificationsMobile.module.scss";
import BreadcrumbsMobile from "@components/mobile/breadcrumbsMobile";
import { NavLink } from "react-router-dom";
import { CollapseArrowIcon } from "@assets/icons/Icons";
import UserCardMobile from "@components/mobile/userCardMobile";
import ToggleButton from "@components/ToggleButton";
import classNames from "classnames";

const AccountMessagesMobile: FC = () => {
	return (
		<>
			<BreadcrumbsMobile></BreadcrumbsMobile>
			<div className={styles.navigationList}>
				<div className={classNames(styles.first, styles.navLink)}>
					<div className={styles.textBlock}>
						<p className={styles.title}>Мои уведомления</p>
						<p className={styles.description}>
							При измении статуса публикации моих объявлений
						</p>
					</div>
					<ToggleButton />
				</div>

				<div className={styles.separator}></div>

				<div className={styles.navLink}>
					<div className={styles.textBlock}>
						<p className={styles.title}>Получать СМС</p>
						<p className={styles.description}>
							Уведомления о новых сообщениях, скидках и платных
							операциях
						</p>
					</div>
					<ToggleButton />
				</div>

				<div className={styles.separator}></div>

				<div className={styles.navLink}>
					<div className={styles.textBlock}>
						<p className={styles.title}>Избранное</p>
						<p className={styles.description}>
							При изменении статуса обновлений в избранном
						</p>
					</div>

					<ToggleButton />
				</div>

				<div className={styles.separator}></div>

				<div className={styles.navLink}>
					<div className={styles.textBlock}>
						<p className={styles.title}>Объявление о подписках</p>
						<p className={styles.description}>
							При публикации новых товаров в моих подписках
						</p>
					</div>
					<ToggleButton />
				</div>

				<div className={styles.separator}></div>

				<div className={styles.navLink}>
					<div className={styles.textBlock}>
						<p className={styles.title}>Интерес покупателей</p>
						<p className={styles.description}>
							При добавлении моих товаров в избранное другими
							пользователями
						</p>
					</div>
					<ToggleButton />
				</div>
				<div className={styles.separator}></div>

				<div className={classNames(styles.last, styles.navLink)}>
					<div className={styles.textBlock}>
						<p className={styles.title}>Сообщения</p>
						<p className={styles.description}>
							При получении новых сообщений
						</p>
					</div>
					<ToggleButton />
				</div>
			</div>
			<button className={styles.resetButton}>Сбросить настройки</button>
		</>
	);
};

export default AccountMessagesMobile;
