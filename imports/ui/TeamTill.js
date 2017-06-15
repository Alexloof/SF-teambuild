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
                SELECTED TEAM
            </div>
        );       
    }
};

export default TeamTill;