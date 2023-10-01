import { FC, useEffect, useState } from "react";
import routes from "../../constants/routes";
import { Breadcrumb } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";

export interface IBreadCrumbsProps {
	additionalBreadcrumbs?: Record<string, string>;
}

const Breadcrumbs: FC<IBreadCrumbsProps> = ({ additionalBreadcrumbs }) => {
	const location = useLocation();
	const [breadcrumbNameMap, setBreadcrumbNameMap] = useState<
		Record<string, string>
	>({
		[routes.PROFILE]: "Профиль",
		[routes.MESSAGES]: "Сообщения",
		[routes.FAVORITES]: "Избранное",
		[routes.REVIEWS]: "Отзывы",
		[routes.MY_ADS]: "Мои объявления",
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

	const breadcrumbItems: BreadcrumbItemType[] = [
		{
			key: "/",
			title: (
				<NavLink
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.linkActive]: isActive,
						})
					}
					to={"/"}
					end
				>
					Главная
				</NavLink>
			),
			className: styles.link,
		} as BreadcrumbItemType,
	].concat(getExtraBreadCrumbs());

	return (
		<nav className={styles.wrapper}>
			<Breadcrumb items={breadcrumbItems} separator={">>"} />
		</nav>
	);
};

export default Breadcrumbs;
