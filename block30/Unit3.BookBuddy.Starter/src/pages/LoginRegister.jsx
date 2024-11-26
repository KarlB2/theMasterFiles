import GoToButton from "../components/GoToButton"

export default function LoginRegister({ setLoading }) {
    return (
        <div>
            <div>
                <h2>Existing Account</h2>
                <GoToButton text="Login" toRoute="/Login" setLoading={setLoading} />
            </div>
            <div>
                <h2>Create Account</h2>
                <GoToButton text="Register" toRoute="/Register" setLoading={setLoading} />
            </div>
        </div>
    )
}