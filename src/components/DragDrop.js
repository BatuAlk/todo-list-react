import {useContext} from 'react';
import {TodoContext} from '../context/TodoContext';

let containsTask, addTask, removeTask;

export function ReadData() {
	const context = useContext(TodoContext);
	containsTask = context.containsTask;
	addTask = context.addTask;
	removeTask = context.removeTask;

	return null;
}

export function dragStart(ev, taskName, list) {
	ev.target.style.cursor = 'grabbing';
	const data = {
		taskName: taskName,
		list: list,
	};
	ev.dataTransfer.setData('data', JSON.stringify(data));
}

export function allowDrop(ev) {
	ev.preventDefault();
}

const findTarget = (target) => {
	if (
		target.className === 'todo' ||
		target.className === 'todo-items' ||
		target.parentElement.className === 'todo-items' ||
		target.parentElement.parentElement.className === 'todo-items'
	) {
		return 'todo';
	} else if (
		target.className === 'progress' ||
		target.className === 'progress-items' ||
		target.parentElement.className === 'progress-items' ||
		target.parentElement.parentElement.className === 'progress-items'
	) {
		return 'progress';
	} else if (
		target.className === 'done' ||
		target.className === 'done-items' ||
		target.parentElement.className === 'done-items' ||
		target.parentElement.parentElement.className === 'done-items'
	) {
		return 'done';
	}
};

export function drop(ev) {
	ev.preventDefault();
	const data = JSON.parse(ev.dataTransfer.getData('data'));
	const target = ev.target;
	const validTarget = findTarget(target);
	if (validTarget === null || validTarget === undefined) {
		target.style.cursor = 'grab';
		alert('Drop target not found!');
		return;
	}
	if (containsTask(data.taskName, validTarget)) {
		alert('Task already exists!');
		return;
	} else {
		if (validTarget === 'todo') {
			addTask(data.taskName, validTarget);
			removeTask(data.taskName, data.list);
			return;
		} else if (validTarget === 'progress') {
			addTask(data.taskName, validTarget);
			removeTask(data.taskName, data.list);
			return;
		} else if (validTarget === 'done') {
			addTask(data.taskName, validTarget);
			removeTask(data.taskName, data.list);
			return;
		}
	}
}
