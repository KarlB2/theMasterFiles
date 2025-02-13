const pg = require('pg')
const express = require('express')
const PORT = process.env.PORT || 3000;

const { Client } = pg;

const client = new Client({
    user: 'karl',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'icecream',
});

const app = express();

//App Routes
app.use(express.json());
app.use(require('morgan')('dev'));

app.post('/api/flavors', async (req, res, next) => {
    try {
        const { name } = req.body
        console.log(name)
        const SQL = "INSERT INTO flavors(name) VALUES($1);"
        const response = await client.query(SQL, [name])
        res.json(response.rows[0])

    } catch (error) {
        console.error(error)
    }
});

app.get('/api/flavors', async (req, res, next) => {
    try {
        const SQL = `SELECT * from flavors ORDER BY created_at DESC;`
        const response = await client.query(SQL);
        res.json(response.rows)
    } catch (error) {
        console.error(error)
    }
});
app.get('/api/flavors/:id', async (req, res, next) => {
    try {
        const SQL = `SELECT * from flavors WHERE id = ${req.params.id};`
        const response = await client.query(SQL);
        res.send(response.rows)
    } catch (error) {
        console.error(error)
    }
});

app.delete('/api/flavors/:id', async (req, res, next) => {
    try {
        const SQL = "DELETE FROM flavors WHERE id = $1;"
        await client.query(SQL, [req.params.id])
    } catch (error) {
        console.error(error)
    }
});

app.put('/api/flavors/:id', async (req, res, next) => {
    try {
        const { name, favorite } = await req.body;
        console.log("hello")
        const SQL = "UPDATE flavors SET name = $1, favorite = $2 WHERE id = $3 RETURNING *;";
        const response = await client.query(SQL, [name, favorite, req.params.id])
        res.json(response.rows[0])
    } catch (error) {
        console.error(error)
    }
})


//Intitates the program
async function init() {
    try {
        await client.connect();
        console.log('connected to database');

        //Creating Tables
        const SQL = `
    DROP TABLE IF EXISTS flavors;
    
    CREATE TABLE flavors(
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now(),
        name VARCHAR(255) NOT NULL,
        favorite BOOLEAN DEFAULT false
        );
        
        INSERT INTO flavors(name) VALUES('vinilla ');
        INSERT INTO flavors(name) VALUES('cocolate');
        INSERT INTO flavors(name) VALUES('mint');
        `
        await client.query(SQL);

    } catch (error) {
        console.error(error)
    }
}
init();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});