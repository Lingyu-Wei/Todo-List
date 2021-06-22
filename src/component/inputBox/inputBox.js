import React, { Component } from "react";
import Items from "../items/items";

class InputBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
     
        this.addTask = this.addTask.bind(this);
    }
       
    addTask(e) {
        if (this._inputElement.value !== "") {
            var addedTask = {
                taskDescription: this._inputElement.value,
            };
         
            this.setState((prevState) => {
                return { 
                    items: prevState.items.concat(addedTask) 
                };
            });
           
            this._inputElement.value = null;
        }
             
        e.preventDefault();
     
    }

    render() {
        return (
            <div className="pageLayout">
                <div className="inputBox">
                    <form onSubmit={this.addTask}>
                        <input ref={(input) => this._inputElement = input} placeholder="Please enter a new task!"></input>
                        <button >Add Task</button>
                    </form>
                </div>
                <Items entries={this.state.items}/>
            </div>
        );
    }
}
 
export default InputBox;