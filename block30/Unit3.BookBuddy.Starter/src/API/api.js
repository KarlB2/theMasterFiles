const api = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api"

export async function getAccount(token, setUser, setLoading) {
    fetch(`${api}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(response => response.json())
        .then(result => {
            setUser(result)
            setLoading(false)
        })
        .catch(console.error)
}

export async function getBooks(filter, setBooks, setLoading) {
    fetch(`${api}/books`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(reply => {
            setBooks(reply.books.filter((f) => filter ? filter(f) : true))
            setLoading(false)
        })
        .catch(console.error)
}

export async function postLogin(email, password, setToken) {

    fetch(`${api}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(response => response.json())
        .then(result => {
            setToken(result.token)
        })
        .catch(console.error);
}

export async function getReservations(token, setReservations, setLoading) {
    fetch(`${api}/reservations`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(response => response.json())
        .then(result => {
            setReservations(result.reservation)
            setLoading(false)
        })
        .catch(console.error)
}

export async function postRegister(firstName, lastName, email, password, setToken) {
    fetch(`${api}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password
        })
    }).then(response => response.json())
        .then(result => {
            setToken(result.token);
        })
        .catch(console.error);

}

export async function getBookDetails(bookId, setBook, setLoading) {
    fetch(`${api}/books/${bookId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            setBook(result.book)
            setLoading(false)
        })
        .catch(console.error);
};

export async function patchBookReservation(bookId, token) {
    fetch(`${api}/books/${bookId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            available: false,
        })
    })
        .catch(console.error);
}

export async function deleteReservation(reservationId, token) {
    //Returns a book to library
    fetch(`${api}/reservations/${reservationId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(console.error);
}