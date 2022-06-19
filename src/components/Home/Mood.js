import React from "react";
import { useUserDetailsProvider } from "../../Store/UserDetailsProvider";
import Search from "./Search/Search";
import MoodChooser from "./MoodChooser/MoodChooser";

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
		</div>
	);
}

export default Mood;
