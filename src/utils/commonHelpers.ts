import { i } from "../Store/Items/ItemsRedux";
import { EMarketFilter } from "@pages/mobile/market/types";
import md5 from "md5";

export const sortItems = (items: i.item[], currentFilter: EMarketFilter) => {
	if (currentFilter === EMarketFilter.PRICE_MAX) {
		return items.sort((a, b) => Number(b.cost) - Number(a.cost));
	} else if (currentFilter === EMarketFilter.PRICE_MIN) {
		return items.sort((a, b) => Number(a.cost) - Number(b.cost));
	}

	return items;
};

export const hashPassword = (password: string) => {
	const salt = process.env.REACT_APP_PASS_SALT;
	return md5(salt + password);
};
