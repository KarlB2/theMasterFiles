/* TODO - add your code to create a functional React component that renders a login form */
import { useState, useEffect } from "react"
import GoToButton from "../components/GoToButton"
import { postLogin } from "../API/api"

export default function Login({ setToken, setLoading }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [valid, setValid] = useState(false)

    useEffect(() => {
        setValid(password && email)
    })

    return (
        <div>
            <h2>Login</h2>
            <label>
                Email <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
                Password <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </label>
            {valid ? <GoToButton text="Sumbit" toRoute="/Account" func={(() => postLogin(email, password, setToken))} setLoading={setLoading} /> :
                <button disabled={true}>Submit</button>}

        </div>
    )
}