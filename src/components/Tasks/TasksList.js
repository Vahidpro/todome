import { useSelector } from "react-redux";
import Task from "./Task";
import "./TasksList.css";
const TasksList = (props) => {
	const tasksList = useSelector((state) => state.task.tasks);

	return (
		<div className="tasks-container">
			{tasksList &&
				tasksList.length > 0 &&
				tasksList.map((task) => (
					<Task
						key={task.key}
						id={task.key}
						title={task.title}
						status={task.status}
					/>
				))}
		</div>
	);
};
export default TasksList;
