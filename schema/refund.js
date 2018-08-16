'use strict';

module.exports = function(app , mongoose){

	var refundSchema = new mongoose.Schema({
		
       		apartment   : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		house_no : {type : String},
		refund_amount  : {type : String},
		refund_date  : {type : String},
		refund_method    : {type : String},
		tenant_name    : {type : String},
		tenant_phone   : {type : String},
	});
	app.db.model('Refund' , refundSchema);
};
