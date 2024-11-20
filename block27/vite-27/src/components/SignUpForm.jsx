import { useState, useEffect } from "react";

export default function SignUpForm({ token, setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [warning, setWarning] = useState([])

    useEffect(() => {
        const fields = [
            username,
            password
        ]

        let message = []

        function validateFeilds() {
            for (const key in fields) {
                if (fields[key].length < 8) {
                    message.push(`${fields[key]} is shorter than 8 characters`)
                }
            }
        }
        validateFeilds()

        setWarning(message)
    })


    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: 'POST',
                body: {
                    "username": username,
                    "password": password
                },
            });
            const result = await response.json();
            setToken(result.token);
            console.log(result);
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>

                {warning.map((warning) => {
                    return <h2>{warning}</h2>;
                })}

                <label>
                    Username:
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </label>
                <button>Submit</button>

            </form>

        </>
    );
}
