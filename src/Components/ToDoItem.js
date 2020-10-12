import React from "react"
function ToDoItem (props){
       
        const style =   {fontStyle: "italic",
                         textDecoration: "line-through"
                        }   
        return (
            <div>
            <p style={props.item.completed ? style: null}> {props.item.text}</p>
            <input type="checkbox" checked={props.item.completed} onChange={event=>props.handleChange(props.item)}></input>
            
            </div>
        )
    
}
export default ToDoItem