import React, { useEffect, useState } from "react";
import { useUserDetailsProvider } from "../../../Store/UserDetailsProvider";
import Search from "../Search/Search";
import MoodChooser from "../MoodChooser/MoodChooser";
import MusicCard from "../Card/MusicCard";
import { useHistory } from "react-router-dom";
import fetchMusicData from "../../../api_calls/FetchMusic";

function Mood() {
	const { userName } = useUserDetailsProvider();

	const mood = ["happy", "sad", "energetic", "frustrated", "calm"];
	const [userMood, setUserMood] = useState(null);
	const [songList, setSongList] = useState([]);
	const history = useHistory();

	const genreMapping = [
		["beats", "hip-hop"],
		["jazz", "blues"],
		["metal", "pop"],
		["classical", "electronic"],
		["blues", "classical"],
	];

	useEffect(() => {
		fetchMusicData(userMood, setSongList, genreMapping, history);
	}, [userMood]);

	return (
		<div className='mood-container'>
			<div className='mood-header-search'>
				<p className='user-name'>Hey, {userName}👋</p>
				<Search />
			</div>

			<p className='user-mood'>How are you feeling today?</p>

			<div className='mood-chooser-parent'>
				{mood.map((mood, index) => (
					<MoodChooser
						key={index}
						moodName={mood}
						clickMood={setUserMood}
						moodState={userMood}
					/>
				))}
			</div>

			<div className='card-container'>
				{userMood ? (
					<>
						{songList.length > 0 &&
							songList.map((item, index) => (
								<MusicCard
									img={item.image}
									musicName={item.name}
									previewURL={item.previewURL}
									key={index}
								/>
							))}
					</>
				) : (
					<MusicCard
						img='https://i.scdn.co/image/ab67616d0000b273fc40db4ed9bf110f9a74b0a0'
						musicName={"Happy"}
						previewURL='https://p.scdn.co/mp3-preview/051ff225b487916a2bd80f1e226505c014d25a77?cid=774b29d4f13844c495f206cafdad9c86'
					/>
				)}
			</div>
			{songList.length > 0 && (
				<span className='load-more-container'>Load more..</span>
			)}
		</div>
	);
}

export default Mood;
