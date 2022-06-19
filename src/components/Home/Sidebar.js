import React from "react";

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";

import ListItem from "./ListItem.js";
function Sidebar() {
	const drawerWidth = 250;

	return (
		<Drawer
			sx={{
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					color: "white",
					backgroundColor: "#13121278",
				},
			}}
			variant='permanent'
			anchor='left'>
			<p
				style={{
					color: "#eb4d4b",
					textAlign: "center",
					fontSize: "2rem",
					paddingTop: "24px",
					fontWeight: "bold",
				}}>
				Moodify
			</p>
			<Divider />
			{/* List components */}
			<ListItem itemName='Mood' itemLogo={<MusicNoteOutlinedIcon />} />
			<ListItem itemName='Recent' itemLogo={<RotateLeftOutlinedIcon />} />
			<ListItem itemName='Liked' itemLogo={<FavoriteBorderOutlinedIcon />} />
			<ListItem itemName='Frequent' itemLogo={<RepeatOutlinedIcon />} />
			<ListItem
				itemName='Recommendation'
				itemLogo={<RecommendOutlinedIcon />}
			/>
		</Drawer>
	);
}

export default Sidebar;
