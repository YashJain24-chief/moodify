export default async function fetchYoutubeID(
	musicName,
	artist,
	setYouTubeID,
	setModalShowYoutube
) {
	const songData = musicName.replace(" ", "+") + artist.replace(" ", "+");
	await fetch(
		`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${songData}+song&type=video&videoEmbeddable=true&key=AIzaSyBF2OEbE9RZBCQtkOOo-9xH8YCEsp5oPsg`
	)
		.then((res) => res)
		.then(async (response) => {
			if (response.ok) {
				const data = await response.json();
				setYouTubeID(data.items[0].id.videoId);
			}
		})
		.catch((err) => console.log(err));
	setModalShowYoutube(true);
}
