import { useState } from 'react';
import styles from './App.module.css';
import data from './data.json';


function App() {

	const currentYear = new Date().getFullYear();

	const buttons = data.buttons;

	const handleClick  = (btn) => {
		console.log(btn.value)
	}

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<div className={styles.display}>0</div>
				<div className={styles.buttonContainer}>
					{buttons.map((btn) => (
						<button
							key={btn.id}
							className={[
								styles.button,
								btn.type === 'clear' && styles.clear,
								btn.type === 'operator' && styles.operator,
								btn.type === 'equal' && styles.equal,
							]
								.filter(Boolean)
								.join(' ')}
							onClick={() => handleClick(btn)}
						>
							{btn.value}
						</button>
					))}
				</div>
			</div>

			<footer>
				<p>© {currentYear}</p>
			</footer>
		</div>
	);
}

export default App;
