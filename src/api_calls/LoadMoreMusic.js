export default async function loadMoreSongs(
	userMood,
	songList,
	setSongList,
	history
) {
	const nextSongLink = JSON.parse(localStorage.getItem(userMood));
	let fetchedData = [];
	let nextData = [];
	const nextList = nextSongLink.next;
	for (let i = 0; i < nextList.length; i++) {
		await fetch(nextList[i], {
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
					const tracks = response.tracks;
					const items = tracks.items;
					const arr = items.map((item) => ({
						name: item.name,
						previewURL: item.preview_url,
						image: item.album.images[0].url,
						artist: item.artists[0].name,
					}));
					fetchedData.push(...arr);
					if (tracks.next) {
						nextData.push(tracks.next);
					}
				}
			})
			.catch((err) => console.log(err));
	}

	const jsonData = {
		item: [...songList, ...fetchedData],
		next: nextData,
	};
	localStorage.setItem(userMood, JSON.stringify(jsonData));
	setSongList((prev) => [...prev, ...fetchedData]);
}
