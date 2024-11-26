/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useEffect, useState } from "react";
import GoToButton from "../components/GoToButton";

export default function SingleBook({ token, bookId, api, loading, setLoading }) {
    const [book, setBook] = useState({})
    const [reserved, setReserved] = useState(false)

    useEffect(() => {
        async function getBookDetails() {
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
        getBookDetails();
    }, [loading])

    useEffect(() => {
        if (!book) return;

        async function getReservations() {
            fetch(`${api}/reservations`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }).then(response => response.json())
                .then(result => {
                    setReserved(result.reservation.find((f) => f.title == book.title))
                })
                .catch(console.error)
        };

        getReservations();

    }, [book])

    async function reserveBook() {
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

    async function returnBook() {
        //Returns a book to library
        fetch(`${api}/reservations/${reserved.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .catch(console.error);
    }


    return (
        <div>
            {loading ? <p>loading</p> :
                <>
                    <div id="gen-details">
                        <img src={book.coverimage} alt="" />
                        <div>
                            <h2>Title: {book.title}</h2>
                            <h3>Author: {book.author}</h3>
                            <h3>#{bookId}</h3>
                            <h3>Available: {book.available || reserved ? "Available" : "Unavailable"}</h3>
                            {book.available ? (
                                <GoToButton text="Reserve this Book" setLoading={setLoading}
                                    toRoute={!token && "/LoginRegister"} func={token && reserveBook} />
                            ) : (
                                <GoToButton setLoading={setLoading} func={returnBook} toRoute={'/BookDetails'} disabled={!reserved} text={reserved ? "Return Book" : "Unavailable"} />
                            )
                            }
                        </div>
                        <div>
                            <h3>Description: {book.description}</h3>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}