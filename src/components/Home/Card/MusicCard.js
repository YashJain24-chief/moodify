import React from "react";
import "./MusicCard.css";
import cardImg from "../../../images/login_page_illustration.svg";

export default function MusicCard() {
	return (
		<div className='card-parent'>
			<div className='card-image-block'>
				<img
					src={
						"https://i.scdn.co/image/ab67616d0000b273fc40db4ed9bf110f9a74b0a0"
					}
					alt='Song Pic'
					className='card-image'
				/>
			</div>
			<div className='card-data-block'>
				<p className='card-data'>My heart is inhfhfhfh hfh asasasanksnkNSK</p>
			</div>
			<iframe
				src='https://p.scdn.co/mp3-preview/051ff225b487916a2bd80f1e226505c014d25a77?cid=774b29d4f13844c495f206cafdad9c86'
				className='card-music-preview'
			/>
		</div>
	);
}
