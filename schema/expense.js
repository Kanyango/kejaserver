'use strict';

module.exports = function(app , mongoose){

	var expenseSchema = new mongoose.Schema({
		
                apartment   : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		dateCreated : {type : Date,default: Date.now()},
		title       : {type : String},
       		amount      : {type : String},
		paid_to     : {type : String},
		expense_date: {type : String}
		
	});
	app.db.model('Expense' , expenseSchema);
};
