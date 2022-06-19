import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./ListItem.css";

function ListItem({ itemName, itemLogo }) {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<Link
			to={`/home/${itemName}`}
			style={{
				textDecoration: "none",
				color: "white",
				background: `${
					currentPath.includes(`/home/${itemName}`) ? "#eb4d4b" : ""
				}`,
			}}>
			<div className='list-item-parent'>
				{itemLogo}
				<span className='list-item-name'>{itemName}</span>
			</div>
		</Link>
	);
}

export default ListItem;
