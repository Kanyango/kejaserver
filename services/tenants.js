
'use strict';
var mongoose = require('mongoose');
var multer = require('multer');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

var tenants = {

	create : function(req , res , next)
	{
		var id = req.body.apartment;
	
		var fieldsToSet = 
				{
					apartment    : mongoose.Types.ObjectId(id),
					tenant_name  : req.body.tenant_name,
			       		tenant_phone : req.body.tenant_phone,
					house_no     : req.body.house_no,
					move_in      : req.body.move_in,
					status       : 'active'
				};

		        req.app.db.models.Tenants.create(fieldsToSet ,
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
			tenant_name  : req.body.tenant_name,
			tenant_phone : req.body.tenant_phone,
			house_no     : req.body.house_no,
			move_in      : req.body.move_in
		};

		var options = { new : true };

		req.app.db.models.Tenants.findByIdAndUpdate(
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

		req.app.db.models.Tenants.find({apartment: mongoose.Types.ObjectId(id)},
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
		req.app.db.models.Tenants.findById(id,
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
		req.app.db.models.Tenants.findByIdAndRemove(id,
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
module.exports = tenants;
