import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
	return (
		<Modal show={props.show} onHide={props.onHide} size='lg' centered>
			<div
				style={{
					height: "400px",
				}}>
				<Modal.Header closeButton>
					<Modal.Title
						id='contained-modal-title-vcenter'
						style={{
							color: "#eb4d4b",
							fontWeight: "bold",
						}}>
						{props.musicName}
					</Modal.Title>
				</Modal.Header>

				<div
					style={{
						margin: "16px",
						borderRadius: "5px",
						backgroundColor: "black",
					}}>
					<Modal.Body>
						<iframe
							width='90%'
							height='270px'
							src={`https://www.youtube.com/embed/${props.yotubeID}`}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							style={{ margin: "auto", display: "block" }}
						/>
					</Modal.Body>
				</div>
			</div>
		</Modal>
	);
}

function YoutubeModal(props) {
	return (
		<MyVerticallyCenteredModal
			show={props.modalShowYoutube}
			onHide={() => props.setModalShowYoutube(false)}
			yotubeID={props.yotubeID}
			musicName={props.musicName}
		/>
	);
}

export default YoutubeModal;
