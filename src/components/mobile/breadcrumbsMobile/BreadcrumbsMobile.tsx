// BurgerMenuMobile.tsx

import React, { FC, useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { desktopRoutes, mobileRoutes } from "../../../constants/routes";
import styles from "./BreadcrumbsMobile.module.scss";
import {
	BackArrowIcon,
	BackArrowIconMobile,
	MenuIcon,
	SearchIcon,
} from "@assets/icons/Icons";
import BurgerMenu from "@components/mobile/burgerMenu";
import * as path from "path";

interface IBreadCrumbsProps {
	additionalBreadcrumbs?: Record<string, string>;
}

const BreadcrumbsMobile: FC<IBreadCrumbsProps> = ({
	additionalBreadcrumbs,
}) => {
	const location = useLocation();
	const [breadcrumbNameMap, setBreadcrumbNameMap] = useState<
		Record<string, string>
	>({
		[mobileRoutes.PROFILE]: "Профиль",
		[mobileRoutes.MESSAGES]: "Сообщения",
		[mobileRoutes.FAVORITES]: "Избранное",
		[mobileRoutes.REVIEWS]: "Отзывы",
		[mobileRoutes.MY_ADS]: "Мои объявления",
		[mobileRoutes.SETTINGS]: "Настройки",
		[mobileRoutes.SETTINGS_MESSAGES]: "Управление сообщениями",
		[mobileRoutes.SETTINGS_PHONE]: "Мой номер",
		[mobileRoutes.SETTINGS_ADDRESS]: "Мой адрес",
		[mobileRoutes.SETTINGS_NOTIFICATIONS]: "Уведомления",
		[mobileRoutes.SETTINGS_CALLS]: "Управление звонками",
		[mobileRoutes.SETTINGS_EMAIL]: "Мой email",
	});

	const pathSnippets = location.pathname.split("/").filter((i) => i);

	useEffect(() => {
		if (additionalBreadcrumbs) {
			setBreadcrumbNameMap((prevState) => {
				return {
					...prevState,
					...additionalBreadcrumbs,
				};
			});
		}
	}, [additionalBreadcrumbs]);

	const getExtraBreadCrumbs = (): BreadcrumbItemType[] => {
		const extraBreadcrumbItems: BreadcrumbItemType[] = [];
		pathSnippets.forEach((_, index) => {
			const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
			if (breadcrumbNameMap[url]) {
				if (
					index === pathSnippets.length - 1 ||
					(index === pathSnippets.length - 2 &&
						!isNaN(+pathSnippets[index + 1]))
				) {
					extraBreadcrumbItems.push({
						key: url,
						title: <span>{breadcrumbNameMap[url]}</span>,
						className: cn(styles.link, styles.linkActive),
					});
				} else {
					extraBreadcrumbItems.push({
						key: url,
						title: (
							<NavLink
								className={({ isActive }) =>
									cn(styles.link, {
										[styles.linkActive]: isActive,
									})
								}
								to={url}
								end
							>
								{breadcrumbNameMap[url]}
							</NavLink>
						),
						className: styles.link,
					});
				}
			}
		});

		return extraBreadcrumbItems;
	};

	const breadcrumbItems: BreadcrumbItemType[] = [];

	const lastPathSnippet = pathSnippets[pathSnippets.length - 1];

	const lastPath = pathSnippets.slice(0, -1).join("/");

	if (lastPathSnippet) {
		breadcrumbItems.push({
			key: `/last-page`,
			title: (
				<NavLink className={styles.link} to={`/${lastPath}`}>
					<BackArrowIconMobile />
					{breadcrumbNameMap[`/${lastPathSnippet}`]}
				</NavLink>
			),
			className: styles.link,
		} as BreadcrumbItemType);
	}

	// Add the current path breadcrumb
	breadcrumbItems.push({
		key: "/current-page",
		title: (
			<span className={styles.linkActive}>
				{breadcrumbNameMap[location.pathname]}
			</span>
		),
		className: cn(styles.link, styles.linkActive),
	} as BreadcrumbItemType);

	return (
		<div>
			<nav className={styles.wrapper}>
				<Breadcrumb items={breadcrumbItems} separator="" />
				<div>
					{location.pathname.endsWith("me/messages") ||
					location.pathname.endsWith("settings") ? (
						<div className={styles.menu}>
							<SearchIcon></SearchIcon>
							<BurgerMenu></BurgerMenu>
						</div>
					) : (
						""
					)}
					{location.pathname.endsWith("me") ||
					location.pathname.endsWith("settings/messages") ? (
						<div className={styles.menu}>
							<BurgerMenu></BurgerMenu>
						</div>
					) : (
						""
					)}
				</div>
			</nav>
		</div>
	);
};

export default BreadcrumbsMobile;
