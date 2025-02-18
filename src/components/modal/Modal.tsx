import React from "react";
import { displayTypes, GetDisplayType, IModalInfo } from ".";
import "./modal.css";
import { sectionTitles } from "./content";
import { INodeAttributes } from "../Node";

const Modal: React.FC<IModalInfo> = ({ isOpen, onClose, node }) => {
	if (!isOpen) return null;

	const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
	const totalIndices = Object.keys(node.attributes).length - 1;

	return node.attributes && !node.attributes.disableModal ? (
		<div className="modal-backdrop" onClick={onClose}>
			<div className="modal-content" onClick={stopPropagation}>
				<div className="modal-header">
					<h2>{node.name}</h2>
				</div>

				<div className="modal-body">
					{Object.keys(node.attributes).map((key, index: number) => {
						const attKey = key as unknown as keyof INodeAttributes;
						const displayType = GetDisplayType[attKey];

						switch (displayType) {
							case displayTypes.text:
								return node.attributes?.[attKey] ? (
									<>
										<section className="modal-section">
											<h3>{sectionTitles[attKey]}</h3>
											<p>{node.attributes?.[attKey]}</p>
										</section>
										{index !== totalIndices && <hr />}
									</>
								) : (
									<></>
								);
							case displayTypes.list:
								return node.attributes?.[attKey] ? (
									<>
										<section className="modal-section">
											<h3>{sectionTitles[attKey]}</h3>
											<ul className="modal-list">
												{(node.attributes[attKey] as Array<string>).map(
													(q: string, i: number) => (
														<li key={i}>{q}</li>
													)
												)}
											</ul>
										</section>
										{index !== totalIndices && <hr />}
									</>
								) : (
									<></>
								);
							default:
								return <></>;
						}
					})}
				</div>

				<div className="modal-footer">
					<button type="button" className="close-btn" onClick={onClose}>
						إغلاق
					</button>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
};

export default Modal;
