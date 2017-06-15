import React from "react";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

class TeamListHeader extends React.Component {
    onCreateMember(e) {
        e.preventDefault();
         if (!this.refs.name.value) {
            alert("Whoops!", 'Dont forget your name!');
            return;
        }
        if (!this.refs.email.value) {
            alert("Whoops!", 'You have to write an email adress');
            return;
        }
        if (!this.refs.pic.value) {
            alert("Whoops!", 'You have to enter a picture url');
            return;
        }
        if (!this.refs.info.value) {
            alert("Whoops!", 'You have to write a description');
        } else {
            const name = this.refs.name.value.trim();
            const email = this.refs.email.value.trim();
            const pic = this.refs.pic.value.trim();
            const info = this.refs.info.value.trim();
            const role = this.refs.role.value.trim();
            this.props.meteorCall("members.insert", pic, name, email, info, role);
            this.refs.createMemberForm.reset();
            $("#createMemberModal").closeModal();
        }
        
    }
    render () {
        return (
            <div className="team-list-header">
                <div className="row"> 
                    <div className="col s5">
                        <a onClick={() => $("#createMemberModal").openModal()} className="btn-floating btn-large waves-effect waves-light btn-add"><span style={{fontSize: "25px"}}>+</span></a>
                    </div>              
                    <h5 className="col s7 team-member-list-title">OUR TEAM</h5>
                </div>

                <div id="createMemberModal" className="modal">
                    <div className="row">
                        <div className="create-member col s12 m8 offset-m2">
                            <form ref="createMemberForm" onSubmit={this.onCreateMember.bind(this)}>
                                <input type="text" ref="name" name="name" placeholder="Name" required/>
                                <input type="email" ref="email" name="email" placeholder="Email" required/>
                                <input type="text" ref="pic" name="pic" placeholder="Picture Url" required/>
                                <input type="text" ref="role" name="role" placeholder="Job role" required/>
                                <textarea id="textarea1" ref="info" placeholder="Description" className="materialize-textarea" required></textarea>
                                <button type="submit" className="btn btn-create-member">Create Member</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}

export default createContainer(() => {
    return {
        meteorCall: Meteor.call,
    };
}, TeamListHeader );