'use strict';

module.exports = function(app , mongoose){

	var unitSchema = new mongoose.Schema({
		
       		user        : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		title       : {type : String},
		charges     : [],
       		unitnames   : []
	});
	app.db.model('Unit' , unitSchema);
};
