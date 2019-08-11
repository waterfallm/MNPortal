var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Setup schema
var MNRecSchema = new Schema (
    {
        Coin: {type: String, required: true},
        VPSServer: {type: String,required: true},
        MNServer: {type: String,required: true},
        Command: {type: String,required: true},
        Output: JSON,
        create_date: {type: Date,default: Date.now}
    }
);

//Export model
module.exports = mongoose.model('mnrec', MNRecSchema);