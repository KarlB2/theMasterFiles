/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import GoToButton from "./GoToButton"

export default function Navbar({ token, setToken, setLoading }) {
    function logout() {
        setToken(null)
    }

    return (
        <div>
            <GoToButton text="Books" toRoute='/' setLoading={setLoading} />
            {token ? (<>
                <GoToButton text="Account" toRoute="/Account" setLoading={setLoading} />
                <GoToButton text="Logout" func={logout} setLoading={setLoading} toRoute="/" />
            </>)
                : <GoToButton text="Login/Register" toRoute="/LoginRegister" setLoading={setLoading} />
            }
        </div>
    )
}