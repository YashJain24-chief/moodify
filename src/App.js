import Unresponsive from "./components/Unresponsive/Unresponsive";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSignedInStatus } from "./Store/SignedInProvider";
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
	console.log("app");
	console.log(signedInStatus, expiry);

	return (
		<div className='App-parent'>
			{width > 1089 ? (
				<Switch>
					<Route path={"/login"} exact>
						<Login />
					</Route>
					<Route path={"/home"} exact>
						<Home />
					</Route>
					<Route path={"/"} exact>
						{signedInStatus !== null && expiry !== null ? (
							<Redirect to='/home' />
						) : (
							<Redirect to='/login' />
						)}
					</Route>
				</Switch>
			) : (
				<Unresponsive />
			)}
		</div>
	);
}

export default App;
