import React from "react";
import { IModalInfo } from ".";
import "./modal.css";

const Modal: React.FC<IModalInfo> = ({ isOpen, onClose, node }) => {
	if (!isOpen) return null;

	const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

	return (
		<div className="modal-backdrop" onClick={onClose}>
			<div className="modal-content" onClick={stopPropagation}>
				{/* Header */}
				<div className="modal-header">
					<h2>{node.name}</h2>
				</div>

				{/* Body (you can create multiple <section> tags to mirror your layout) */}
				<div className="modal-body">
					<section className="modal-section">
						{/* Example: Title / role info */}
						<h3>Role Overview</h3>
						<p>Detailed description of the role, main responsibilities, etc.</p>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					<section className="modal-section">
						<h3>Qualifications</h3>
						<ul>
							<li>List or bullet points for qualifications</li>
							<li>Another item here</li>
						</ul>
					</section>

					{/* More sections as needed... */}
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
