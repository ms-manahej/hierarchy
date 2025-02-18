import React from "react";
import { IModalInfo } from ".";
import "./modal.css";

const Modal: React.FC<IModalInfo> = ({ isOpen, onClose, node }) => {
	if (!isOpen) return null;

	const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

	return (
		<div className="modal-backdrop" onClick={onClose}>
			<div className="modal-content" onClick={stopPropagation}>
				<div className="modal-header">
					<h2>{node.name}</h2>
				</div>

				<div className="modal-body">
					<section className="modal-section">
						<h3>القائد المباشر</h3>
						<p>{node.attributes?.directLead}</p>
					</section>
					<hr />
					<section className="modal-section">
						<h3>شروطه</h3>
						<ul className="modal-list">
							{node.attributes?.qualifications.map((q: string, i: number) => (
								<li key={i}>{q}</li>
							))}
						</ul>
					</section>
					<hr />
					<section className="modal-section">
						<h3>دوره</h3>
						<p>{node.attributes?.role}</p>
					</section>
				</div>

				{/* Footer with a Close Button */}
				<div className="modal-footer">
					<button type="button" className="close-btn" onClick={onClose}>
						إغلاق
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
