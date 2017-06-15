import React, { Component } from 'react';
import moment from "moment";


class TeamMember extends Component {
    render() {
        return (
            <div className="col s12 m6 team-member">
                <div className="card sticky-action">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={this.props.member.pic}/>
                    </div>
                    <div className="card-content">
                        <span className="card-name">{this.props.member.name}</span>
                        <span className="card-title activator grey-text text-darken-4">{this.props.member.role}<i className="material-icons right">more_vert</i></span>
                        <a href={"mailto:" + this.props.member.email} target="_blank"><i className="material-icons">email</i></a>
                    </div>
                    <div className="card-reveal">
                        <span>{this.props.member.name}</span>
                        <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                        <p>{this.props.member.info}</p>
                    </div>
                    <div className="card-action">
                        <a style={{cursor: "pointer"}} onClick={() => this.props.selectMember(this.props.member)}>Select</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamMember;
