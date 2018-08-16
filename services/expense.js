
'use strict';
var mongoose = require('mongoose');
var multer = require('multer');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

var expense = {

	create : function(req , res , next)
	{
		var id = req.body.apartment;

		var fieldsToSet = 
				{
					title : req.body.title,
					apartment  : mongoose.Types.ObjectId(id),
			                amount : req.body.amount,
					paid_to : req.body.paid_to,
					expense_date : req.body.expense_date
				};

		        req.app.db.models.Expense.create(fieldsToSet ,
		            function(err ,  docs){

		                if(err)
		                {
		                    return next(err);
		                }
		                res.status(200).json(docs);
		            });
		    
	},
	update : function(req , res , next)
	{
		var id = req.params.id;
		var fieldsToSet =
		{
			title : req.body.title,
			amount : req.body.amount,
		        paid_to : req.body.paid_to,
		        expense_date : req.body.expense_date
		};

		var options = { new : true };

		req.app.db.models.Expense.findByIdAndUpdate(
			mongoose.Types.ObjectId(id) , fieldsToSet ,
			options , function(err , docs){
				if(err)
		    	{
		    		return next(err);
		    	}
			 res.status(200).json(docs);
			});
	  },
	read : function(req , res , next)
	{
		req.app.db.models.Expense.find({apartment: req.params.id},
		    function(err , docs)
			{
				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},
	
	single : function(req , res , next)
	{
		var id = mongoose.Types.ObjectId(req.params.id);
		req.app.db.models.Expense.findById(id,
		    function(err , docs)
			{
				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	},
    remove : function(req , res , next)
	{
		var id =  mongoose.Types.ObjectId(req.params.id);
		req.app.db.models.Expense.findByIdAndRemove(id,
		    function(err , docs)
			{
				if(err)
				{
					return next(err);
				}
				res.status(200).json(docs);
			});
	}
}
module.exports = expense;
