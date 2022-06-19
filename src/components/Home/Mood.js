import React from "react";
import { useUserDetailsProvider } from "../../Store/UserDetailsProvider";
import Search from "./Search/Search";
import MoodChooser from "./MoodChooser/MoodChooser";
import MusicCard from "../Home/Card/MusicCard";

function Mood() {
	const { userName } = useUserDetailsProvider();

	const mood = ["happy", "sad", "energetic", "emotional", "calm"];
	return (
		<div className='mood-container'>
			<div className='mood-header-search'>
				<p className='user-name'>Hey, {userName}👋</p>
				<Search />
			</div>

			<p className='user-mood'>How are you feeling today?</p>

			<div className='mood-chooser-parent'>
				{mood.map((mood, index) => (
					<MoodChooser key={index} moodName={mood} />
				))}
			</div>
			<div className='card-container'>
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
				<MusicCard />
			</div>
		</div>
	);
}

export default Mood;
