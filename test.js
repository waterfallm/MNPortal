//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://1x2hosting:1x2hosting@cluster0-doi5v.mongodb.net/MNHosting?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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

 
var MN_list =  mongoose.model('mnrec', MNRecSchema);

MN_list.find({}, 'Coin VPSServer MNServer Command Output create_date') 
.populate('author')
.exec(function (err, list_masternodes) {
  if (err) { return next(err); }

if(list_masternodes.length == 0) {
    console.log("No record found")
    return
}
var i
for (i = 0;i<list_masternodes.length; i++) {

    console.log(list_masternodes[i].Coin + ':' + list_masternodes[i].VPSServer + ':' + list_masternodes[i].MNServer + ':' + list_masternodes[i].Command );

}


})