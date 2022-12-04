import React from "react";
import '../App.css';
import UpcomingAppointments from '../components/UpcomingAppointments';

const Home = () => {
    return (
        <div className="Home">
            <div className="Top">
                <div><input type='text' placeholder="Search" /></div>
                <div className="Profile1"></div>
            </div>
            <div className="Middle">
                <div className="inProgress">
                    <UpcomingAppointments />
                </div>
                <div className="Finance">Financial Status</div>
            </div>
            <div className="Bottom">
                <div className="Map">Live Map</div>
                <div className="Messages">Messages</div>
            </div>
        </div>
    )
}

export default Home;