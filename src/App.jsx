import ReactIcon from './assets/react.svg?component';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
	// декларативный
	const currentYear = new Date().getFullYear();

	return (
		<div className="App">
			<div className="logos">
				{/* 1. React-logo как компонент */}
				<ReactIcon className="logo-component" />

				{/* 2. React-logo как обычное <img> */}
				<img src={reactLogo} className="logo-img" alt="React logo" />
			</div>
			<footer>
				<p>© {currentYear}</p>
			</footer>
		</div>
	);
}

export default App;
