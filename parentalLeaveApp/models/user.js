var Sequelize = require('sequelize');

var connection = new Sequelize('parental_leave_app', 'root', 'dani44');

var dbFields = {
	username: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	first_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	last_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	facebook_img_url: {
		type: Sequelize.TEXT
	},
	children_amount: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	city: {
		type: Sequelize.STRING
	},
	pl_started_date: {
		type: Sequelize.DATE
	},
	distance_to_show_in_km: {
		type: Sequelize.INTEGER
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	gender: {
		type: Sequelize.CHAR,
		allowNull: false
	},
	status: {
		type: Sequelize.STRING
	}
};
var config = {};
var User = connection.define('User', dbFields);
connection.sync();
//connection.sync({force: true});

module.exports = User;
