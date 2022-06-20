import dynamic from 'next/dynamic';
import { ITemplate } from './ITemplate';
import TemplateStyle from './Template.module.scss';
// const component = dynamic(() => import('@/components/component'));

const Template: React.FC<ITemplate> = () => {
	return <div className={TemplateStyle.container}></div>;
};

export default Template;
