const { Schema, model } = require("mongoose");
const dashboardSchema = new Schema({
    name: String,
    severity: String
}, {
    versionKey: false
});

const DashboardModel = model('bugs', dashboardSchema);
module.exports = { DashboardModel };