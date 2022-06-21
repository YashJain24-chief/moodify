export default async function fetchMusicData(
	userMood,
	setSongList,
	genreMapping,
	history
) {
	if (userMood != null && localStorage.getItem(userMood) !== null) {
		const localStorageData = JSON.parse(localStorage.getItem(userMood));
		setSongList(localStorageData.item);
	} else if (userMood != null && localStorage.getItem(userMood) == null) {
		let data = [];
		let fetchedData = [];
		let nextData = [];

		if (userMood === "happy") {
			data = genreMapping[0];
		} else if (userMood === "sad") {
			data = genreMapping[1];
		} else if (userMood === "energetic") {
			data = genreMapping[2];
		} else if (userMood === "frustrated") {
			data = genreMapping[3];
		} else if (userMood === "calm") {
			data = genreMapping[4];
		}

		for (let i = 0; i < data.length; i++) {
			await fetch(
				`https://api.spotify.com/v1/search?q=genre%3A${data[i]}&type=track&market=IN&limit=10`,
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
						history.push("/login");
					} else {
						const response = await res.json();
						const tracks = response.tracks;
						const items = tracks.items;

						const arr = items.map((item) => ({
							name: item.name,
							previewURL: item.preview_url,
							image: item.album.images[0].url,
						}));
						fetchedData.push(...arr);
						nextData.push(tracks.next);
					}
				})
				.catch((err) => console.log(err));
		}

		const jsonData = {
			item: fetchedData,
			next: nextData,
		};
		localStorage.setItem(userMood, JSON.stringify(jsonData));
		setSongList(fetchedData);
	}
}
