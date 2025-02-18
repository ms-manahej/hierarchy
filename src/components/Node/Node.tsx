import { JSX } from "react";
import { CustomNodeElementProps } from "react-d3-tree";
import { INodeProps, nodeClickHandler } from ".";

export default function renderCustomNode(
	props: CustomNodeElementProps,
	handleClick: nodeClickHandler
): JSX.Element {
	const { name, attributes } = props.nodeDatum;

	const width = 11.5 * Number(name.length);
	const height = width / 3.5;

	return (
		<g
			onClick={(e) =>
				handleClick({
					node: {
						...props.nodeDatum,
						attributes: attributes,
					},
					event: e,
				})
			}
		>
			<rect
				x={-width / 2}
				y={-height / 2}
				rx={8}
				ry={8}
				width={width}
				height={height}
			/>
			<text
				className="rd3t-label"
				textAnchor="middle"
				alignmentBaseline="middle"
				fontSize={14}
			>
				{name}
			</text>
		</g>
	);
}
