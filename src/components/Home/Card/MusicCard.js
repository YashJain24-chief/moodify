import React from "react";
import "./MusicCard.css";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import youtube from "../../../images/icons_youtube.svg";
import PreviewModal from "../Modal/PreviewModal";
import YoutubeModal from "../Modal/YoutubeModal";
import fetchYoutubeID from "../../../api_calls/FetchYoutubeId";

import { useState } from "react";

export default function MusicCard({ img, musicName, previewURL, artist }) {
	// used for youtube button on hover property
	const [showButton, setShowButton] = useState(false);

	// Used to open and close preview modal
	const [modalShow, setModalShow] = useState(false);

	// Used to open and close youtube modal
	const [modalShowYoutube, setModalShowYoutube] = useState(false);

	const [yotubeID, setYouTubeID] = useState(null);

	return (
		<div
			className='card-parent'
			onMouseEnter={() => setShowButton(true)}
			onMouseLeave={() => setShowButton(false)}>
			<div className='card-image-block'>
				<img src={img} alt='Song Pic' className='card-image' />
				{showButton && (
					<img
						src={youtube}
						alt='youtube'
						className='play-button-2'
						onClick={() =>
							fetchYoutubeID(
								musicName,
								artist,
								setYouTubeID,
								setModalShowYoutube
							)
						}
					/>
				)}
			</div>
			<div className='card-data-block'>
				<p className='card-data'>
					{musicName.length > 25 ? musicName.slice(0, 25) + "..." : musicName}
				</p>
			</div>
			<div className='button-container'>
				{previewURL && (
					<PlayCircleFilledWhiteOutlinedIcon
						className='play-button-1'
						onClick={() => setModalShow(true)}
					/>
				)}
				<PreviewModal
					modalShow={modalShow}
					setModalShow={setModalShow}
					previewURL={previewURL}
					musicName={musicName}
				/>
				<YoutubeModal
					modalShowYoutube={modalShowYoutube}
					setModalShowYoutube={setModalShowYoutube}
					yotubeID={yotubeID}
					musicName={musicName}
				/>
			</div>
		</div>
	);
}
