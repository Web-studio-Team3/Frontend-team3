import { FC } from "react";
import { ShopItemProps } from ".";
import styles from "./ShopItem.module.scss";

export const ShopItem: FC<ShopItemProps> = (props) => {
	return <div className={styles.wrapper} {...props}></div>;
};
