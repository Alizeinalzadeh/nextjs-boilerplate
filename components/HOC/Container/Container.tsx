import { IContainer } from './IContainer';
import ContainerStyle from './Container.module.scss';
const Container: React.FC<IContainer> = (props) => {
	return (
		<div className={`${ContainerStyle.container} ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Container;
