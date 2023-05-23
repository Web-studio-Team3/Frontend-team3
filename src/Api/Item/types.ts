export declare namespace iApi {
	type CreateNewItem = {
		category_id: string;
		title: string;
		description: string;
		condition: string;
		address: string;
		cost: string;
		item_status: string;
		picture: Blob;
	};
	type getItemPhoto = {
		id: string;
	};
}
