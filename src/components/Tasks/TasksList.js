import Task from "./Task";
import "./TasksList.css";
const TasksList = (props) => {
	return (
		<div className="tasks-container">
			<Task title="Daily meeting with team"> </Task>
			<Task title="Irrigation"></Task>
			<Task title="Visit family"></Task>
			<Task title="Hanging out with friends"></Task>
		</div>
	);
};
export default TasksList;
