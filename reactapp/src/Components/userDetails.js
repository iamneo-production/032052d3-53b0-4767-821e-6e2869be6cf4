//user details function component just ui
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProfileFemale from "./image/profile_female.svg";
// import ProfileMale from "./image/profile_male.svg";
import { AiFillEdit } from "react-icons/ai";

function UserDetails() {
	return (
		<>
			<Navbar />
			<Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
			<div className="content profile">
				<div className="card-split userdetails-main">
					<div className="edit-icon">
						<AiFillEdit />
						<p>Edit profile</p>
					</div>
					<img
						src={ProfileFemale}
						alt="profile"
						className="profile-image"
						height={200}
					/>
					{/* <img
						src={ProfileMale}
						alt="profile"
						className="profile-image"
						height={200}
					/> */}
					<div className="userdetails">
						<h2>Name:</h2>
						<h2>UserName:</h2>
						<h2>Date of Birth:</h2>
						<h2>Gender</h2>
						<h2>Age:</h2>
						<h2>Height:</h2>
						<h2>Weight:</h2>
						<h2>Email:</h2>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserDetails;
