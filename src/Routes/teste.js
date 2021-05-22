const proConfig = require('../Infra/configDB');
const Pool = require("pg").Pool;
const pool = new Pool(proConfig);
async function routes(fastify, options) {
    fastify.get('/banco', async function(request, reply) {
        try {
            const response = await pool.query('SELECT * FROM users');
            reply.status(200).send(response.rows)
            await pool.end();
        } catch (err) {
            throw new Error(err)
        }
    })
}
module.exports = routes;