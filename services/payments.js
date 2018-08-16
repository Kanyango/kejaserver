
'use strict';
var mongoose = require('mongoose');
var multer = require('multer');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

var payments = {

	create : function(req , res , next)
	{
		
		var id = req.body.apartment;

		var fieldsToSet = 
				{
					title : req.body.title,
					apartment  : mongoose.Types.ObjectId(id),
			                amount : req.body.amount,
					house_no : req.body.house_no,
					balance : req.body.balance,
					amount_paid : req.body.amount_paid,
					month   : req.body.month,
					tenant  : mongoose.Types.ObjectId(req.body.tenant)
				};

		        req.app.db.models.Payments.create(fieldsToSet ,
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
					house_no : req.body.house_no,
					balance : req.body.balance,
					month   : req.body.month
		};

		var options = { new : true };

		req.app.db.models.Payments.findByIdAndUpdate(
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
		var id = req.params.id;

		req.app.db.models.Payments.find({apartment: mongoose.Types.ObjectId(id)},
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
		req.app.db.models.Payments.findById(id,
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
		req.app.db.models.Payments.findByIdAndRemove(id,
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
module.exports = payments;
