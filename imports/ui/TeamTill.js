import React from "react";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import { browserHistory } from "react-router";
import { Teams } from "../api/teams";

class TeamTill extends React.Component {
    createTeam() {
        let memberIds = [];
        this.props.selectedMembers.map((member) => {
            memberIds.push(member._id);
        });
        Meteor.call("teams.insert", memberIds, (err, res) => {
            console.log(res);
            browserHistory.push(`/team/${res}`)
        });
    }
    render() {
        return(
            <div>
                <h3 className="center-align till-title">SELECTED TEAM <span className="chip">{this.props.selectedMembers.length}</span></h3>
                <ul className="collection selected-team-list z-depth-1">
                    {this.props.selectedMembers.length !== 0 ? this.props.selectedMembers.map((member, index) => {
                        return(
                            <li key={index} className="collection-item avatar">
                                <img src={member.pic} className="circle"/>
                                <span className="title">{member.name}</span>
                                <p>{member.role}</p>
                                <a style={{cursor: "pointer"}} onClick={() => this.props.removeSelectedMember(member._id)} className="secondary-content"><i className="material-icons">close</i></a>
                            </li>
                        );
                        
                    }) :
                    <li className="collection-item">
                        <p>You have not selected any team members just yet.</p>
                    </li> } 
                </ul>
                {this.props.selectedMembers.length === 0 ? 
                    <a className="waves-effect waves-light btn-large btn-build-team">Create Team</a>
                :
                    <a onClick={this.createTeam.bind(this)} className="waves-effect waves-light btn-large btn-build-team">Create Team</a>
                }
            </div>
        );       
    }
};

export default TeamTill;