
const express = require('express')
const app = express()
const port = 3000

app.get('/', async(req, res) => {
  try {
    const Pool = require("pg").Pool;
    const proConfig = {
      connectionString: "postgres://uhcfpauwitnqmb:d4c0bc4a8018b97db48978e543ae84f9d9f03547724f47f3613abeb24280c1ba@ec2-54-158-232-223.compute-1.amazonaws.com:5432/d95qsia49lljk2",
      ssl: {
        rejectUnauthorized: false
      }
    }

    const pool = new Pool(proConfig);

    module.exports = pool;
    const response = await pool.query('SELECT * FROM users')
    await pool.end()

    res.send(response.rows)
  } catch (Exception) {
    res.send("error")
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})