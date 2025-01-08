// imports here for express and pg
import express from 'express'
import pg from 'pg'

const PORT = process.env.PORT || 3000;

const { Client } = pg;
const client = new Client({
    user: 'karl',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'acme_hr_db',
});

const app = express();

// static routes here (you only need these for deployment)
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')))
app.use(express.static(path.join(__dirname, '../client/dist')));

// app routes here
app.get('/api/employees', async (req, res) => {
    // run a query
    const { rows } = await client.query("select * from employees");

    if (rows.length === 0) {
        console.log("no results found");
    }

    res.json(rows);
})

async function init(params) {

    await client.connect();
    const SQL = `
    DROP TABLE IF EXISTS employees;
    create table employees(
	    id serial primary key,
	    name varchar(50) not null,
	    admin boolean not null default false
    );
    insert into employees (name, admin) values('Karl', true);
    insert into employees (name, admin) values('Bob', false);
    `

    await client.query(SQL)
    console.log("Query Seeded")
    app.listen(PORT, () => {
        console.log(`now listening on port ${PORT}`);
    });

};

init();