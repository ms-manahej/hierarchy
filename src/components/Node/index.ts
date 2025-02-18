import { RawNodeDatum } from "react-d3-tree";

export interface INodeProps extends RawNodeDatum {
	attributes?: any;
	children?: INodeProps[];
}

export interface INodeClickProps {
	node: INodeProps;
	event: React.MouseEvent<SVGGElement, MouseEvent>;
}

export type nodeClickHandler = (props: INodeClickProps) => void;
