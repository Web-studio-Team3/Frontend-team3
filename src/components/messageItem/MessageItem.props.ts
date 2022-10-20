export interface MessageItemProps {
	id: string | number;
	name: string;
	location?: string;
	adName: string;
	price: number;
	message: string;
	isRead: boolean;
}
