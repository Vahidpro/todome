import "./TaskInput.css";
const TaskInput = (props) => {
	return (
		<form>
			<div className="input-container">
				<input placeholder="New Task..." type="text"></input>
				<button>Add</button>
			</div>
		</form>
	);
};
export default TaskInput;