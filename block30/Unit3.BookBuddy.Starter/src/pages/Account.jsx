/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useEffect, useState } from "react"
import GoToButton from "../components/GoToButton";
import BookDisplay from "../components/BookDisplay";
import { getAccount } from "../API/api";
import { getReservations } from "../API/api";

export default function Account({ token, setToken, setBookId, loading, setLoading }) {

    const [user, setUser] = useState({})
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        if (!token) return;
        getAccount(token, setUser, setLoading);
    }, [token])

    useEffect(() => {
        if (!token) { return };

        getReservations(token, setReservations, setLoading);

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

            <BookDisplay filter={((c) => reservations.find((f) => f.title == c.title))}
                setBookId={setBookId} setLoading={setLoading} />

        </div>
    )

}