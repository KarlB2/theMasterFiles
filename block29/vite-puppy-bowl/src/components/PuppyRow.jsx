import { Link } from "react-router-dom"

export default function PuppyRow({ api, pup, pupId, setPupId }) {
    const thisId = pup.id;

    const deletePup = async () => {
        try {
            const response = await fetch(
                `${api}/players/${thisId}`,
                {
                    method: 'DELETE',
                }
            );
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <tr>
            <td>{pup.name}</td>
            <td>{pup.id}</td>
            <td>{pup.breed}</td>
            <td>{pup.status}</td>
            <td> <Link to="/PuppyDetails" onClick={() => setPupId(thisId)}>See More</Link></td>
            <td> <button onClick={deletePup}>Delete Forever!!!</button></td>
        </tr>
    )
}