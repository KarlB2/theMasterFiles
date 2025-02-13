const {
    client,
    createTables,
    seedData,
    insertRestaurant,
    insertCustomer,
    insertReservation,
    fetchCustomers,
    fetchRestaurants,
    fetchReservations,
    deleteReservation,
} = require('./db')

const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

//App Routes
app.use(express.json());
app.use(require('morgan')('dev'));

app.post('/api/reservations', async (req, res, next) => {
    try {
        const { date, party_count, restaurant, customer } = req.body
        console.log(date, party_count, restaurant, customer)
        const response = await insertReservation(date, party_count, restaurant, customer)
        res.status(201).json(response)
    } catch (error) {
        console.error(error)
    }
});

app.get('/api/restaurants', async (req, res, next) => {
    try {
        const response = await fetchRestaurants();
        res.json(response)
    } catch (error) {
        console.error(error)
    }
});

app.get('/api/customers', async (req, res, next) => {
    try {
        const response = await fetchCustomers();
        res.json(response)
    } catch (error) {
        console.error(error)
    }
});

app.get('/api/reservations', async (req, res, next) => {
    try {
        const response = await fetchReservations();
        res.json(response)
    } catch (error) {
        console.error(error)
    }
});

app.delete('/api/reservations', async (req, res, next) => {
    try {
        console.log("hello world!")
        const { reservation, customer } = req.body
        await deleteReservation(reservation, customer);
        res.status(204).json();
    } catch (error) {
        console.error(error)
    }
});





async function init() {
    await client.connect();
    console.log("Connected to database");

    await createTables();

    await seedData();


}

init();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});