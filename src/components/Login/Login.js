import React from "react";
import LoginImage from "../../images/login_page_illustration.svg";
import Button from "react-bootstrap/Button";

export default function Login() {
	function loginSpotify() {
		const CLIENT_ID = "246a00e593b044dc9c4921ca186219c8";
		const RESPONSE_TYPE = "token";
		const REDIRECT_URI = "http://localhost:3000/home/";
		const SCOPES =
			"user-read-recently-played user-top-read user-read-email user-read-private";
		const GENERATED_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
		window.location.href = GENERATED_URL;
	}
	return (
		<div className='App-container'>
			<div className='App-container1'>
				<img className='App-container1-img' src={LoginImage} alt='login' />
			</div>
			<div className='App-container2'>
				<p className='App-container2-app-name'>Moodify</p>
				<p className='App-container2-app-description'>
					Listen to music based on your mood, get recommendations based on your
					previously played songs and much more!{" "}
				</p>
				<Button
					onClick={loginSpotify}
					variant='outline-danger'
					size='lg'
					className='App-container2-login'>
					Continue with Spotify
				</Button>
			</div>
		</div>
	);
}
