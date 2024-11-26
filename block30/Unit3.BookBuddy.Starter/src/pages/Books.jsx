/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState, useEffect } from "react";
import BookDisplay from "../components/BookDisplay";

export default function Books({ setBookId, api, loading, setLoading }) {
    const [search, setSearch] = useState('')
    const [available, setAvailable] = useState(false)


    return (
        <div>
            <input onChange={(f) => setSearch(f.target.value)} value={search}></input>
            <button onClick={(() => setAvailable(!available))}>{available ? "Show All" : "Show Available"}</button>
            <BookDisplay filter={((f) => f.title.toLowerCase().includes(search.toLowerCase()) && (!available || f.available))} api={api} setBookId={setBookId} setLoading={setLoading} />
        </div>
    )
}