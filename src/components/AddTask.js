import React, {useState, useContext} from 'react';
import {TodoContext} from '../context/TodoContext';

function AddTask() {
	const [taskName, setTaskName] = useState('');
	const {addTask, containsTask} = useContext(TodoContext);

	const handleInput = (e) => {
		setTaskName(e.target.value);
	};

	const handleAddTask = () => {
		if (taskName === '') {
			return;
		} else if (containsTask(taskName, 'todo')) {
			alert('Task already exists!');
			return;
		} else {
			const newTask = taskName;
			addTask(newTask, 'todo');
			setTaskName('');
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleAddTask();
		}
	};

	return (
		<div className='input-holder'>
			<input
				value={taskName}
				onChange={handleInput}
				onKeyDown={handleKeyDown}
				className='add-input'
				type='text'
				id='add-task'
				placeholder='Add your task to the To-Do list'
				minLength='1'
				autoFocus
			/>

			<button onClick={handleAddTask} className='add-btn'>
				Add
			</button>
		</div>
	);
}

export default AddTask;
