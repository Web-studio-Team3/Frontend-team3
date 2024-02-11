import styles from "./MobileMarketItemsList.module.scss";
import { FC } from "react";
import { ShopItem, ShopItemSize } from "@components/ShopItem";
import { i } from "../../Store/Items/ItemsRedux";

interface IMobileMarketItemsListProps {
	items: i.item[];
}

const MobileMarketItemsList: FC<IMobileMarketItemsListProps> = ({ items }) => {
	return (
		<ul className={styles.items_list}>
			{items.length === 0 ? (
				<p className={styles.text}>
					Не найдено ни одного объявления...
				</p>
			) : (
				<>
					{items.map((item) => (
						<li className={styles.shop_item}>
							<ShopItem
								id={item.id}
								key={item.id}
								//@ts-ignore
								image={item.image}
								//@ts-ignore
								isFavorite={item.isFavorite}
								title={item.title}
								price={item.cost}
								information={item.description}
								size={ShopItemSize.shortXs}
							/>
						</li>
					))}
				</>
			)}
		</ul>
	);
};

export default MobileMarketItemsList;
