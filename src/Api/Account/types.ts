export declare namespace iApi {
	type Registration = {
		email: string;
		raw_password: string;
		full_name: string;
		date_of_birth: string;
		picture: Blob;
	};
	type Login = {
		email: string;
		raw_password: string;
	};
	type oLogin = {
		token: string;
		user_id: string;
	};
	type GetUser = {
		id: string;
		token: string;
	};
}
