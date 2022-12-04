import React from "react";
import { connect } from "react-redux";
import './components.css';

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const List = (props) => {
    const addToList = (list) => {
        props.dispatch({ type: "ADD_TO_LIST", data: list })
    }

    return (
        <div className="List">
            <div className="appointmentsHeading">Appoinments</div>
            <ol>
                {props.list.map(
                    i => <div className="listItem" key={i.name}>
                        <div className="ProfilePhoto"></div>
                        <div className="listName">{i.name}</div>
                        <button className="listButton" onClick={() => addToList(i)}>Accept</button>
                    </div>
                )}
            </ol>
        </div>
    )
}

export default connect(mapStateToProps)(List)