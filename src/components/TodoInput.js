import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoInput extends React.Component{
constructor(props){
    super(props);
    this.state={
      
        userInput: '',
        list: []
    }
}

changeUserInput(input){

    this.setState({
        userInput: input
    });
}

addTodoList(input){
    let listArray = this.state.list;
    if(input !== '')
    {
        listArray.push(input);
    }

   
    this.setState({
        list: listArray,
        userInput: '',
            
    })
}

removeTodoList(){
    let listArray= this.state.list;
    listArray.pop();
   
    this.setState({
       list: listArray,
        userInput: ''
    })
}



render(){
    return(
    <div>
        <div>
                <input value={this.state.userInput} 
                    onChange={ (e)=> this.changeUserInput(e.target.value)} 
                    type="text"
                    className="form-control"
                    placeholder="Enter the task to do"/>
                </div>
        <div className="btn-group" style={{paddingTop:'0.5em',paddingBottom:'2em'}}>
               <button style={{display:'flex'}} onClick={ ()=> this.addTodoList(this.state.userInput) } className="btn btn-primary" >Add To Todo List</button>
              <button  onClick={()=> this.removeTodoList(this.state.userInput) }  className="btn btn-danger">Delete Task</button>
            
              
        </div>
        <ul>
            {this.state.list.map( (val) => <li  className="list-group-item" style={{width:'26em'}}> {val} </li> )}
        </ul>
    </div>
    );
}
}

export default TodoInput;