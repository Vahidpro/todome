import Task from "./Task";
import "./TasksList.css";
const TasksList = (props) => {
	return (
		<div className="tasks-container">
			{props.tasks.map((task) => (
				<Task key={task.id} title={task.title} status={task.status}></Task>
			))}
		</div>
	);
};
export default TasksList;
