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

			{/* Non-Redux approach: */}
			{props.tasks &&
				props.tasks.length > 0 &&
				props.tasks.map((task) => (
					<Task
						key={task.id}
						id={task.id}
						title={task.title}
						status={task.status}
						onDelete={props.onDeleteTask}
					/>
				))}
		</div>
	);
};
export default TasksList;
