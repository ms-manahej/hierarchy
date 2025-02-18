export interface INodeProps {
	name: string;
	attributes?: {
		department: string;
		directLead: string;
		role: string;
		qualifications: string[];
	};
	children?: INodeProps[];
}

export interface INodeClickProps {
	node: INodeProps;
	event: React.MouseEvent<SVGGElement, MouseEvent>;
}

export type nodeClickHandler = (props: INodeClickProps) => void;
