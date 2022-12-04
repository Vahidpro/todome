import "./App.css";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import Info from "./components/Information/Info";
import TaskInput from "./components/InputSection/TaskInput";
import TasksList from "./components/Tasks/TasksList";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<TaskInput></TaskInput>
			<Info></Info>
			<Filters></Filters>
			<TasksList></TasksList>
		</div>
	);
}

export default App;
