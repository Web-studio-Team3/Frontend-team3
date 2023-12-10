// ToggleButton.tsx

import React, { useState } from "react";
import styles from "./ToggleButton.module.scss";

const ToggleButton: React.FC = () => {
	const [isChecked, setChecked] = useState(false);

	const handleToggle = () => {
		setChecked(!isChecked);
	};

	return (
		<label
			className={`${styles.toggleButton} ${
				isChecked ? styles.checked : ""
			}`}
		>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={handleToggle}
			/>
			<span className={styles.slider}></span>
		</label>
	);
};

export default ToggleButton;
