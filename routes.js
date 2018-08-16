'use strict';

var mongoose = require('mongoose');
var config = require('./config');
var jwt = require('express-jwt');
var auth  = jwt({ secret : config.secret , requestProperty: 'payload'});
var passport = require('./passport');
var unit    = require('./services/unit');
var expense    = require('./services/expense');
var payments    = require('./services/payments');
var tenants    = require('./services/tenants');
var users    = require('./services/users');
var maintain    = require('./services/maintain');
var refund    = require('./services/refund');
var charges    = require('./services/charges');

module.exports = function(app , passport)
{   
    app.post('/unit', auth, unit.create);
    app.get('/unit', auth ,  unit.read);
    app.get('/unit/:id', auth ,unit.single);
    app.get('/allunits/:id', auth ,unit.getunits);
    app.put('/unit/:id', auth ,unit.addUnits);
    app.put('/unitexcel/:id', auth ,unit.addExcelUnits);
    app.put('/unititle/:id', auth ,unit.update);

    app.post('/expense', auth , expense.create);
    app.get('/allexpense/:id', auth,  expense.read);
    app.get('/expense/:id', auth, expense.single);
    app.put('/expense/:id', auth,  expense.update); 
    app.delete('/expense/:id', auth, expense.remove);

    app.post('/maintain', auth , maintain.create);
    app.get('/maintain/:id', auth,  maintain.read);
    app.get('/maintain/:id', auth, maintain.single);
    app.put('/maintain/:id', auth,  maintain.update); 
    app.delete('/maintain/:id', auth, maintain.remove);

    app.post('/refund', auth , refund.create);
    app.get('/refund/:id', auth,  refund.read);
    app.get('/refund/:id', auth, refund.single);
    app.put('/refund/:id', auth,  refund.update); 
    app.delete('/refund/:id', auth, refund.remove);

    app.post('/charges', auth , charges.create);
    app.get('/charges/:id', auth,  charges.read);
    app.get('/charges/:id', auth, charges.single);
    app.put('/charges/:id', auth,  charges.update); 
    app.delete('/charges/:id', auth, charges.remove);

    app.post('/payments', auth ,payments.create);
    app.get('/allpayments/:id', auth,  payments.read);
    app.get('/payments/:id', auth, payments.single);
    app.put('/payments/:id', auth ,payments.update); 
    app.delete('/payments/:id', auth,  payments.remove);

    app.post('/tenants', auth , tenants.create);
    app.get('/alltenants/:id', auth,  tenants.read);
    app.get('/tenants/:id', auth, tenants.single);
    app.put('/tenants/:id', auth , tenants.update); 
    app.delete('/tenants/:id', auth,  tenants.remove);
    
    app.post('/register', users.create);
    app.post('/login' , users.login);
    //app.get('/unit/:id', unit.get);
    //app.put('/unit/:id', unit.put);
//    app.delete('/unit/:id', unit.remove);
   
//    app.post('/session/create' , user.create);
//    app.post('/login' , user.login);
//    app.put('/login' , user.update);
    
//    app.get('/auth/facebook' , passport.authenticate('facebook'));
//    app.get('/auth/facebook/callback' , passport.authenticate('facebook',{
//        successRedirect : '/home',
//        failureRedirect  : '/'
//    }));
//    app.get('/auth/twitter' , passport.authenticate('twitter'));
//    app.get('/auth/twitter/callback' , passport.authenticate('twitter',{
//    	successRedirect : '/home',
//    	failureRedirect  : '/'
//    }));
//
//    app.get('/logout' , function(req , res){
//        	req.logout();
//        	res.redirect('/');
//        });
    	//app.all('/*', function(req, res) {res.send('process ' + process.pid + ' says hello!').end();})

};
