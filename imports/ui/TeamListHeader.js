import React from "react";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

export const TeamListHeader = (props) => {
    return (
        <div>
            <button className="button" onClick={() => props.meteorCall("members.insert", (err, res) => {
            })}>Create Member</button>
        </div>
    );
}

export default createContainer(() => {
    return {
        meteorCall: Meteor.call,
    };
}, TeamListHeader );