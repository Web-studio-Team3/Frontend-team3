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
		jwt_token: string;
		user_id: string;
	};
	type GetUser = {
		id: string;
		token: string;
	};
	type igetUser = {
		user_id: string;
		jwt_token: string;
	};
}
