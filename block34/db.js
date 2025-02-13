const { response } = require('express');
const pg = require('pg')
const { Client } = pg;

const client = new Client({
    user: 'karl',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'amce_restaurant',
});

async function createTables() {
    const SQL = `
    DROP TABLE IF EXISTS reservations;
    DROP TABLE IF EXISTS customers;
    DROP TABLE IF EXISTS restaurants;
    
    CREATE TABLE restaurants(
        id SERIAL PRIMARY KEY,
        name varChar(30) NOT NULL
    );

    CREATE TABLE customers(
        id SERIAL PRIMARY KEY,
        name varChar(30) NOT NULL
    );

    CREATE TABLE reservations(
        id SERIAL PRIMARY KEY,
        date DATE NOT NULL,
        party_count INT NOT NULL,
        restaurant_id INT REFERENCES restaurants(id) ON DELETE SET NULL,
        customer_id INT REFERENCES customers(id) ON DELETE SET NULL
    );
        `
    await client.query(SQL);

    console.log("Tables Created")
}

async function seedData() {
    await insertRestaurant('Big Papas Pizzeria')
    await insertRestaurant("Don le Bomb")
    await insertRestaurant("Finicees")

    await insertCustomer("Kyle")
    await insertCustomer("Charlotte")
    await insertCustomer("Micheal")

    await insertReservation('2024-02-13', 5, 1, 3)
    await insertReservation('2024-02-13', 5, 2, 1)
    await insertReservation('2024-02-13', 5, 3, 2)
    await insertReservation('2024-02-13', 5, 3, 1)
    await insertReservation('2024-02-13', 5, 2, 3)

    console.log("Data seeded")
}

const insertRestaurant = async (name) => {
    try {
        const SQL = "INSERT INTO restaurants(name) VALUES($1) RETURNING *;";
        const response = await client.query(SQL, [name]);
        return response.rows[0];
    } catch (err) {
        if (err.code === "22P02") throw new Error("INVALID_DATA_TYPE");
        throw new Error("DATABASE_ERROR");
    }
};

const insertCustomer = async (name) => {
    try {
        const SQL = "INSERT INTO customers(name) VALUES($1) RETURNING *;";
        const response = await client.query(SQL, [name]);
        return response.rows[0];
    } catch (err) {
        if (err.code === "22P02") throw new Error("INVALID_DATA_TYPE");
        throw new Error("DATABASE_ERROR");
    }
};

const insertReservation = async (date, party_count, restaurant, customer) => {
    try {
        const SQL = "INSERT INTO reservations(date, party_count, restaurant_id, customer_id) VALUES($1, $2, $3, $4) RETURNING *;";  // Fixed placeholder $1
        const response = await client.query(SQL, [date, party_count, restaurant, customer]);
        return response.rows[0];
    } catch (err) {
        if (err.code === "22P02") throw new Error("INVALID_DATA_TYPE");
        throw new Error("DATABASE_ERROR");
    }
};

const fetchRestaurants = async () => {
    try {
        const SQL = `SELECT * from restaurants;`
        const response = await client.query(SQL);
        return response.rows;
    } catch (err) {
        if (err.code === "22P02") throw new Error("INVALID_DATA_TYPE");
        throw new Error("DATABASE_ERROR");
    }

}

const fetchCustomers = async () => {
    try {
        const SQL = `SELECT * from customers;`
        const response = await client.query(SQL);
        return response.rows;
    } catch (err) {
        if (err.code === "22P02") throw new Error("INVALID_DATA_TYPE");
        throw new Error("DATABASE_ERROR");
    }

}

const fetchReservations = async () => {
    try {
        const SQL = `SELECT * from reservations;`
        const response = await client.query(SQL);
        return response.rows;
    } catch (err) {
        if (err.code === "22P02") throw new Error("INVALID_DATA_TYPE");
        throw new Error("DATABASE_ERROR");
    }

}

const deleteReservation = async (reservation_id, customer_id) => {
    try {
        const SQL = `DELETE FROM reservations WHERE id = $1 AND customer_id = $2;`
        await client.query(SQL, [reservation_id, customer_id]);
    } catch (err) {
        if (err.code === "22P02") throw new Error("INVALID_DATA_TYPE");
        throw new Error("DATABASE_ERROR");
    }
}

module.exports = {
    client,
    createTables,
    seedData,
    insertRestaurant,
    insertCustomer,
    insertReservation,
    fetchRestaurants,
    fetchCustomers,
    fetchReservations,
    deleteReservation
}