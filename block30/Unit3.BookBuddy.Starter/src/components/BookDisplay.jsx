import BookBlock from "./BookBlock";
import { useState, useEffect } from "react";

export default function BookDisplay({ setBookId, setLoading, loading, api, filter }) {
    const [books, setBooks] = useState([])

    useEffect(() => {

        async function getBooks() {
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
        getBooks();
    })

    return (
        <>
            {
                loading ? <p>Loading</p> : (
                    <div id="book-display">
                        {books.length < 1 && <p>Sorry, we could not find any books</p>}
                        {books.map((element) => (<BookBlock book={element} setBookId={setBookId} setLoading={setLoading} />))}

                    </div>
                )
            }
        </>
    )
}