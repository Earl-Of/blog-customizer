import { useState } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<div>
			<ArrowButton isOpen={isOpen} onClick={toggleOpen} />
			{isOpen && <aside className={styles.container}>Панель открыта</aside>}
		</div>
	);
};
