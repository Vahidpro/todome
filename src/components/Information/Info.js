import { useState } from "react";
import "./Info.css";
const Info = (props) => {
	const options = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	};
	const [date] = useState(new Date());

	return (
		<div className="info-container">
			<div className="time">{`${date.toLocaleDateString(
				undefined,
				options
			)}`}</div>
			<div className="remained">
				{" "}
				<span>0</span> Tasks remained today.
			</div>
		</div>
	);
};
export default Info;
