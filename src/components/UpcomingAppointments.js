import React from "react";
import { connect } from "react-redux";
import './components.css';

const mapStateToProps = (state) => {
    return {
        upcoming: state.upcoming
    }
};

const UpcomingAppointments = (props) => {
    return (
        <div>
            <div className="acceptedHeading">Upcoming Appoinments</div>
            <div>
                {props.upcoming.map (
                    i => <div className="Accepted" key={i.name}>
                        <div className="ProfilePicture"></div>
                        {i.name} 
                    </div>
                )}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(UpcomingAppointments);