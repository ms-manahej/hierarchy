import { JSX } from "react";
import { CustomNodeElementProps } from "react-d3-tree";
import { nodeClickHandler } from ".";

export default function renderCustomNode(
	props: CustomNodeElementProps,
	handleClick: nodeClickHandler
): JSX.Element {
	const { name, attributes, children } = props.nodeDatum;

	const size = attributes?.size
		? Number(attributes?.size)
		: Number(name.length);
	const width = 12 * size;
	const height = width / 3.5;

	return (
		<g
			onClick={(e) =>
				attributes
					? handleClick({
							node: {
								...props.nodeDatum,
								attributes: attributes as any,
								children: children as any,
							},
							event: e,
					  })
					: {}
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
