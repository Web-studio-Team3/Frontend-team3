import { FC, useEffect, useState } from "react";

import styles from "./Footer.module.scss";

import { EditIcon, PlusIcon, TgIcon, VKIcon } from "@assets/icons/Icons";
import cc from "classnames";

const Footer: FC = () => {
	return (
		<footer className="container">
			<div className={styles.wrapper}>
				<div className={styles.flexbox}>
					<p className={styles.flexboxText1}>
						Есть отзывы и предложения?
					</p>
				</div>

				<div className={styles.flexbox}>
					<a
						href={"https://t.me/mospolymarket"}
						className={styles.box}
					>
						{" "}
						<TgIcon />
					</a>

					<a
						href={"https://t.me/mospolymarket"}
						className={styles.box}
					>
						{" "}
						<VKIcon />
					</a>
					<div className={styles.box}>
						<p className={styles.flexboxText2}>
							Свяжитесь с нами в телеграмме или вконтакте
						</p>
					</div>
				</div>
				<div className={styles.flexbox}>
					<a
						href={"https://t.me/mospolymarket"}
						className={styles.box}
					>
						{" "}
						<EditIcon />
					</a>
					<div className={styles.box}>
						<p className={styles.flexboxText3}>
							Пройдите опрос из 5 пунктов для повышения качества
							работы ресурса
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
