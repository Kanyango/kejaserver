'use strict';

module.exports = function(app , mongoose){

	var tenantSchema = new mongoose.Schema({
		
       //user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated  : {type : Date,default: Date.now()},
		apartment    : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		tenant_name  : {type : String},
       		tenant_phone : {type : String},
		house_no     : {type : String},
		move_in      : {type : String},
		moved_out    : {type : String},
		status       : {type : String}

	});
	app.db.model('Tenants' , tenantSchema);
};
