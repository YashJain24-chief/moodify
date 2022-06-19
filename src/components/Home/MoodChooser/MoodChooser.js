import React from "react";
import "./MoodChooser.css";

function MoodChooser({ moodName }) {
	return <span className='mood-chooser-name'>{moodName}</span>;
}

export default MoodChooser;
