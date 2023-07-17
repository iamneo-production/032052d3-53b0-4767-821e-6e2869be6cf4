import React from "react";
import StepsChart from "./Steps";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../app/userSlice";

function Profile() {
	const user = useSelector(selectUser);
	return (
		<>
			<Navbar />
			<Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
			<div className="content profile">
				<div className="card">
					<div className="profile-content">
						<h1
							style={{
								display: "flex",
								justifyContent: "start",
								paddingLeft: "30px",
							}}
						>
							Hello, {user.username}
						</h1>
						<div className="grid">
							<div className="grid-separate">
								<h2> Steps Count</h2>
								<StepsChart />
							</div>
							<div className="grid-separate">
								<h2>Calories Burnt</h2>
								<StepsChart />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
