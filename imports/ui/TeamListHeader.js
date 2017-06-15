import React from "react";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

export const TeamListHeader = (props) => {
    return (
        <div className="team-list-header">
            <a onClick={() => props.meteorCall("members.insert")} className="btn-floating btn-large waves-effect waves-light btn-add"><span style={{fontSize: "25px"}}>+</span></a>
        </div>
    );
}

export default createContainer(() => {
    return {
        meteorCall: Meteor.call,
    };
}, TeamListHeader );