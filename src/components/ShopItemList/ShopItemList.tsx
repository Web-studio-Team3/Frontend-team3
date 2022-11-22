import { FC } from "react";
import { ShopItem, ShopItemProps, ShopItemSize } from "@components/ShopItem";
import styles from "./ShopItem.module.scss";

interface ShopItemListProps {
	itemList: ShopItemProps[];
	itemsShort: ShopItemSize;
}

const ShopItemList: FC<ShopItemListProps> = ({ itemList, itemsShort }) => {
	return (
		<ul className={styles.list}>
			{itemList.map((item) => (
				<ShopItem
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

export default ShopItemList;
