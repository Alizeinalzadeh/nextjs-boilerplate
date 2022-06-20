import dynamic from 'next/dynamic';
import { IHeader } from './IHeader';
import HeaderStyle from './Header.module.scss';
// const component = dynamic(() => import('@/components/component'));

const Header: React.FC<IHeader> = () => {
	return <div className={HeaderStyle.container}></div>;
};

export default Header;
