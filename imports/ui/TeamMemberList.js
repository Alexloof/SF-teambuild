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
                    {this.props.members.map((member, index) => {
                        return <TeamMember key={index} member={member}/>
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
