import './box.css';
import Row from '../row' 
import TextField from "@material-ui/core/TextField";
import ReactDOM from 'react-dom';
import React, { Component } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import InputBox from '../inputBox';

function createData(name, date, delbutton,check) 
    {
        return {name, date,delbutton,check};
    }

class Box extends Component {

    constructor(props) {
        super(props);

        this.genericRows = [];
        this.wantedName = "Wash Dishes";
    }

    addRow(rowArray,nameValue)
    {
        
        rowArray.push(createData(nameValue, Date().toLocaleString(),<button createddate = {Date().toLocaleString()} onClick = { createddate=>this.removeRow(createddate)}>Delete</button>,<Checkbox/>));
        console.log(rowArray.length);
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }

    clearRows(rowArray)
    {
        rowArray.splice(0); {/*Replace 0 with the index of date to delete*/}
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }

    removeRow(dateToFind)
    {
        let targetDate = dateToFind.target.attributes.createddate.nodeValue;
        {/*Search through the array to find which row has the exact date of the button*/}
        for(let i=0;i<this.genericRows.length;i++)
        {
            console.log();
            if(this.genericRows[i].date == targetDate)
            {
                console.log(this.genericRows[i]);
                this.genericRows.splice(i,1);
            }
        }
        this.setState(() => {
            console.log('setting state');
            return { unseen: "does not display" }
        });
    }

    editName(newValue)
    {
        this.addrow(this.genericRows);
        this.wantedName = newValue;
    }

    checkDupe(RowsArray, input)
    {
        let foundDuplicate = false;
        for(let i=0;i<this.genericRows.length;i++)
        {
            let curName = this.genericRows[i].name;
            if(curName == input)
            {
                foundDuplicate = true;
                break;
                
            }
        }
        if (!foundDuplicate) 
        {
            this.addRow(this.genericRows,input);
        } 
    }

    render() {
        return (
            <div>
            <div> {/*This div is ABOVE the box object - just a basic title header on the left side and the add/delete buttons on the right*/}
                <h2 className = "rowText" style = {{marginRight: "70%"}}>To do List</h2>
                <input data-testid="new-item-input" ref={(input) => this._inputElement = input} placeholder="Please enter a new task!"></input>
                <button data-testid="new-item-button" onClick = {() => this.checkDupe(this.genericRows, this._inputElement.value )}>Add Task</button>
                <button onClick = {() => this.clearRows(this.genericRows)}>Clear</button>
            </div>
    
            <div className = "box">
                <Row rows = {this.genericRows} createData = {createData} />
            </div>
           </div>
        );
    }
}
 
export default Box;