import Circle from "./components/Circles/Circle";
import RedCircle from "./components/Circles/RedCircle";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Circle x={40} y={40} radius={40} fill="blue" />
			<Circle x={20} y={20} radius={20} fill="red" />
			<RedCircle x={40} y={40} radius={40} />
		</div>
	);
}

export default App;
