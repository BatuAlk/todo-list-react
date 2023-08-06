import React, {useContext} from 'react';
import {TodoContext} from '../context/TodoContext';

export function EditTask({setEditing}) {
	const handleEditing = () => {
		setEditing(true);
	};

	return (
		<button className='edit' onClick={handleEditing}>
			Edit
		</button>
	);
}

export function SaveTask({
	taskName,
	list,
	newTaskName,
	setNewTaskName,
	setEditing,
}) {
	const { editTask, containsTask } = useContext(TodoContext);

	const handleSaveTask = () => {
		if (newTaskName === '') {
			alert('Please enter a task name!');
		} else if (containsTask(newTaskName, list)) {
			alert('Task already exists!');
		} else {
			editTask(taskName, list, newTaskName);
		}
		setEditing(false);
		setNewTaskName('');
	};

	return (
		<button className='save' onClick={handleSaveTask}>
			Save
		</button>
	);
}

export function CancelEditTask({setEditing}) {
	const handleCancelEditTask = () => {
		setEditing(false);
	};

	return (
		<button className='cancel' onClick={handleCancelEditTask}>
			Cancel
		</button>
	);
}
