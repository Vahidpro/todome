import logo from "../../logo.svg";
import "./Header.css";

const Header = () => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>Todo Me!</h2>
		</header>
	);
};
export default Header;
