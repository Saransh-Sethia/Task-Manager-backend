const bcrypt = require('bcryptjs');

const password = '12345';


const run = async() => {
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt);

console.log('salt',salt);
console.log('hashedPassword',hashedPassword)

console.log(await bcrypt.compare(password, hashedPassword))

};

run();