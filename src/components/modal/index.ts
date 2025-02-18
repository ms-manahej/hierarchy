import { INodeAttributes, INodeProps } from "../Node";

export interface IModalInfo {
	isOpen: boolean;
	onClose?: () => void;
	node: INodeProps;
}

export enum displayTypes {
	text = "text",
	list = "list",
	none = "none",
}

export const GetDisplayType: Record<keyof INodeAttributes, displayTypes> = {
	size: displayTypes.none,
	disableModal: displayTypes.none,
	department: displayTypes.none,
	directLead: displayTypes.text,
	role: displayTypes.text,
	qualifications: displayTypes.list,
};
