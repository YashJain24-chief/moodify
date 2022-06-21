import React from "react";
import "./MoodChooser.css";

function MoodChooser({ moodName, clickMood, moodState }) {
	return (
		<span
			className='mood-chooser-name'
			onClick={() => clickMood(moodName)}
			style={{
				backgroundColor: `${moodName === moodState ? "#eb4d4b" : ""}`,
			}}>
			{moodName}
		</span>
	);
}

export default MoodChooser;
