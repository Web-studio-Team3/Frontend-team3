import { useRef, useEffect, FC } from "react";
import {
	CalendarIcon,
	StarIcon,
	HeartIcon,
	ChatIcon,
	SettingIcon,
	HelpIcon,
} from "@assets/icons/Icons";
import { IBreadCrumbsLocationState } from "@components/breadcrumbs/Breadcrumbs";
import classNames from "classnames";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import styles from "./ProfileMenu.module.scss";

const ProfileMenu: FC = () => {
	const refsList = useRef<Array<HTMLUListElement | null>>([]);
	const path = useLocation().pathname;
	const splittedPath = path.split("/");
	const currentLocation = isNaN(Number(splittedPath[splittedPath.length - 1]))
		? splittedPath[splittedPath.length - 1]
		: splittedPath[splittedPath.length - 2];

	const navigate = useNavigate();
	const state = useLocation().state as IBreadCrumbsLocationState[];

	const initialBreadCrumbs = [
		{
			id: v4(),
			path: "/",
			title: "Главная",
		},
		{
			id: v4(),
			path: "/account/me",
			title: "Профиль",
		},
	];

	useEffect(() => {
		let state = initialBreadCrumbs;
		console.log(currentLocation);

		switch (currentLocation) {
			case "reviews":
				state = [...state, { id: v4(), path, title: "Отзывы" }];
				break;
			case "favorites":
				state = [...state, { id: v4(), path, title: "Избранное" }];
				break;
			case "my-ads":
				state = [...state, { id: v4(), path, title: "Мои объявления" }];
				break;
			case "messages":
				state = [...state, { id: v4(), path, title: "Сообщения" }];
				break;
			case "help":
				state = [...state, { id: v4(), path, title: "Помощь" }];
				break;
			default:
				break;
		}
		if (state) navigate(path, { state });
	}, [path, state === null]);

	useEffect(() => {
		focusOnList();
	}, [currentLocation]);

	const focusOnList = (): void => {
		refsList.current.forEach((item) => {
			if (item) {
				item.classList.remove(styles.listActive);
			}
		});
		if (
			currentLocation === "my-ads" ||
			currentLocation === "reviews" ||
			currentLocation === "favorites" ||
			currentLocation === "messages"
		) {
			refsList.current[0]?.classList.add(styles.listActive);
		} else {
			refsList.current[1]?.classList.add(styles.listActive);
		}
	};

	return (
		<div className={styles.section}>
			<ul
				className={styles.list}
				ref={(el) => (refsList.current[0] = el)}
			>
				<li className={styles.item}>
					<NavLink
						to="./my-ads"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<CalendarIcon />
						</div>
						<p className={styles.text}>Мои объявления</p>
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to="./reviews"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<StarIcon />
						</div>
						<p className={styles.text}>Отзывы</p>
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to="./favorites"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<HeartIcon />
						</div>
						<p className={styles.text}>Избранное</p>
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to="./messages"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<ChatIcon />
						</div>
						<p className={styles.text}>Сообщения</p>
					</NavLink>
				</li>
			</ul>
			<ul
				className={classNames(styles.list, styles.listActive)}
				ref={(el) => (refsList.current[1] = el)}
			>
				<li className={styles.item}>
					<NavLink
						end
						to="../account/me"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<SettingIcon />
						</div>
						<p className={styles.text}>Настройки</p>
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to="./help"
						className={({ isActive }) =>
							isActive
								? classNames(styles.link, styles.linkActive)
								: styles.link
						}
					>
						<div className={styles.icon}>
							<HelpIcon />
						</div>
						<p className={styles.text}>Помощь</p>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default ProfileMenu;
