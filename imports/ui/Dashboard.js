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
                            <TeamTill selectedMembers={this.state.selectedMembers}/>
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
