export const environment = {
	isProduction: process.env.NEXT_PUBLIC_NODE_ENV == 'production' ? true : false,
	env: process.env.NEXT_PUBLIC_NODE_ENV,
	APP_DEBUG: process.env.NEXT_PUBLIC_APP_DEBUG,
	api: {
		www: {
			baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
			baseEndpoint: process.env.NEXT_PUBLIC_BASE_ENDPOINT,
		},
	},
	file: {
		serverFileHost: process.env.NEXT_PUBLIC_SERVER_FILE_HOST,
		serverFileCDNHost: process.env.NEXT_PUBLIC_SERVER_CDN_HOST,
	},
};
