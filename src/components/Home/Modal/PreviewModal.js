import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
	return (
		<Modal show={props.show} onHide={props.onHide} size='ms' centered>
			<Modal.Header closeButton>
				<Modal.Title
					id='contained-modal-title-vcenter'
					style={{
						color: "#eb4d4b",
						fontWeight: "bold",
					}}>
					<span
						style={{
							color: "#2b2f31",
						}}>
						Preview -
					</span>
					{" " + props.musicName}
				</Modal.Title>
			</Modal.Header>
			<div style={{ padding: "8px" }}>
				<Modal.Body
					style={{
						backgroundColor: "black",
						padding: "16px",
						borderRadius: "5px",
					}}>
					<iframe src={props.previewURL} width='100%' height='100%' />
				</Modal.Body>
			</div>
		</Modal>
	);
}

function PreviewModal(props) {
	return (
		<MyVerticallyCenteredModal
			show={props.modalShow}
			onHide={() => props.setModalShow(false)}
			previewURL={props.previewURL}
			musicName={props.musicName}
		/>
	);
}

export default PreviewModal;
