import { useState } from 'react';
import styles from './App.module.css';
import data from './data.json';

function App() {
	const currentYear = new Date().getFullYear();

	const buttons = data.buttons;

	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState(null);
	const [isResult, setIsResult] = useState(false);

	const displayText = isResult ? operand1 : `${operand1}${operator || ''}${operand2}`;

	const operatorHandler = () => {
		const a = Number(operand1);
		const b = Number(operand2);
		let result;
		switch (operator) {
			case '+':
				result = a + b;
				break;
			case '-':
				result = a - b;
				break;
			case '*':
				result = a * b;
				break;
			case '/':
				result = a / b;
				break;
			default:
				return;
		}
		setOperand1(String(result));
		setOperand2('');
		setOperator(null);
	};

	const handleClick = (btn) => {
		if (btn.value === 'C') {
			setOperand1('');
			setOperand2('');
			setOperator(null);
			setIsResult(false);
		} else if (btn.value === '=') {
			operatorHandler();
			setIsResult(true);
		} else if (['+', '-', '*', '/'].includes(btn.value)) {
			setIsResult(false);
			if (operator && operand2 !== '') {
				operatorHandler();
			}
			setOperator(btn.value);
		} else {
			setIsResult(false);
			if (!operator) {
				setOperand1((prev) => prev + btn.value);
			} else {
				setOperand2((prev) => prev + btn.value);
			}
		}
	};

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<div className={styles.display}>{displayText}</div>
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
