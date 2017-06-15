import { Monog } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

export const Members = new Mongo.Collection("members");

if (Meteor.isServer) {
    Meteor.publish("members", function () {
        return Members.find({});
    });
}

Meteor.methods({
    "members.insert"(pic, name, email, info, role) {
        if (!this.userId) {
            throw new Meteor.Error("not-authorized");
        }

        new SimpleSchema({
            pic: {
                type: String,
            },
            name: {
                type: String,
            },
            email: {
                type: String,
            },
            info: {
                type: String,
            },
            role: {
                type: String,
            },
        }).validate({ pic, name, email, info, role });

        Members.insert({
            pic,
            name,
            email,
            info,
            role
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