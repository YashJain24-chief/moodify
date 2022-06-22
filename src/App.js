import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSignedInStatus } from "./Store/SignedInProvider";
import UserDetailsProvider from "./Store/UserDetailsProvider";

import Unresponsive from "./components/Unresponsive/Unresponsive";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar.js";
import NavComponent from "./components/NavComponent/NavComponent";
import Recommendation from "./components/Recommendation/Recommendation";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
	const [width, setwidth] = useState(window.innerWidth);
	const { signedInStatus, expiry } = useSignedInStatus();

	useEffect(() => {
		window.addEventListener("resize", fun_resize);
		return () => window.removeEventListener("resize", fun_resize);
	}, []);

	function fun_resize() {
		setwidth(window.innerWidth);
	}

	return (
		<>
			{width > 1089 ? (
				<div className='home-container'>
					<Switch>
						<Route path={"/"} exact>
							{signedInStatus !== null && expiry !== null ? (
								<Redirect to='/home/Mood' />
							) : (
								<Redirect to='/login' />
							)}
						</Route>
						<Route path={"/login"} exact>
							<Login />
						</Route>
						<Route path={"/home/Mood"} exact>
							<Sidebar />
							<UserDetailsProvider>
								<Home />
							</UserDetailsProvider>
						</Route>
						{signedInStatus !== null && expiry !== null ? (
							<>
								<Sidebar />
								<Route path={"/home/Recent"} exact>
									<NavComponent
										url='https://api.spotify.com/v1/me/player/recently-played'
										description='recently played'
									/>
								</Route>
								<Route path={"/home/Liked"} exact>
									<NavComponent
										url='https://api.spotify.com/v1/me/tracks'
										description='liked'
									/>
								</Route>
								<Route path={"/home/Frequent"} exact>
									<NavComponent
										url='https://api.spotify.com/v1/me/top/tracks'
										description='frequently played'
									/>
								</Route>
								<Route path={"/home/Recommendation"} exact>
									<Recommendation />
								</Route>
							</>
						) : (
							<Redirect to='/login' />
						)}
					</Switch>
				</div>
			) : (
				<div className='unresponsive-container'>
					<Unresponsive
						text={
							"Currently, Moodify does not support smaller devices. Working hard to make it feasible. Thank you for your patience!"
						}
					/>
				</div>
			)}
		</>
	);
}

export default App;
