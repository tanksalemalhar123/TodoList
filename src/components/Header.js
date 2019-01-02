import React from 'react';
import TodoImage from './Todo.png';

class Header extends React.Component{
    render(){
        return(
            <div>
            <div>
                <img src={TodoImage} style={{width:'11em'}} alt="Todo_image"/>
            </div>
            <div >
               
                <center>
                    <h1 style={{padding:'0.5em',color:'#409FA9',fontSize:'2.6em'}}>
                        React Todo
                    </h1>
                   
                </center>
            </div>
            </div>
        );
    }
}

export default Header;