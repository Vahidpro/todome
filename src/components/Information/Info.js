import { useState } from "react";
import "./Info.css";
import { useSelector } from "react-redux";
const Info = (props) => {
	const remained = useSelector((state) => state.task.remainedTasks);
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
				<span>{remained}</span> Tasks remained today.
			</div>
		</div>
	);
};
export default Info;
