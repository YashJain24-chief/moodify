import React, { useEffect } from "react";
import { useState } from "react";
import MusicCard from "../Home/Card/MusicCard";
import FetchNavData from "../../api_calls/FetchNavData";
import { useHistory } from "react-router-dom";

function NavComponent(props) {
	const [fetchedList, setFetchedList] = useState([]);
	const history = useHistory();

	useEffect(() => {
		FetchNavData(props.url, setFetchedList, history);
	}, []);
	return (
		<div className='mood-container'>
			<p
				className='user-mood user-name'
				style={{
					width: "80%",
				}}>
				Bored of just listening to your {props.description} songs on Spotify?
				Don't worry, we got you. You can now listen and watch your fav videos
				right here!
			</p>
			<div className='card-container'>
				{fetchedList.length > 0 &&
					fetchedList.map((item, index) => (
						<MusicCard
							img={item.image}
							musicName={item.name}
							previewURL={item.previewURL}
							key={index}
							artist={item.artist}
						/>
					))}
			</div>
		</div>
	);
}

export default NavComponent;
