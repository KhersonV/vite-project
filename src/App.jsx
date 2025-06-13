import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex

	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const handlePrevClick = () => {
		setActiveIndex((prev) => {
			if (prev > 0) return prev - 1;
			return 0;
		});
	};

	const handleNextClick = () => {
		setActiveIndex((prev) => {
			if (prev < data.length - 1) return prev + 1;
			return prev;
		});
	};

	const handleRestartClick = () => {
		setActiveIndex(0);
	};

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	const content = steps[activeIndex].content;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, idx) => (
							<li
								key={step.id}
								className={[
									styles['steps-item'],
									idx < activeIndex && styles.done,
									idx === activeIndex && styles.active,
								]
									.filter(Boolean)
									.join(' ')}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(idx)}
								>
									{idx + 1}
								</button>
								{step.title}
							</li>
						))}
					</ul>

					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={handlePrevClick}
							disabled={isFirstStep}
						>
							Назад
						</button>
						{isLastStep ? (
							<button
								className={styles.button}
								onClick={handleRestartClick}
							>
								Начать сначала
							</button>
						) : (
							<button className={styles.button} onClick={handleNextClick}>
								Далее
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
