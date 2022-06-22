async function FetchNavData(url, setFetchedList, history) {
	await fetch(url, {
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
			} else {
				const response = await res.json();
				const items = response.items;
				let arr = [];
				if (url === "https://api.spotify.com/v1/me/top/tracks") {
					arr = items.map((item) => ({
						name: item.name,
						previewURL: item.preview_url,
						image: item.album.images[0].url,
						artist: item.artists[0].name,
					}));
				} else {
					arr = items.map((item) => ({
						name: item.track.name,
						previewURL: item.track.preview_url,
						image: item.track.album.images[0].url,
						artist: item.track.album.artists[0].name,
					}));
				}
				setFetchedList(arr);
			}
		})
		.catch((err) => console.log(err));
}
export default FetchNavData;
