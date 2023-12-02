import { FC } from "react";
import { ShopItem, ShopItemProps, ShopItemSize } from "@components/ShopItem";
import styles from "./ShopItemMobile.module.scss";
import { ShopItemMobile } from "@components/mobile/ShopItemMobile";

interface ShopItemListProps {
	itemList: ShopItemProps[];
	itemsShort: ShopItemSize;
}

const ShopItemListMobile: FC<ShopItemListProps> = ({
	itemList,
	itemsShort,
}) => {
	return (
		<ul className={styles.list}>
			{itemList.map((item) => (
				<ShopItemMobile
					id={item.id}
					image={item.image}
					title={item.title}
					price={item.price}
					information={item.information}
					phoneCall={item.phoneCall}
					size={itemsShort}
				/>
			))}
		</ul>
	);
};

export default ShopItemListMobile;
