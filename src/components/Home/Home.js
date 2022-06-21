import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSignedInStatus } from "../../Store/SignedInProvider.js";
import { useUserDetailsProvider } from "../../Store/UserDetailsProvider";
import CircularProgress from "@mui/material/CircularProgress";

import { fetchUserProfile } from "../../api_calls/UserProfle.js";

import Mood from "./Mood/Mood";
import "./Mood/Mood.css";

export default function Home() {
	const history = useHistory();
	const { setSignedInStatus, setExpiry, signedInStatus } = useSignedInStatus();
	const { setUserName } = useUserDetailsProvider();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (window.location.hash) {
			localStorage.clear();
			const authentication_data = window.location.hash.slice(1).split("&");
			const access_token = authentication_data[0].slice(13);
			localStorage.setItem("tokens", access_token);
			localStorage.setItem("expiry", JSON.stringify(Date.now()));
			setSignedInStatus(access_token);
			setExpiry(Date.now());
		}

		// fetching user name
		fetchUserProfile(history, setUserName, setIsLoading);
	}, []);

	return (
		<>
			{isLoading === false ? (
				<Mood />
			) : (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100vh",
					}}>
					<CircularProgress
						style={{
							color: "#eb4d4b",
						}}
					/>
				</div>
			)}
		</>
	);
}
