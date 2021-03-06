import React, { Component } from 'react';
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

import { Members } from "../api/members";
import TeamListHeader from "./TeamListHeader";
import TeamMember from "./TeamMember";


class TeamMemberList extends Component {
    render() {
        return (
            <div className="team-member-list">
                <TeamListHeader/>
                <div className="row">
                    {this.props.members.length === 0 ? <p className="center-align">There is no team here at the moment... Come back later!</p>
                    : this.props.members.map((member, index) => {
                        return <TeamMember key={index} member={member} selectMember={this.props.selectMember}/>
                    })}
                </div>
            </div>
            
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe("members");

    return {
        members: Members.find({}).fetch(),
    };
}, TeamMemberList);
