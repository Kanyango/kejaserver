'use strict';

module.exports = function(app , mongoose){

	var paymentsSchema = new mongoose.Schema({
		
       //user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		apartment   : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		title       : {type : String},
       		house_no    : {type : String},
		amount      : {type : String},
                balance     : {type : String},
		month       : {type : String},
		amount_paid : {type : String},
		tenant       : {type: mongoose.Schema.Types.ObjectId, ref: 'Tenants'}
	
	});
	app.db.model('Payments' , paymentsSchema);
};
