import "./Task.css";
import { useDispatch } from "react-redux";
import { taskActions } from "../store/task-slice";

const Task = (props) => {
	const dispatch = useDispatch();

	const deleteHandler = () => {
		if (props.onDelete) {
			props.onDelete(props.id);
		} else {
			dispatch(taskActions.delete(props.id));
		}
	};

	return (
		<div className="task">
			<div className="title">{props.title}</div>
			<div className="icons-container">
				<button onClick={deleteHandler}>🗑️</button>
				<button>✏️</button>
				<button>✅</button>
			</div>
		</div>
	);
};
export default Task;
