import { Monog } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import moment from "moment";

export const Teams = new Mongo.Collection("teams");

if (Meteor.isServer) {
    Meteor.publish("teams", function () {
        return Teams.find({});
    });
}

Meteor.methods({
    "teams.insert"(members) {
        if (!this.userId) {
            throw new Meteor.Error("not-authorized");
        }

        return Teams.insert({
            userId: this.userId,
            members: members,
            createdAt: moment().valueOf()
        });
    },
    "teams.remove"(_id) {
        if (!this.userId) {
            throw new Meteor.Error("not-authorized");
        }

        new SimpleSchema({
            _id: {
                type: String,
                min: 1
            }
        }).validate({ _id });

        Teams.remove({ _id, userId: this.userId });
    },
});