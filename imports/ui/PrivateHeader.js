import React from "react";
import { Accounts } from "meteor/accounts-base";
import { createContainer } from "meteor/react-meteor-data";
import { Session } from "meteor/session";

export const PrivateHeader = (props) => {
    return (
        <div>
            <div >
                <h1>{props.title}</h1>
                <button onClick={() => props.handleLogout()}>Logout</button>
            </div>
        </div>
    );
};


export default createContainer(() => {
    return {
        handleLogout: () => Accounts.logout(),
    };
}, PrivateHeader);