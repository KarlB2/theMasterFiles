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

app.get('/api/departments', async (req, res, next) => {
    try {
        const SQL = `SELECT * from departments;`
        const response = await client.query(SQL);
        res.json(response.rows)
    } catch (error) {
        console.error(error)
    }
});

app.get('/api/employees', async (req, res, next) => {
    try {
        const SQL = `SELECT * from employees;`
        const response = await client.query(SQL);
        res.json(response.rows)
    } catch (error) {
        console.error(error)
    }
});

app.post('/api/employees', async (req, res, next) => {
    try {
        const { name, depo } = req.body
        const SQL = "INSERT INTO employees(name, department_id) VALUES($1, $2) RETURNING *;"
        const response = await client.query(SQL, [name, depo])
        res.json(response.rows[0])

    } catch (error) {
        console.error(error)
    }
});

app.put('/api/employees/:id', async (req, res, next) => {
    try {
        const { name, depo } = await req.body;
        const SQL = "UPDATE employees SET name = $1, department_id = $2 WHERE id = $3 RETURNING *;";
        const response = await client.query(SQL, [name, depo, req.params.id])
        res.json(response.rows[0])
    } catch (error) {
        console.error(error)
    }
})

app.delete('/api/employees/:id', async (req, res, next) => {
    try {
        const SQL = "DELETE FROM employees WHERE id = $1;"
        await client.query(SQL, [req.params.id])
    } catch (error) {
        console.error(error)
    }
});

//Intitates the program
async function init() {
    try {
        await client.connect();
        console.log('connected to database');

        //Creating Tables
        const SQL = `
    DROP TABLE IF EXISTS employees;
    DROP TABLE IF EXISTS departments;

    CREATE TABLE departments(
        id SERIAL PRIMARY KEY,
        name varChar(30)  NOT NULL
    );

    CREATE TABLE employees(
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now(),
        name VARCHAR(255) NOT NULL,
        department_id INT REFERENCES departments(id) ON DELETE SET NULL
    );
        INSERT INTO departments(name) VALUES('Human Resources');
        INSERT INTO departments(name) VALUES('IT');
        INSERT INTO departments(name) VALUES('Finances');

        INSERT INTO employees(name, department_id) VALUES('Billy', 1);
        INSERT INTO employees(name, department_id) VALUES('Tucker', 2);
        INSERT INTO employees(name, department_id) VALUES('Fin', 3);
        INSERT INTO employees(name, department_id) VALUES('David', 1);
        `
        await client.query(SQL);

        console.log("Tables Created");

    } catch (error) {
        console.error(error)
    }
}
init();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});