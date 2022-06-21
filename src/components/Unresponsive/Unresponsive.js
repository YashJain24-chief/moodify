import React from "react";
import LoginImage from "../../images/login_page_illustration.svg";

function Unresponsive({ text }) {
	return (
		<div
			style={{
				color: "white",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<img src={LoginImage} alt='' style={{ height: "260px" }} />
			<p
				style={{
					padding: "24px",
					textAlign: "center",
					color: "#eb4d4b",
					width: "70%",
				}}>
				{text}
			</p>
		</div>
	);
}

export default Unresponsive;
