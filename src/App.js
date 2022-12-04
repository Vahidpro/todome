import "./App.css";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import Info from "./components/Information/Info";
import TaskInput from "./components/InputSection/TaskInput";
import TasksList from "./components/Tasks/TasksList";

function App() {
	const dummyTasks = [
		{
			id: 1,
			title: "Daily meeting with team",
			status: "active",
		},
		{
			id: 2,
			title: "Irrigation",
			status: "active",
		},
		{
			id: 3,
			title: "Visit family",
			status: "active",
		},
		{
			id: 4,
			title: "Hanging out with friends",
			status: "active",
		},
	];
	return (
		<div className="App">
			<Header></Header>
			<TaskInput></TaskInput>
			<Info></Info>
			<Filters></Filters>
			<TasksList tasks={dummyTasks} />
		</div>
	);
}

export default App;
