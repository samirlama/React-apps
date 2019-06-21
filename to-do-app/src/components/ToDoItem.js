import React from 'react';


class ToDoItem extends React.Component{
	constructor(){
		super();
		this.renderForm = this.renderForm.bind(this)
		this.renderItem = this.renderItem.bind(this)
		this.toggleState = this.toggleState.bind(this)
		this.updateItem = this.updateItem.bind(this)
		this.state = ({
			isEditing: false
		})
	}
	toggleState(){
		const { isEditing } = this.state
		this.setState({
			isEditing:!isEditing
		})
	} 

	 updateItem(evt ){
	 	evt.preventDefault();
	 	console.log(this.input.value)
	 	this.props.editTask( this.props.index , this.input.value)
	 	this.toggleState();

	 }

	renderItem(){
		return(
				<li onClick = { () =>{
									this.props.clickHandler(this.props.index)} }
									className = {this.props.detail.completed ? 'completed' : ''} >
									{this.props.detail.name}
									<button onClick = { (evt) =>{
									evt.stopPropagation();
									this.props.deleteTask(this.props.index)

								} }>Delete</button>
							<button onClick = { (evt) =>
								this.toggleState()
							} >Edit</button>	
				</li>
			  )
	}

	renderForm(){
		return(
				<form onSubmit={this.updateItem} >
					<input type="text" 
						defaultValue={this.props.detail.name}
						ref={(v) => {this.input = v}}
					 />
					<button type="sumbit">Update Item</button>
				</form> 
			  )
	}

	

	render(){
		return(
			<section>
				{
					this.state.isEditing ? this.renderForm() : this.renderItem() 
						
					}	
			</section>			
			)
	}
}
 export default ToDoItem;
 