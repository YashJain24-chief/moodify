export function fetchUserProfile(
	signedInStatus,
	Redirect,
	setUserName,
	setIsLoading
) {
	fetch("https://api.spotify.com/v1/me", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${signedInStatus}`,
		},
	})
		.then((res) => res.json())
		.catch((err) => console.log(err))
		.then((res) => {
			if (res.status === 401) {
				<Redirect to='/login' />;
			} else {
				setUserName(res.display_name);
				setTimeout(() => setIsLoading(false), 1000);
			}
		})
		.catch((err) => console.log(err));
}
