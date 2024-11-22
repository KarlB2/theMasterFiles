import { useState, useEffect } from "react";
import PuppyTable from "../components/PuppyTable";

export default function AllPuppies({ pupId, setPupId, api }) {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])

    useEffect(() => {
        const getPuppyList = async () => {
            try {
                const response = await fetch(
                    `${api}/players`
                );
                const result = await response.json();
                const players = result.data.players;
                const filturedResult = players.filter((e) => (e.name).includes(search))
                setList(filturedResult)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        getPuppyList();

    });



    return (
        <div>
            <h2>Good Doggos</h2>
            <label>
                Search:
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </label>
            {loading ? (
                <p>Loading</p>
            ) : (
                <PuppyTable puppies={list} pupId={pupId} setPupId={setPupId} api={api} />
            )}
        </div>
    )
}