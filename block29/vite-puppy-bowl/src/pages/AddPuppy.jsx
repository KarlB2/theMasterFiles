import { Navigate } from "react-router-dom"
import { useState } from "react"

export default function AddPuppy({ pupId, setPupId, api }) {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [status, setStatus] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                `${api}/players`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        breed: breed,
                        imageUrl: imageUrl
                    })
                });
            const result = await response.json();
        } catch (error) {
            setErrorMsg(error)
        }
    }


    return (
        <div>
            <h2>Add Puppy</h2>
            {errorMsg == null && <p>{errorMsg}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name <input type="text" value={name}
                        onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Breed <input type="text" value={breed}
                        onChange={(e) => setBreed(e.target.value)} />
                </label>
                <label>
                    Status <input type="text" value={status}
                        onChange={(e) => setStatus(e.target.value)} />
                </label>
                <label>
                    Image URL <input type="text" value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}