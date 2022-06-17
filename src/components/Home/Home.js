import React, { useEffect } from "react";
import { useSignedInStatus } from "../../Store/SignedInProvider.js";
export default function Home() {
	const { setSignedInStatus, setExpiry } = useSignedInStatus();

	console.log("home");
	useEffect(() => {
		if (window.location.hash) {
			localStorage.clear();
			const authentication_data = window.location.hash.slice(1).split("&");
			const access_token = authentication_data[0].slice(13);
			localStorage.setItem("tokens", access_token);
			localStorage.setItem("expiry", JSON.stringify(Date.now()));
			setSignedInStatus(access_token);
			setExpiry(Date.now());
			console.log("storaging auth to local storage home.js");
		}
	}, []);

	return <div>Home</div>;
}
