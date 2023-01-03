import { useState } from "react";
import "./TaskInput.css";

const TaskInput = (props) => {
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
