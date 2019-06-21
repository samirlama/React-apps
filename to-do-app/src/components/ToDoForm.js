import React from 'react';

class ToDoForm extends React.Component{
	render(){
		return(
			<section>
				<h1>This is for todoForm</h1>
				<form onSubmit = {this.props.addTask}>
					<input type="text"
						value={this.props.currentTask}
						onChange = {this.props.updateTask}

					/>
					<button type = "submit">Sumbit</button>
				</form>
			</section>	
			)
	}
}
 export default ToDoForm;