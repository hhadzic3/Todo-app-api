const db = require('./src/instances/sequelize.ts');
const bcrypt = require('bcrypt'); 

function initialize() {
	db.sequelize.sync({ force: true }).then(function () {
	    dataInit().then(() => {
	        console.log("Tables created and inserted!");
	    });
	});
}

function dataInit() {
    const usersPromiseList = [
        db.users.create({id: 1, email: "hamo@gmail.com",password: bcrypt.hashSync("hamo", 10)}),
        db.users.create({id: 2, email: "memo@gmail.com",password: bcrypt.hashSync("memo", 10)})
      ];

    const todosPromiseListe = [
        db.todos.create({id:1 , name: 'Male' , description: 'primary'}),
        db.todos.create({id:2 , name: 'Female' , description: 'primary'}),
    ];

    
    
    return new Promise((resolve, reject) => {
        Promise.all(usersPromiseList)
        .then(() => Promise.all(todosPromiseListe).then(all => resolve(all))) 
        .catch(reason => reject(reason));
    });
}

exports.initialize = initialize;