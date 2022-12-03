import "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Information/Info";
import TaskInput from "./components/InputSection/TaskInput";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<TaskInput></TaskInput>
			<Info></Info>
		</div>
	);
}

export default App;
