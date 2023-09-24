import Request from "@api/Request";
import { iApi } from "./types";

const ItemApi = {
	async getAllItems() {
		return await Request.get("items");
	},
	async createNewItem(data: iApi.CreateNewItem) {
		const url = `items`;
		const formData = new FormData();
		formData.set("category_id", data.category_id);
		formData.set("address", data.address);
		formData.set("condition", data.condition);
		formData.set("cost", data.cost);
		formData.set("description", data.description);
		formData.set("item_status", data.item_status);
		formData.set("picture", data.picture);
		formData.set("title", data.title);

		return await Request.post(url, formData);
	},
	async getItemProtoID(data: iApi.getItemPhoto) {
		return await Request.get(`picture_item_relations/item/${data.id}`);
	},
};

export default ItemApi;
