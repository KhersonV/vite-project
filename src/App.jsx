import { useState } from 'react';
import './App.css';

function App() {
	const [isValueVaild, setValue] = useState(false);
	const [newValue, setNewValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		setError('');
		setValue(false);
		const promptValue = prompt('Введите значение');
		if (promptValue !== null) {
			setNewValue(promptValue);
			if (promptValue.length < 3)
				setError('Введенное значение должно содержать минимум 3 символа');
			else {
				setValue(true);
			}
		}
	};

	const onAddButtonClick = () => {
		console.log('onAddButtonClick');

		const newItem = {
			id: Date.now(),
			value: newValue,
		};

		setList((prevList) => [...prevList, newItem]);
		setNewValue('');
		setValue(false);
	};

	return (
		<div className="app">
			<h1 className="page-heading">Ввод значения</h1>
			<p className="no-margin-text">
				Текущее значение <code>value</code>: "
				<output className="current-value">{newValue}</output>"
			</p>

			{error && <div className="error">{error}</div>}

			<div className="buttons-container">
				<button className="button" onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className="button"
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className="list-container">
				<h2 className="list-heading">Список:</h2>
				{list.length == 0 && (
					<p className="no-margin-text">Нет добавленных элементов</p>
				)}
				<ul className="list">
					{list.map((x) => (
						<li key={x.id} className="list-item">
							{x.value}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
