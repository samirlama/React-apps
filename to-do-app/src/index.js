import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import ToDoItem from './components/ToDoItem.js';
import ToDoForm from './components/ToDoForm.js';

class ToDoList extends React.Component{
	constructor(){
		super();
		this.changeStatus = this.changeStatus.bind(this);
		this.updateTask = this.updateTask.bind(this);
		this.addTask = this.addTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.editTask = this.editTask.bind(this);
		this.state = {
			tasks:[{
				name: "Eat food" ,
				completed: false
					
					},
					{
					name: "Eat bread" ,
					completed: false
					},
					{
					name: "Eat slime" ,
					completed: false
					}],
			currentTask: ''		

				
		}
	}
	changeStatus(index){
		console.log(this.state.tasks[index]);
		 var tasks = this.state.tasks
		 var task = tasks[index]
		 console.log(task);
		 task.completed = !task.completed;
		 this.setState({
		 	tasks:tasks
		 })
	}

	updateTask(event){
		this.setState({
			currentTask:event.target.value
		})
	}

	addTask(event){
		event.preventDefault();
	 	let tasks = this.state.tasks
	 	let currentTask = this.state.currentTask;
	 	tasks.push({
	 		name:currentTask,
	 		completed: false
	 	})
	 	this.setState({
	 	tasks , //tasks:tasks is equivalet cox they share the same identifier name .. new rule imposed on es6
	 	currentTask: ''
	 })
	}

	deleteTask(index){
		
		var tasks = this.state.tasks
		tasks.splice(index , 1)
		this.setState({
			tasks
		})

	}
	editTask(index  , newValue){
		console.log(newValue);
		var tasks = this.state.tasks;
		var task = tasks[index];
		task['name'] = newValue ;
		this.setState ({
			tasks
		})
	}
	
	render(){
		return (
			<section>
				<ToDoForm 
				currentTask = {this.state.currentTask} 
				updateTask = {this.updateTask}
				addTask = {this.addTask}

				/>
				<ul>
					<h1 className="foo">I am learning react</h1>
					{
						this.state.tasks.map((task , index) => {
						return <ToDoItem 
							clickHandler = {this.changeStatus} 
							index = {index} 
							key= {index} 
							detail = {task}  
							deleteTask = {this.deleteTask}
							editTask = {this.editTask}/>
					})
					}
					
				</ul>	
			</section>	
			)
	}
}

ReactDOM.render(<ToDoList/> , document.getElementById('root'))
