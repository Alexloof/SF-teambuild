import React from "react";
import { Members } from "../api/members";
import { Meteor } from "meteor/meteor";

export class TeamTill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
        }
    }
    render() {
        return(
            <div>
                <h3 className="center-align till-title">SELECTED TEAM</h3>
                <ul className="collection selected-team-list z-depth-1">
                    <li className="collection-item avatar">
                        <img src="images/alexander.jpg" className="circle"/>
                        <span className="title">Alexander</span>
                        <p>Frontend Developer</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">close</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src="images/alexander.jpg" className="circle"/>
                        <span className="title">Alexander</span>
                        <p>Frontend Developer</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">close</i></a>
                    </li>
                </ul>
                <a className="waves-effect waves-light btn-large btn-build-team">Create Team</a>
            </div>
        );       
    }
};

export default TeamTill;