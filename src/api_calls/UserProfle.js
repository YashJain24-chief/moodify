export function fetchUserProfile(history, setUserName, setIsLoading) {
	console.log("fetch user profile");
	fetch(`https://api.spotify.com/v1/me`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("tokens")}`,
		},
	})
		.then((res) => res)
		.catch((err) => console.log(err))
		.then(async (res) => {
			if (res.status === 401) {
				alert(
					"Session Timeout! Unfortunately the tokens are only valid for 1hr as of now. Please login again. Thank you for your patience! "
				);
				localStorage.clear();
				history.push("/login");
			} else if (res.status === 403) {
				alert(
					"Unfortunately, the API endpoints are not accessible to everyone. Ask the admins to add you to dashboard.\nAdmins:\nchiefyash.24@gmail.com\nbsonu.saw@gmail.com"
				);
				localStorage.clear();
				history.push("/login");
			} else {
				const response = await res.json();
				setUserName(response.display_name);
				setTimeout(() => setIsLoading(false), 1000);
			}
		})
		.catch((err) => console.log(err));
}
