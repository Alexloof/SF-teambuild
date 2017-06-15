import React from "react";

import PrivateHeader from "./PrivateHeader";
import TeamMemberList from "./TeamMemberList";
import TeamTill from "./TeamTill";


export default () => {
    return (
        <div>
            <PrivateHeader title="Signifly" />
            <div>
                <div>
                    <TeamMemberList/>
                </div>
                <div>
                    <TeamTill/>
                </div>
            </div>
        </div>
    );
};
