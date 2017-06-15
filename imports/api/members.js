import { Monog } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import moment from "moment";
import SimpleSchema from "simpl-schema";

export const Members = new Mongo.Collection("members");

if (Meteor.isServer) {
    Meteor.publish("members", function () {
        return Members.find({});
    });
}

Meteor.methods({
    "members.insert"() {
        if (!this.userId) {
            throw new Meteor.Error("not-authorized");
        }

        return Members.insert({
            pic: "",
            name: "",
            email: "",
            info: ""
        });
    },
    "members.remove"(_id) {
        if (!this.userId) {
            throw new Meteor.Error("not-authorized");
        }

        new SimpleSchema({
            _id: {
                type: String,
                min: 1
            }
        }).validate({ _id });

        Members.remove({ _id, userId: this.userId });
    },
});