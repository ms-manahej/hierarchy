import { useState } from "react";
import TreeDiagram from "./components/TreeDiagram";
import { IModalInfo } from "./components/modal";
import Modal from "./components/modal/Modal";
import { nodeClickHandler } from "./components/Node";

function App() {
	const [modal, setModal] = useState<IModalInfo>({
		isOpen: false,
		node: {
			name: "",
			attributes: {},
		},
	});

	const handleNodeClick: nodeClickHandler = (props) => {
		const { node } = props;
		setModal({
			isOpen: true,
			node: node,
		});
	};

	return (
		<>
			<TreeDiagram handleNodeClick={handleNodeClick} />
			<Modal
				isOpen={modal.isOpen}
				onClose={() =>
					setModal({ isOpen: false, node: { name: "", attributes: {} } })
				}
				node={modal.node}
			/>
		</>
	);
}

export default App;
