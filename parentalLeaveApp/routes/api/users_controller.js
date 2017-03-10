var express = require('express');
var User = require('../../models/user');
var router = express.Router();

router.get('/', index);
router.post('/', create);
router.post('/update_status/:id', updateStatus);

var CREATE_FIELDS = ['username', 'first_name', 'last_name', 
	'facebook_img_url', 'children_amount', 'city', 
	'pl_started_date', 'distance_to_show_in_km', 'title', 
	'gender', 'status'];

function index(req, res, next) {
	console.log('in index');
	users = User.findAll().then(function(users) {
		console.log('users = ', users.length);
		res.send( { res: users } );
	});
}

function create(req, res, next) {
	console.log('req.body  = ', req.body);
	User.create(req.body, {fields: CREATE_FIELDS}).then(function(user) { 
		res.send({ id: user.dataValues.id });
		console.log('A new user was created: ', user.dataValues); 
	}).catch(function(err) {
		console.log('an error occured on creating a new user: ', err);
		res.send(500);
	});
}

function updateStatus(req, res, next) {
	var newStatus = req.body.new_status;
	console.log('newStatus = ', newStatus);
	//TODO: raise if newStatus null

	User.findById(req.params.id).then(function(user) {
		user.update({ status: newStatus});
	}).catch(function(err) {
		console.log('an error occured while trying to change status: ', err);
		res.send(500);
	})
	res.send( { func: 'updateStatus'} );
}

module.exports = router;
