/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useEffect, useState } from "react"
import GoToButton from "../components/GoToButton";
import BookDisplay from "../components/BookDisplay";

export default function Account({ token, setToken, setBookId, api, loading, setLoading }) {

    const [user, setUser] = useState({})
    const [books, setBooks] = useState([])

    useEffect(() => {
        if (!token) return;

        async function getAccount() {
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

        getAccount();
    }, /*I'm proud of this one*/[token])

    useEffect(() => {
        if (!token) { return };

        async function getBooks() {
            fetch(`${api}/reservations`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }).then(response => response.json())
                .then(result => {
                    setBooks(result.reservation)
                    setLoading(false)
                })
                .catch(console.error)
        }

        getBooks();

    }, [user])

    return (
        <div>
            {loading ? <p>Loading...</p> :
                (
                    <>
                        <h2>{user.firstname}'s Profile</h2>
                        <h3>Name: {user.firstname} {user.lastname}</h3>
                        <h2>Books Checked Out</h2>
                    </>
                )}

            <BookDisplay filter={((c) => books.find((f) => f.title == c.title))}
                api={api} setBookId={setBookId} setLoading={setLoading} />

        </div>
    )

}