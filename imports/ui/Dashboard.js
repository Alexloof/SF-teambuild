import React from "react";
import { createContainer } from "meteor/react-meteor-data";
import { Teams } from "../api/teams";

import PrivateHeader from "./PrivateHeader";
import TeamMemberList from "./TeamMemberList";
import TeamTill from "./TeamTill";


class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMembers: []
        }
    }
    selectMember(member) {
        let members = this.state.selectedMembers;
        members.push(member);
        this.setState({
            selectedMembers: members
        });
    }
    removeSelectedMember(_id) {
        let newMembers = [];
        this.state.selectedMembers.map((member, index) => {
            if (member._id !== _id) {
                newMembers.push(member);
            }
        });
        this.setState({
            selectedMembers: newMembers
        });
    }
    render() {
        return (
            <div>
                <PrivateHeader title="Signifly" />
                <div className="row main-content">
                    <div className="col s12 m8">
                        <TeamMemberList selectMember={this.selectMember.bind(this)}/>
                    </div>
                    <div className="col s12 m4">
                        <div className="team-till">
                            <TeamTill selectedMembers={this.state.selectedMembers} removeSelectedMember={this.removeSelectedMember.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default createContainer(() => {
    Meteor.subscribe("teams");

    return {
    };
}, DashBoard);
