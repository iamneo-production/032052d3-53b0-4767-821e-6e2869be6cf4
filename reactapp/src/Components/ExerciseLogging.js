import React from "react";
import Navbar from "./Navbar";

function Exercise() {
	return (
		<>
			<Navbar />
			<div className="content">
				<div className="card">
					<div className="card home hometext ">
						<h1>Exercise Logging</h1>
						<div className="line">
							<label htmlFor="exercise">Exercise</label>
							<input
								className="inputfield"
								type="text"
								name="exercise"
								id="exercise"
							/>
						</div>
						<div className="line">
							<label htmlFor="duration">Duration</label>
							<input
								className="inputfield"
								type="text"
								name="duration"
								id="duration"
							/>
						</div>
						<div className="line">
							<label htmlFor="calories">Calories</label>
							<input
								className="inputfield"
								type="text"
								name="calories"
								id="calories"
							/>
						</div>
						<div className="line">
							<label htmlFor="date">Date</label>
							<input className="inputfield" type="date" name="date" id="date" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Exercise;
