import React, { Component } from 'react';
import moment from "moment";


class TeamMember extends Component {
    render() {
        return (
            <div className="col s12 m6 team-member">
                <div className="card sticky-action">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="images/alexander.jpg"/>
                    </div>
                    <div className="card-content">
                        <span className="card-name">Alexander</span>
                        <span className="card-title activator grey-text text-darken-4">Frontend Developer<i className="material-icons right">more_vert</i></span>
                        <p>Email</p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                    <div className="card-action">
                        <a href="#">Select</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamMember;
