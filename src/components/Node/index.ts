export interface INodeAttributes {
	size?: number;
	disableModal?: boolean;
	department?: string;
	directLead?: string;
	role?: string;
	qualifications?: string[];
}

export interface INodeProps {
	name: string;
	attributes: INodeAttributes;
	children?: INodeProps[];
}

export interface INodeClickProps {
	node: INodeProps;
	event: React.MouseEvent<SVGGElement, MouseEvent>;
}

export type nodeClickHandler = (props: INodeClickProps) => void;
