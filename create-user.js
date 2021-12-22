const fs = require('fs');
const crypto = require('crypto');
const faker = require('faker');

const createUser = (name, email, password) => {
    // const hashedPassword = crypto.pbkdf2(password.toString(), 16, 1000);

    const user = {
        name,
        email,
        password
    }

    return fs.appendFile('./users.js', "\n" + JSON.stringify([user], null, 2), 
        (err) => {
            (err)
                ? console.log(error)
                : console.log('User created successfully');
        }
    )
}

for(i=0; i<50; i++) {
    createUser(
        faker.name.findName(),
        faker.internet.email(),
        Math.random()*10,
    );
}
