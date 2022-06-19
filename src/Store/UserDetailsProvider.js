import React, { useContext, useState, createContext } from "react";

const UserDetails = createContext();

const UserDetailsProvider = (props) => {
	const [userName, setUserName] = useState(null);

	return (
		<UserDetails.Provider
			value={{
				userName,
				setUserName,
			}}>
			{props.children}
		</UserDetails.Provider>
	);
};

export default UserDetailsProvider;

export const useUserDetailsProvider = () => useContext(UserDetails);
