import { useState } from 'react';
import styles from './app.module.css';

function App() {
	const [isValueValid, setValueValid] = useState(false);
	const [newValue, setNewValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		setError('');
		setValueValid(false);

		const promptValue = prompt('Введите значение');
		if (promptValue !== null) {
			setNewValue(promptValue);
			if (promptValue.length < 3) {
				setError('Введенное значение должно содержать минимум 3 символа');
			} else {
				setValueValid(true);
			}
		}
	};

	const onAddButtonClick = () => {
		const newItem = {
			id: Date.now(),
			value: newValue,
		};
		setList((prev) => [...prev, newItem]);
		setNewValue('');
		setValueValid(false);
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>:&nbsp;
				<output className={styles.currentValue}>{newValue}</output>
			</p>

			{error && <div className={styles.error}>{error}</div>}

			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueValid}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>

			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{list.length === 0 && (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				)}
				<ul className={styles.list}>
					{list.map((item) => (
						<li key={item.id} className={styles.listItem}>
							{item.value}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
