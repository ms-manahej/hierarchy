import { INodeProps } from "../Node";

export interface IModalInfo {
	isOpen: boolean;
	onClose?: () => void;
	node: INodeProps;
}
