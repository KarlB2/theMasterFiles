import BookBlock from "./BookBlock";
import { useState, useEffect } from "react";
import { getBooks } from "../API/api";

export default function BookDisplay({ setBookId, setLoading, loading, filter }) {
    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks(filter, setBooks, setLoading);
    }, [filter])

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