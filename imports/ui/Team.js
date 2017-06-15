import React, { Component } from 'react';
import { createContainer } from "meteor/react-meteor-data";
import { Teams } from "../api/teams";
import { Members } from "../api/members";
import { browserHistory } from "react-router";
import { Meteor } from "meteor/meteor";

import PrivateHeader from "./PrivateHeader";

class Team extends Component {
    render() {
        const url = Meteor.absoluteUrl() + this.props.location.pathname.slice(1);
        return (
            <div>
                <PrivateHeader title="Signifly" />
                <div className="container">
                    <div className="row main-content">
                        <div className="url-link">
                            Share Team: <a href={url} target="_blank">{url}</a>
                        </div>
                        <div className="selected-team-title center-align">
                            <h5>YOUR SELECTED TEAM</h5>
                        </div>
                        {this.props.teamMembers.length !== 0 ? 
                        this.props.teamMembers.map((member, index) => {
                            return(
                                <div key={index} className="col s12 m6 l4 team-member">
                                    <div className="card sticky-action">
                                        <div className="card-image waves-effect waves-block waves-light">
                                            <img className="activator" src={member.pic}/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-name">{member.name}</span>
                                            <span className="card-title activator grey-text text-darken-4">{member.role}<i className="material-icons right">more_vert</i></span>
                                            <a href={"mailto:" + member.email} target="_blank"><i className="material-icons">email</i></a>
                                        </div>
                                        <div className="card-reveal">
                                            <span>{member.name}</span>
                                            <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                                            <p>{member.info}</p>
                                        </div>
                                        <div className="card-action">
                                            <a className="activator" style={{cursor: "pointer"}}>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        : 
                        <div>
                            <p>You have nothing to do here.</p>
                            <a onClick={() => browserHistory.replace("/")} className="waves-effect waves-light btn-large">Button</a>
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default createContainer((props) => {
    Meteor.subscribe("teams");
    Meteor.subscribe("members");

    const team = Teams.find({_id: props.params.id}).fetch()[0];
    let teamMembers = [];
    if (team) {
        team.members.map((member, index) => {
            let memberObj = (Members.find({_id: member}).fetch()[0]);
            teamMembers.push(memberObj);
        });
    }
    return {
        teamMembers
    };
}, Team );