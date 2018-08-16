'use strict';

module.exports = function(app , mongoose){

	var chargesSchema = new mongoose.Schema({
		
       		apartment   : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		description : {type : String},
		amount      : {type : String},
		house       : {type : String},
		balance     : {type : String},
		month       : {type : String},
		paid        : {type : String}
	});
	app.db.model('Charges' , chargesSchema);
};
