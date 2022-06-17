import { useContext, useState } from "react";
import React, { createContext } from "react";

const signedIn = createContext();

function expiryCheck() {
	const expiry = JSON.parse(localStorage.getItem("expiry"));
	if (expiry !== null && Date.now() - expiry < 3598 * 1000) {
		return true;
	} else {
		return null;
	}
}

const SignedInProvider = (props) => {
	console.log("sign provider");
	const [signedInStatus, setSignedInStatus] = useState(
		expiryCheck() ? localStorage.getItem("tokens") : null
	);
	const [expiry, setExpiry] = useState(
		expiryCheck() ? localStorage.getItem("expiry") : null
	);

	return (
		<signedIn.Provider
			value={{
				signedInStatus,
				expiry,
				setSignedInStatus,
				setExpiry,
			}}>
			{props.children}
		</signedIn.Provider>
	);
};

export default SignedInProvider;

// custom hook for useContext so that we don't have to import context and useContext again and again
export const useSignedInStatus = () => useContext(signedIn);
