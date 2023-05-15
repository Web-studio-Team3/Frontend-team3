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
	type GetUser = {
		id: string;
	};
}
