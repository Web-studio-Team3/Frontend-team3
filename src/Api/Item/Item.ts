import { notification } from "antd";
import axios from "axios";
import { iApi } from "./types";

const prefix = "http://localhost:8000/api/";

const ItemApi = {
	async getAllItems() {
		const url = `http://localhost:8000/api/items`;
		return await axios.get(url);
	},
	async createNewItem(data: iApi.CreateNewItem) {
		const url = `${prefix}items`;
		const formData = new FormData();
		formData.set("category_id", data.category_id);
		formData.set("address", data.address);
		formData.set("condition", data.condition);
		formData.set("cost", data.cost);
		formData.set("description", data.description);
		formData.set("item_status", data.item_status);
		formData.set("picture", data.picture);
		formData.set("title", data.title);

		return await axios.post(url, formData);
	},
	async getItemProtoID(data: iApi.getItemPhoto) {
		const url = `http://localhost:8000/api/picture_item_relations/item/${data.id}`;
		return await axios.get(url);
	},
};

export default ItemApi;
