import { i } from "../Store/Items/ItemsRedux";
import { EMarketFilter } from "@pages/mobile/market/types";

export const sortItems = (items: i.item[], currentFilter: EMarketFilter) => {
	if (currentFilter === EMarketFilter.PRICE_MAX) {
		return items.sort((a, b) => Number(b.cost) - Number(a.cost));
	} else if (currentFilter === EMarketFilter.PRICE_MIN) {
		return items.sort((a, b) => Number(a.cost) - Number(b.cost));
	}

	return items;
};
