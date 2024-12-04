/* TODO - add your code to create a functional React component that renders a registration form */
import { useState, useEffect } from "react"
import GoToButton from "../components/GoToButton"
import { postRegister } from "../API/api"

export default function Register({ setToken, setLoading }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [valid, setValid] = useState(false)

    useEffect(() => {
        setValid(password && email && firstName && lastName)
    })

    return (
        <div>
            <h2>Create Account!</h2>

            <label>
                First Name <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </label>
            <label>
                Last Name <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </label> <br />
            <label>
                Email <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
                Password <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </label>
            {valid ? <GoToButton text="Sumbit" toRoute="/Account" func={(() => postRegister(firstName, lastName, email, password, setToken))} setLoading={setLoading} /> :
                <button disabled={true}>Submit</button>}

        </div>
    )
}