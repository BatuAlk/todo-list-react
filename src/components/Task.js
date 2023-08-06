import React, {useState} from 'react';
import RemoveTask from './RemoveTask';
import {EditTask, SaveTask, CancelEditTask} from './EditTask';

function Task({taskName, list}) {
	const [editing, setEditing] = useState(false);
	const [newTaskName, setNewTaskName] = useState('');

	const handleInputChange = (e) => {
		setNewTaskName(e.target.value);
	};

	if (!editing) {
		return (
			<>
				<span className='task-name'>{taskName}</span>
				<EditTask setEditing={setEditing} />
				<RemoveTask taskName={taskName} list={list} />
			</>
		);
	} else {
		return (
			<>
				<input
					type='text'
					className='edit-input'
					value={newTaskName}
					onChange={handleInputChange}
					autoFocus
				/>
				<SaveTask
					taskName={taskName}
					list={list}
					setEditing={setEditing}
					newTaskName={newTaskName}
					setNewTaskName={setNewTaskName}
				/>
				<CancelEditTask setEditing={setEditing} />
			</>
		);
	}
}

export default Task;
