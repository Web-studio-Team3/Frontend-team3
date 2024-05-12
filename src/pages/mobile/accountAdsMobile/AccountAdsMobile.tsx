import { FC, useState } from "react";
import styles from "./AccountAdsMobile.module.scss";
import { marketItemsMock } from "../../../mocks/marketItemsMock";
import { ShopItem, ShopItemSize } from "@components/ShopItem";
import ShopItemListMobile from "@components/mobile/ShopItemListMobile";
import ShopItemList from "@components/ShopItemList";

export interface IAccountAds {
	type: "favorite" | "my";
	title: string;
	subtitle?: string;
}

const AccountAdsMobile: FC<IAccountAds> = ({ type, title, subtitle }) => {
	const [filteredItems, setFilteredItems] = useState(marketItemsMock);
	const [itemsShort, setItemsShort] = useState(ShopItemSize.short);
	return (
		<div className={styles.content}>
			<ShopItemListMobile
				itemList={filteredItems}
				itemsShort={itemsShort}
			/>
		</div>
	);
};

export default AccountAdsMobile;
