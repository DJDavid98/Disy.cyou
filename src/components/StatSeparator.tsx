import { memo } from 'react';
import styles from '../styles/StatSeparator.module.css';

const StatSeparatorComponent = () => <span className={styles.sep}>&bull;</span>;

export const StatSeparator = memo(StatSeparatorComponent);
