import React, { useEffect } from "react";
import { useState } from "react";
import MusicCard from "../Home/Card/MusicCard";
import getRecommendation from "../../api_calls/FetchRecommendation";

function Recommendation() {
	const [fetchedRecommendedList, setFetchedRecommendedList] = useState([]);

	useEffect(() => {
		getRecommendation(setFetchedRecommendedList);
	}, []);

	return (
		<div className='mood-container'>
			<p
				className='user-mood user-name'
				style={{
					width: "80%",
				}}>
				Here are the recommended songs based on your previously heard genres!
			</p>
			<div className='card-container'>
				{fetchedRecommendedList.length > 0 ? (
					fetchedRecommendedList.map((item, index) => (
						<MusicCard
							img={item.image}
							musicName={item.name}
							previewURL={item.previewURL}
							key={index}
							artist={item.artist}
						/>
					))
				) : (
					<p>No enough data to recommend songs. Start listening on Spotify!</p>
				)}
			</div>
		</div>
	);
}

export default Recommendation;
