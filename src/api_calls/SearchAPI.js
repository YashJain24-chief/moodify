export default async function searchFromAPI(
	searchInput,
	history,
	setUserMood,
	setSongList
) {
	const processedSearchInput = searchInput.replace(" ", "%20");
	let fetchedData = [];
	await fetch(
		`https://api.spotify.com/v1/search?q=${processedSearchInput}&type=track&market=IN&limit=10`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("tokens")}`,
			},
		}
	)
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
				console.log(response);
				const tracks = response.tracks;
				const items = tracks.items;
				const arr = items.map((item) => ({
					name: item.name,
					previewURL: item.preview_url,
					image: item.album.images[0].url,
					artist: item.artists[0].name,
				}));
				fetchedData.push(...arr);
			}
		})
		.catch((err) => console.log(err));
	if (fetchedData.length > 0) {
		setUserMood(null);
		setSongList(fetchedData);
	} else {
		alert("No item found");
	}
}
