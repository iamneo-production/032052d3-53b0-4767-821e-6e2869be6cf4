import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import logout from "../app/userSlice";
import { useDispatch } from "react-redux";

//navbar
function Navbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [url, setUrl] = useState("");
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		var a = document.createElement("a");
		a.href = window.location.href;
		setUrl(a.pathname);
	});
	const logoutHandler = () => {
		dispatch(logout());
		navigate("/");
	};

	return (
		<>
			<div className="right">
				<div className="navbar">
					<div className="logo">
						<Link to="/">
							<h1 className="logo-text">Fitness Tracker</h1>
						</Link>
					</div>

					<div className="links">
						{url === "/" ? (
							<>
								<Link to="/login">
									<h2>Login</h2>
								</Link>
								<Link to="/register">
									<h2>Register</h2>
								</Link>
							</>
						) : url === "/login" ? (
							<Link to="/register">
								<h2>Register</h2>
							</Link>
						) : url === "/register" ? (
							<Link to="/login">
								<h2>Login</h2>
							</Link>
						) : (
							<>
								<Link to="/userdetails">
									<FaCircleUser size={40} />
								</Link>
								<button style={{ margin: 0 }} onClick={logoutHandler}>
									{" "}
									Logout{" "}
								</button>
							</>
						)}
					</div>
				</div>
				<Outlet />
			</div>
		</>
	);
}

export default Navbar;
