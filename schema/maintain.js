'use strict';

module.exports = function(app , mongoose){

	var maintainSchema = new mongoose.Schema({
		
       		apartment   : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		description : {type : String},
		total_cost  : {type : String},
		start_date  : {type : String},
		end_date    : {type : String}
	});
	app.db.model('Maintenance' , maintainSchema);
};
