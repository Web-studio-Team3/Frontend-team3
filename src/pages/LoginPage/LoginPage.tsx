import { useState } from "react";
import { LogoIcon } from "@assets/icons/Icons";
import { Navigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
	const [loginError, setLoginError] = useState(false);
	const [loginSucces, SetLoginSucces] = useState(false);
	const [Login, setLogin] = useState("");
	const [Password, setPassword] = useState("");
	return (
		<div className={styles.page}>
			<main className={styles.body}>
				<LogoIcon />
				<h1 className={styles.title}>Войдите в аккаунт</h1>
				<input
					type="text"
					className={styles.input}
					name="login"
					onChange={(e) => {
						setLogin(e.target.value);
					}}
				/>
				<input
					type="password"
					className={styles.input}
					name="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button
					className={styles.loginButton}
					onClick={() => {
						SetLoginSucces(true);
						localStorage.setItem("Login", "true");
					}}
				>
					Вход
				</button>
			</main>
			{loginSucces ? <Navigate to="/" /> : <></>}
		</div>
	);
};
