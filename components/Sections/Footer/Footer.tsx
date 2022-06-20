import dynamic from 'next/dynamic';
import { IFooter } from './IFooter';
import FooterStyle from './Footer.module.scss';
// const component = dynamic(() => import('@/components/component'));

const Footer: React.FC<IFooter> = () => {
	return <div className={FooterStyle.container}></div>;
};

export default Footer;
