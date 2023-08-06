import {useEffect, useContext} from 'react';
import {TodoContext} from './context/TodoContext';
import AddTask from './components/AddTask';
import List from './components/List';
import './scss/styles.css';

function App() {
	const {tasks, setTasks} = useContext(TodoContext);

	useEffect(() => {
		const storedTasks = JSON.parse(localStorage.getItem('tasks'));
		if (storedTasks) {
			setTasks(storedTasks);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<>
			<h1>To-Do List</h1>
			<div className='kanban'>
				<AddTask />
				<List />
			</div>
		</>
	);
}

export default App;
