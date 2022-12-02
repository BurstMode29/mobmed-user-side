import React from "react";
import { connect } from "react-redux";
import '../App.css';

const mapStateToProps = (state) => {
    return {
        ToDoList: state.ToDoList
    }
};

const addToDo = (props) => {
    return (
        <div>
            {/* <div>Reminder</div> */}
            <div>
                {props.ToDoList.map (
                    i => <div className="Notes">
                        <textarea type='message' placeholder="type here...."/> 
                    </div>
                )}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(addToDo);