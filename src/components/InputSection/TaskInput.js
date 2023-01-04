import { useState } from "react";
import "./TaskInput.css";
import { useDispatch } from "react-redux";
import { taskActions } from "../store/task-slice";
const TaskInput = (props) => {
	// Redux
	const dispatch = useDispatch();

	// useState
	const [title, setTitle] = useState("");
	const [enteredTitleIsValid, setEnteredTitleIsValid] = useState(true);

	const inputChangeHandler = (e) => {
		setTitle(e.target.value);
	};
	const formSubmitHander = (e) => {
		e.preventDefault();

		if (title.trim() === "") {
			setEnteredTitleIsValid(false);
			return;
		}

		setEnteredTitleIsValid(true);
		props.onAddTask(title);

		// Redux

		dispatch(
			taskActions.add({
				key: Number((Math.random() * 1000).toFixed()),
				title,
				status: "status",
			})
		);
	};

	return (
		<form onSubmit={formSubmitHander}>
			<div className="input-container">
				<input
					placeholder="New Task..."
					type="text"
					onChange={inputChangeHandler}
				></input>
				{!enteredTitleIsValid && <p>Please enter something!</p>}
				<button type="submit" className="btn-add">
					Add
				</button>
			</div>
		</form>
	);
};
export default TaskInput;
