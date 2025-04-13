import "./App.css";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import Info from "./components/Information/Info";
import TaskInput from "./components/InputSection/TaskInput";
import TasksList from "./components/Tasks/TasksList";
import { useSelector } from "react-redux";

function App() {
	const tasksList = useSelector((state) => state.task.tasks);

	const addTaskHandler = () => {};

	let content = (
		<p style={{ textAlign: "center", fontWeight: "500", fontSize: "1.5rem" }}>
			No Tasks Yet!
		</p>
	);

	if (tasksList && tasksList.length > 0) {
		content = <TasksList />;
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
