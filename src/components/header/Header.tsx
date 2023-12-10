import { FC, useEffect, useState } from "react";
import {
	ProfileIcon,
	LogoIcon,
	HeartIcon,
	CategoryIcon,
} from "@assets/icons/Icons";
import classNames from "classnames";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "src/Store/store";
import { v4 } from "uuid";
import Button from "@components/Button";
import Input from "@components/Input";

const Header: FC = () => {
	const user = useSelector((state: RootState) => state.User.user);
	const [searchValue, setSearchValue] = useState<string>("");
	const navigate = useNavigate();
	const path = useLocation().pathname;
	let state = useLocation().state;
	const splittedPath = path.split("/");
	const currentLocation = isNaN(Number(splittedPath[splittedPath.length - 1]))
		? splittedPath[splittedPath.length - 1]
		: splittedPath[splittedPath.length - 2];

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
		switch (currentLocation) {
			case "reviews":
				state = [
					...initialBreadCrumbs,
					{ id: v4(), path, title: "Отзывы" },
				];
				break;
			case "favorites":
				state = [
					...initialBreadCrumbs,
					{ id: v4(), path, title: "Избранное" },
				];
				break;
			case "my-ads":
				state = [
					...initialBreadCrumbs,
					{ id: v4(), path, title: "Мои объявления" },
				];
				break;
			case "messages":
				state = [
					...initialBreadCrumbs,
					{ id: v4(), path, title: "Сообщения" },
				];
				break;
			case "help":
				state = [
					...initialBreadCrumbs,
					{ id: v4(), path, title: "Помощь" },
				];
				break;
			case "advert":
				break;
			default:
				state = initialBreadCrumbs;
				break;
		}
		if (state) navigate(path, { state });
	}, [path, state === null]);

	const handleInputChange = (value: string) => {
		setSearchValue(value);
	};

	const onSearch = (value: string) => {
		console.log(value);
	};

	return (
		<header className="container">
			<div className={styles.section}>
				<Link to="/" className={styles.logo}>
					<LogoIcon />
				</Link>
				<form method="POST" className={styles.form}>
					<button
						type="button"
						className={classNames(
							styles.button,
							styles.buttonCategory
						)}
					>
						<CategoryIcon />
						<p className={styles.buttonText}>Категории</p>
					</button>
					<div className={styles.search}>
						<Input
							type="search"
							fluid
							value={searchValue}
							placeholder="Поиск по объялениям"
							onChange={handleInputChange}
							onSubmit={onSearch}
						/>
					</div>
				</form>
				<ul className={styles.menu}>
					<>
						<li className={styles.item}>
							<Button
								isLink
								disabled={!user}
								to="/create-new-item-page"
							>
								Разместить объявление
							</Button>
						</li>
						<li className={styles.item}>
							<NavLink
								to={user ? "/account/me/favorites" : ""}
								className={({ isActive }) =>
									classNames(styles.linkIcon, {
										[styles.linkIconActive]: isActive,
										[styles.disabled]: !user,
									})
								}
							>
								<HeartIcon />
								<p className={styles.linkText}>Избранное</p>
							</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink
								to={user ? "/account/me" : "/login"}
								className={({ isActive }) =>
									isActive
										? classNames(
												styles.linkIcon,
												styles.linkIconActive
										  )
										: styles.linkIcon
								}
							>
								<ProfileIcon />
								<p className={styles.linkText}>
									{user ? "Профиль" : "Войти"}
								</p>
							</NavLink>
						</li>
					</>
				</ul>
			</div>
		</header>
	);
};

export default Header;
