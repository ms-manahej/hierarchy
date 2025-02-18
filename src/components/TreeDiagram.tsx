import { useEffect, useRef, useState } from "react";
import Tree, { CustomNodeElementProps } from "react-d3-tree";
import { mainData } from "../assets/data";
import "../styles/tree.css";
import renderCustomNode from "./Node/Node";
import { nodeClickHandler } from "./Node";

const TreeDiagram: React.FC<{
	handleNodeClick: nodeClickHandler;
}> = ({ handleNodeClick }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		function updateSize() {
			if (containerRef.current) {
				setDimensions({
					width: containerRef.current.offsetWidth,
					height: containerRef.current.offsetHeight,
				});
			}
		}
		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return (
		<div
			ref={containerRef}
			style={{ width: "100vw", height: "100vh", border: "1px solid #ccc" }}
		>
			{dimensions.width > 0 && (
				<Tree
					data={mainData}
					orientation="vertical"
					translate={{
						x: dimensions.width / 2,
						y: dimensions.height / 3,
					}}
					zoomable
					hasInteractiveNodes
					collapsible={false}
					depthFactor={200}
					separation={{ siblings: 2, nonSiblings: 2 }}
					zoom={0.5}
					scaleExtent={{ min: 0.1, max: 2 }}
					renderCustomNodeElement={(props: CustomNodeElementProps) =>
						renderCustomNode(props, handleNodeClick)
					}
					// dimensions={{
					// 	height: dimensions.height,
					// 	width: dimensions.width,
					// }}
				/>
			)}
		</div>
	);
};

export default TreeDiagram;
