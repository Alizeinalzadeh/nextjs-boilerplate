import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { SEO_CONFIG } from '@utils/config';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<DefaultSeo {...SEO_CONFIG} />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
