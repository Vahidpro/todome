import "./App.css";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import Info from "./components/Information/Info";
import TaskInput from "./components/InputSection/TaskInput";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<TaskInput></TaskInput>
			<Info></Info>
			<Filters></Filters>
		</div>
	);
}

export default App;
