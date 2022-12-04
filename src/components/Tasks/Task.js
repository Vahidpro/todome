import "./Task.css";
const Task = (props) => {
	return (
		<div className="task">
			<div className="title">{props.title}</div>
			<div className="icons-container">
				<button>🗑️</button>
				<button>✏️</button>
				<button>✅</button>
			</div>
		</div>
	);
};
export default Task;
