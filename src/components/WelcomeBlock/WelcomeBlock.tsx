import { FC, useEffect, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./WelcomeBlock.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "src/Store/store";

export const WelcomeBlock = () => {
	const [hidden, setHidden] = useState(true);
	const token = useSelector((state: RootState) => state.Auth.token);
	useEffect(() => {
		if (!token) {
			setHidden(false);
		}
	}, [token]);
	return (
		<div
			className={classNames(styles.wrapper, { [styles.hidden]: hidden })}
		>
			<div className={styles.content}>
				<p>
					<p>
						Добро пожаловать на страницу барахолки Московского
						Политеха.
					</p>
					<p>
						<Link to="/registration">Зарегистрируйтесь</Link> или{" "}
						<Link to="/login">Войдите</Link>, чтобы воспользоваться
						всеми функциями.
					</p>
				</p>
				<button
					className={styles.buttonClose}
					onClick={() => {
						setHidden(true);
					}}
				>
					<svg
						width="25"
						height="25"
						viewBox="0 0 25 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M17.7368 0.416504C21.8318 0.416504 24.5832 3.28992 24.5832 7.565V17.4347C24.5832 21.7098 21.8318 24.5832 17.7355 24.5832H7.26171C3.16667 24.5832 0.416504 21.7098 0.416504 17.4347V7.565C0.416504 3.28992 3.16667 0.416504 7.26171 0.416504H17.7368ZM17.7368 2.229H7.26171C4.20463 2.229 2.229 4.32305 2.229 7.565V17.4347C2.229 20.6766 4.20463 22.7707 7.26171 22.7707H17.7355C20.7938 22.7707 22.7707 20.6766 22.7707 17.4347V7.565C22.7707 4.32305 20.7938 2.229 17.7368 2.229ZM10.2409 8.95048L12.4974 11.2069L14.7528 8.95302C15.1068 8.59898 15.6796 8.59898 16.0336 8.95302C16.3877 9.30706 16.3877 9.87981 16.0336 10.2338L13.7783 12.4878L16.036 14.7469C16.3901 15.1009 16.3901 15.6736 16.036 16.0277C15.8596 16.2053 15.6264 16.2935 15.3956 16.2935C15.1636 16.2935 14.9316 16.2053 14.7552 16.0277L12.4974 13.7686L10.2433 16.0242C10.0669 16.2018 9.83486 16.29 9.60286 16.29C9.37086 16.29 9.13886 16.2018 8.96244 16.0242C8.6084 15.6701 8.6084 15.0974 8.96244 14.7434L11.2166 12.4878L8.96002 10.2313C8.60598 9.87727 8.60598 9.30452 8.96002 8.95048C9.31528 8.59644 9.88803 8.59644 10.2409 8.95048Z"
							fill="white"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
