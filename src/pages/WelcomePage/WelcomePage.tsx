import { FC, useState } from "react";
import { useEffect } from "react";
import { LogoIcon } from "@assets/icons/Icons";

import { Navigate } from "react-router-dom";
import styles from "./WelcomePage.module.scss";

export const WelcomePage = () => {
	const [redirect, updateRedirect] = useState(false);
	useEffect(() => {
		setTimeout(() => updateRedirect(true), 2000);
	}, []);
	return (
		<main className={styles.page}>
			<div className={styles.body}>
				<LogoIcon />
				<p className={styles.WelcomeText}>
					Добро пожаловать на страницу барахолки Московского Политеха
				</p>
				<span className={styles.line}></span>
			</div>
			{redirect ? <Navigate to="/market" /> : <></>}
		</main>
	);
};
