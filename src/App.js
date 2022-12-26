import { useState } from "react";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import Info from "./components/Information/Info";
import TaskInput from "./components/InputSection/TaskInput";
import TasksList from "./components/Tasks/TasksList";

function App() {
	let [tasksList, setTasksList] = useState([]);

	const addTaskHandler = (enteredTitle) => {
		setTasksList((prevTask) => {
			const updatedTasks = [...prevTask];
			updatedTasks.unshift({
				id: Number((Math.random() * 1000).toFixed()),
				title: enteredTitle,
				status: "active",
			});
			return updatedTasks;
		});
	};

	let content = (
		<p style={{ textAlign: "center", fontWeight: "700", fontSize: "2rem" }}>
			No Tasks Yet!
		</p>
	);

	if (tasksList.length > 0) {
		content = <TasksList tasks={tasksList} />;
	}

	return (
		<>
			<Header></Header>
			<TaskInput onAddTask={addTaskHandler} />
			<Info></Info>
			<Filters></Filters>
			{content}
		</>
	);
}

export default App;
