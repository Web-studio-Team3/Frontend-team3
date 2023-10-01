const routes = {
	PROFILE: "/account/me",
	MESSAGES: "/account/me/messages",
	SINGLE_MESSAGE: "messages/:id",
	FAVORITES: "/account/me/favorites",
	REVIEWS: "/account/me/reviews",
	MY_ADS: "/account/me/my-ads",
	SINGLE_ADVERT: "/advert/:id",
	//todo change after adding other user accounts
	OTHER_USER_ACCOUNT: "/account/id",
	OTHER_USER_REVIEWS: "/account/id/reviews",
	LOGIN: "/login",
	REGISTRATION: "/registration",
	CREATE_NEW_ITEM: "/create-new-item-page",
};

export default routes;
