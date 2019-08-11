var MN_list = require('../models/MNCommand.js');


// Display list of all MNInstances.
exports.MN_list = function(req, res,next) {


MN_list.find({}, 'Coin VPSServer MNServer Command Output create_date') 
.populate('author')
.exec(function (err, list_masternodes) {
  if (err) { return next(err); }
  //Successful, so render
 console.log (list_masternodes[0].MNServer);
 console.log (list_masternodes[1].MNServer);
 res.render( 'MNList' ,{ title: 'Masternode List',MNlist: list_masternodes } );

})
}