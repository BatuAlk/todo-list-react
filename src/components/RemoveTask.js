import React, {useContext} from 'react';
import {TodoContext} from '../context/TodoContext';

function RemoveTask({taskName, list}) {
	const {removeTask} = useContext(TodoContext);

	const handleRemoveTask = () => {
		const confirmation =
			"Are you sure you want to remove this task? Press 'OK' to remove or 'Cancel' to cancel.";
		if (window.confirm(confirmation)) {
			removeTask(taskName, list);
		}
	};

	return (
		<button className='remove' onClick={handleRemoveTask}>
			Remove
		</button>
	);
}

export default RemoveTask;
