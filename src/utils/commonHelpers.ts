import { i } from "../Store/Items/ItemsRedux";
import { EFilters } from "@pages/mobile/market/types";

export const sortItems = (items: i.item[], currentFilter: EFilters) => {
	if (currentFilter === EFilters.PRICE_MAX) {
		return items.sort((a, b) => Number(b.cost) - Number(a.cost));
	} else if (currentFilter === EFilters.PRICE_MIN) {
		return items.sort((a, b) => Number(a.cost) - Number(b.cost));
	}

	return items;
};
