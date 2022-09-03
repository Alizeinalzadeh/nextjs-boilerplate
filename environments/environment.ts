export const environment = {
	isProduction: process.env.NODE_ENV == 'production' ? true : false,
	env: process.env.NODE_ENV,
	APP_DEBUG: process.env.APP_DEBUG,
	api: {
		www: {
			baseUrl: process.env.BASE_URL,
			baseEndpoint: process.env.BASE_ENDPOINT,
		},
	},
	file: {
		serverFileHost: process.env.SERVER_FILE_HOST,
		serverFileCDNHost: process.env.SERVER_CDN_HOST,
	},
};
