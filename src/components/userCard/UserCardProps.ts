export interface userCardProps {
	user: IUser;
	type: "my" | "another";
	reviewsCount: number;
	size?: "s" | "m";
	userRating?: number;
}

interface IUser {
	name: string;
	surname: string;
	photo?: string;
}
