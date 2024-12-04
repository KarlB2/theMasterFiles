/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useEffect, useState } from "react";
import GoToButton from "../components/GoToButton";
import { getReservations, getBookDetails, patchBookReservation, deleteReservation } from "../API/api";

export default function SingleBook({ token, bookId, loading, setLoading }) {
    const [book, setBook] = useState({})
    const [reservations, setReservations] = useState([])
    const [reserved, setReserved] = useState(false)

    useEffect(() => {
        getBookDetails(bookId, setBook, setLoading);
    }, [loading])

    useEffect(() => {
        if (!book) return;
        getReservations(token, setReservations, setLoading);
        setReserved(reservations.find((f) => f.title == book.title));

    }, [book])


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
                                    toRoute={!token && "/LoginRegister"} func={token && (() => patchBookReservation(bookId, token))} />
                            ) : (
                                <GoToButton setLoading={setLoading} func={(() => deleteReservation(reserved.id, token))} toRoute={'/BookDetails'} disabled={!reserved} text={reserved ? "Return Book" : "Unavailable"} />
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