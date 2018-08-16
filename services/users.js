'use strict';
var mongoose = require('mongoose');
var passport = require('passport'); 

var user = {

	create : function(req , res , next)
	{
		console.log(req.body);
		
		if(!req.body.username || !req.body.password)
		{
			res.status(400).json({message : 'Please fill out the fields'});
		}
		req.app.db.models.User.findOne({email: req.body.username ,
			phone: req.body.phone},
			function(err , user){
				if(user)
				{
					res.status(500).json({message : 'email already exists'});
				}
			});
		var user = new req.app.db.models.User();
		user.email = req.body.username;
		user.phone = req.body.phone;
		//user.password = req.body.password;
		user.setPassword(req.body.password)
		user.save(function(err){
			if(err)
			{
				return next(err);
			}
			return res.json({token: user.generateJwt()})
		});
		//return res.json(req.body)
  },

	login : function(req , res , next)
	{
		if(!req.body.username && !req.body.password)
		{
			return res.status(400).json({message : 'Error fill out the fields'});
		}
		passport.authenticate('local' , function(err , user , info){
			if(err){
				return next(err);
			}
			if(user)
			{
				return res.json({token : user.generateJwt()});
			}
			else{
				return res.status(401).json(info);
			}
		})(req , res , next);
	},

	update : function(req , res , next)
	{
	 	var fieldsToSet = {

	 		password : req.body.password

	 	};
	 	var options = { new : true};

	 	req.app.db.models.User.findByIdAndUpdate(req.payload._id,
	 		fieldsToSet , options ,function(err , docs){
	 			if(err)
	 			{
	 				return next(err);
	 			}
	 			res.status(200).json(docs);
	 		});
	},

	readProfile : function(req  , res , next)
	{
		 if(!req.payload._id){
            res.status(401).json({
                "message" : "Unauthorized"
            });
        }
        else{

         req.app.db.models.User.findById(req.payload._id)
            .exec(function(err , user){
                res.status(200).json(user);
            });
        }
	},
	recover : function(req , res , next)
	{
		req.app.db.models.User.findById(req.payload._id)
		.exec(function(err , user){
			if(err)
			{
				return next(err);
			}
			res.status(200).json(user);
		});
	},
	sms : function(req , res ,next)
	{
		var id = req.payload._id;
		
		req.app.db.models.User.update({_id : mongoose.Types.ObjectId(id)},
					      {$inc: {smss: (req.body.items)}},
					     function(err , info){
			if(err)
			{
				return next(err);
			}
			res.status(200).json(info);
		 	});
	},
	getsms : function(req , res, next)
	{
		req.app.db.models.User.find({_id: mongoose.Types.ObjectId(req.payload._id)},
			function(err , info){
				if(err)
				{
					return next(err);
				}
				res.status(200).json(info);
			});
	}
};
module.exports = user;
