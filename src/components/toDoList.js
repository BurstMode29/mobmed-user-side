import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        ToDo: state.ToDo
    }
}

const toDoList = (props) => {
    const addToList = (ToDo) => {
        props.dispatch({ type: "ADD_TO_DO", data: ToDo })
    }

    return (
        <div>
            <div className="ToDoList">
                <div>ADD TO-DO</div>
                <ol>
                    {props.ToDo.map(
                        i => <div> <button onClick={() => addToList(i)}>+</button></div>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(toDoList);