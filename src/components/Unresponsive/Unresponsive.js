import React from "react";
import LoginImage from "../../images/login_page_illustration.svg";

function Unresponsive() {
	return (
		<div
			style={{
				color: "white",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<img src={LoginImage} alt='' style={{ height: "200px" }} />
			<p
				style={{
					padding: "24px",
					textAlign: "center",
					color: "#eb4d4b",
					width: "70%",
				}}>
				Currently, Moodify does not support smaller devices. Working hard to
				make it feasible. Thank you for your patience!
			</p>
		</div>
	);
}

export default Unresponsive;
