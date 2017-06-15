import React from "react";

import PrivateHeader from "./PrivateHeader";
import TeamMemberList from "./TeamMemberList";
import TeamTill from "./TeamTill";


export default () => {
    return (
        <div>
            <PrivateHeader title="Signifly" />
            <div className="row">
                <div className="col s12 m8">
                    <TeamMemberList/>
                </div>
                <div className="col s12 m4">
                    <TeamTill/>
                </div>
            </div>
        </div>
    );
};
