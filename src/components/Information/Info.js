import { useState } from "react";
import "./Info.css";
const Info = (props) => {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const [date] = useState(new Date());

	return (
		<div className="info-container">
			<div className="time">{`${date.toLocaleDateString(
				undefined,
				options
			)}`}</div>
			<div className="remained"></div>
		</div>
	);
};
export default Info;
