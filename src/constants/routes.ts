export const desktopRoutes = {
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

export const mobileRoutes = {
	PROFILE: "/account/me",
	MESSAGES: "/account/me/messages",
	SINGLE_MESSAGE: "/account/me/messages/:id",
	FAVORITES: "/account/me/favorites",
	REVIEWS: "/account/me/reviews",
	MY_ADS: "/my-ads",
	SINGLE_ADVERT: "/advert/:id",
	SETTINGS: "/account/me/settings",
	SETTINGS_ADDRESS: "/account/me/settings/address",
	SETTINGS_EMAIL: "/account/me/settings/email",
	SETTINGS_PHONE: "/account/me/settings/phone",
	SETTINGS_NOTIFICATIONS: "/account/me/settings/notifications",
	SETTINGS_MESSAGES: "/account/me/settings/messages",
	SETTINGS_DELIVERY: "/account/me/settings/delivery",
	SETTINGS_CALLS: "/account/me/settings/calls",
	SETTINGS_BLACKLIST: "/account/me/settings/blacklist",
	SETTINGS_POLICY: "/account/me/settings/policy",
	//todo change after adding other user accounts
	OTHER_USER_ACCOUNT: "/account/id",
	OTHER_USER_REVIEWS: "/account/id/reviews",
	LOGIN: "/login",
	REGISTRATION: "/registration",
	CREATE_NEW_ITEM: "/create-new-item-page",
};