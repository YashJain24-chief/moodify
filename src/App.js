import LoginImage from "./images/login_page_illustration.svg";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Unresponsive from "./components/Unresponsive/Unresponsive";

import "./App.css";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
	const [width, setwidth] = useState(window.innerWidth);

	// const [authenticationData, setAuthenticationData] = useState(
	// 	localStorage.getItem("tokens") || null
	// );
	// console.log(authenticationData);

	useEffect(() => {
		console.log("resize");
		window.addEventListener("resize", fun_resize);

		// if (authenticationData) {
		// }

		return () => window.removeEventListener("resize", fun_resize);
	}, []);

	function fun_resize() {
		console.log(window.innerWidth);
		setwidth(window.innerWidth);
	}

	return (
		// <Switch>
		<div className='App-parent'>
			{width > 1089 ? (
				<div className='App-container'>
					<div className='App-container1'>
						<img className='App-container1-img' src={LoginImage} alt='login' />
					</div>
					<div className='App-container2'>
						<p className='App-container2-app-name'>Moodify</p>
						<p className='App-container2-app-description'>
							Listen to music based on your mood, get recommendations based on
							your previously played songs and much more!{" "}
						</p>
						<Button
							variant='outline-danger'
							size='lg'
							className='App-container2-login'>
							Continue with Spotify
						</Button>
					</div>
				</div>
			) : (
				<Unresponsive />
			)}
		</div>
		// </Switch>
	);
}

export default App;
