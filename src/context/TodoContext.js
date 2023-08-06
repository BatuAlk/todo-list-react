import React, {createContext, useState} from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
	const [tasks, setTasks] = useState({
		todo: [],
		progress: [],
		done: [],
	});

	const addTask = (task, list) => {
		setTasks((prevState) => ({
			...prevState,
			[list]: [...prevState[list], task],
		}));
	};

	const containsTask = (task, list) => {
		return tasks[list].includes(task);
	};

	const removeTask = (task, list) => {
		setTasks((prevState) => ({
			...prevState,
			[list]: prevState[list].filter((t) => t !== task),
		}));
	};

	const editTask = (task, list, newTask) => {
		setTasks((prevState) => ({
			...prevState,
			[list]: prevState[list].map((t) => (t === task ? newTask : t)),
		}));
	};

	return (
		<TodoContext.Provider
			value={{
				tasks,
				setTasks,
				addTask,
				containsTask,
				removeTask,
				editTask,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};
