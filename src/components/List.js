import React, {useContext} from 'react';
import {TodoContext} from '../context/TodoContext';
import Task from './Task';
import {dragStart, allowDrop, drop, ReadData} from './DragDrop';

function List() {
	const {tasks} = useContext(TodoContext);

	return (
		<div className='lists'>
			<div
				className='todo'
				onDragOver={(ev) => allowDrop(ev)}
				onDrop={(ev) => drop(ev)}
			>
				<p style={{textAlign: 'center'}}>
					<b>Not Started</b>
				</p>
				<hr style={{border: '0.5px dashed red'}} />
				<ul className='todo-items'>
					{tasks.todo.map((task, index) => (
						<li
							key={`todo-${index}`}
							draggable={true}
							onDragStart={(ev) => dragStart(ev, task, 'todo')}
						>
							<ReadData />
							<Task taskName={task} list='todo' />
						</li>
					))}
				</ul>
			</div>

			<div
				className='progress'
				onDragOver={(ev) => allowDrop(ev)}
				onDrop={(ev) => drop(ev)}
			>
				<p style={{textAlign: 'center'}}>
					<b>In Progress</b>
				</p>
				<hr style={{border: '0.5px dashed orange'}} />
				<ul className='progress-items'>
					{tasks.progress.map((task, index) => (
						<li
							key={`progress-${index}`}
							draggable={true}
							onDragStart={(ev) => dragStart(ev, task, 'progress')}
						>
							<ReadData />
							<Task taskName={task} list='progress' />
						</li>
					))}
				</ul>
			</div>

			<div
				className='done'
				onDragOver={(ev) => allowDrop(ev)}
				onDrop={(ev) => drop(ev)}
			>
				<p style={{textAlign: 'center'}}>
					<b>Complete</b>
				</p>
				<hr style={{border: '0.5px dashed rgb(46, 160, 46)'}} />
				<ul className='done-items'>
					{tasks.done.map((task, index) => (
						<li
							className="complete"
							key={`done-${index}`}
							draggable={true}
							onDragStart={(ev) => dragStart(ev, task, 'done')}
						>
							<ReadData />
							<Task taskName={task} list='done' />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default List;