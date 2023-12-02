// BreadcrumbsMobile.tsx

import React, { FC, useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { desktopRoutes } from "../../../constants/routes";
import styles from "./BreadcrumbsMobile.module.scss";
import { BackArrowIcon, BackArrowIconMobile } from "@assets/icons/Icons";

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
		[desktopRoutes.PROFILE]: "Профиль",
		[desktopRoutes.MESSAGES]: "Сообщения",
		[desktopRoutes.FAVORITES]: "Избранное",
		[desktopRoutes.REVIEWS]: "Отзывы",
		[desktopRoutes.MY_ADS]: "Мои объявления",
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

	if (lastPathSnippet) {
		breadcrumbItems.push({
			key: `/last-page`,
			title: (
				<NavLink className={styles.link} to={`/${lastPathSnippet}`}>
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
		<nav className={styles.wrapper}>
			<Breadcrumb items={breadcrumbItems} separator="" />
		</nav>
	);
};

export default BreadcrumbsMobile;
