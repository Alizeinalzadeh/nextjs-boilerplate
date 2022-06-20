import Container from '../Container/Container';
// import Script from 'next/script';
import { environment } from 'environments/environment';
import { ILayout } from './ILayout';
import { NextSeo } from 'next-seo';
import Header from '@/components/Sections/Header/Header';
import Footer from '@/components/Sections/Footer/Footer';

const Layout: React.FC<ILayout> = (props) => {
	return (
		<div className={`${props.className}`}>
			<NextSeo {...props} />
			{environment.PRODUCTION && (
				<>
					{/* Google Tag Manager */}
					{/* <Script src="/" strategy="afterInteractive" id="google-tag-manager" />
					<Script id="google-analytics" strategy="afterInteractive">
						{`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', '/');
                        `}
					</Script> */}
				</>
			)}

			{props.hasHeader && <Header />}
			<Container>{props.children}</Container>
			{props.hasFooter && <Footer />}
		</div>
	);
};

Layout.defaultProps = {
	hasFooter: true,
	hasHeader: true,
};
export default Layout;
