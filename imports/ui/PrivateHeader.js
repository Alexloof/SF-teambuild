import React from "react";
import { Accounts } from "meteor/accounts-base";
import { createContainer } from "meteor/react-meteor-data";

export const PrivateHeader = (props) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo"><img style={{height: "60px"}} src="/images/logo.PNG" alt=""/> </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Team</a></li>
                        <li><a href="/" onClick={() => props.handleLogout()}>Logout</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};


export default createContainer(() => {
    return {
        handleLogout: () => Accounts.logout(),
    };
}, PrivateHeader);