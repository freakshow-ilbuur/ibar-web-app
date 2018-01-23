
require('dotenv').config();
module.exports = {
	host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database :process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    ssl:true,
    max:80,
    idleTimeout:30000
}