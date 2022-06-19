export function fetchUserProfile(history, setUserName, setIsLoading) {
	fetch("https://api.spotify.com/v1/me", {
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
				history.push("/login");
			} else {
				const response = await res.json();
				setUserName(response.display_name);
				setTimeout(() => setIsLoading(false), 1000);
			}
		})
		.catch((err) => console.log(err));
}
