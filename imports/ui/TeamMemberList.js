import React, { Component } from 'react';
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

import { Members } from "../api/members";
import TeamListHeader from "./TeamListHeader";
import TeamMember from "./TeamMember";


class TeamMemberList extends Component {
    render() {
        return (
            <div>
                <TeamListHeader/>
                TeamMemberList
                <TeamMember/>
            </div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe("members");

    return {

    };
}, TeamMemberList);
