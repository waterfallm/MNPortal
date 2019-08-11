// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var MNRecSchema = mongoose.Schema({
    Coin: {
        type: String,
        required: true
    },
    VPSServer: {
        type: String,
        required: true
    },
    MNServer: {
        type: String,
        required: true
    },
    Command: {
        type: String,
        required: true
    },
    Output: JSON,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var MNRec = module.exports = mongoose.model('mnrec', MNRecSchema);
module.exports.get = function (callback, limit) {
    MNRec.find(callback).limit(limit);
}