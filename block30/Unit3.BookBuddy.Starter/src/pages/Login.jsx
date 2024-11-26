/* TODO - add your code to create a functional React component that renders a login form */
import { useState, useEffect } from "react"
import GoToButton from "../components/GoToButton"

export default function Login({ setToken, setLoading, api }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [valid, setValid] = useState(false)

    useEffect(() => {
        setValid(password && email)
    })

    async function onSubmit() {

        fetch(`${api}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(response => response.json())
            .then(result => {
                setToken(result.token)
            })
            .catch(console.error);
    }

    return (
        <div>
            <h2>Login</h2>
            <label>
                Email <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
                Password <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </label>
            {valid ? <GoToButton text="Sumbit" toRoute="/Account" func={onSubmit} setLoading={setLoading} /> :
                <button disabled={true}>Submit</button>}

        </div>
    )
}