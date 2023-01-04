import { useSelector } from "react-redux";
import Task from "./Task";
import "./TasksList.css";
const TasksList = (props) => {
	const tasksList = useSelector((state) => state.task.tasks);

	return (
		<div className="tasks-container">
			{tasksList.map((task) => (
				<Task key={task.key} title={task.title} status={task.status} />
			))}

			{/* Before redux approach: */}
			{/* {props.tasks.map((task) => (
				<Task key={task.id} title={task.title} status={task.status}></Task>
			))} */}
			{console.log(tasksList)}
		</div>
	);
};
export default TasksList;
