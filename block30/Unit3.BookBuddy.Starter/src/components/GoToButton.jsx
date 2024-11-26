import { useNavigate } from "react-router-dom"

export default function GoToButton({ toRoute, func, text, setLoading, disabled }) {
    const navigate = useNavigate()
    const runFunc = async () => {
        setLoading(true)
        if (func && func());
        if (toRoute && navigate(toRoute));
    }
    return (
        <button disabled={disabled} className="go-to-button" onClick={() => runFunc()}>{text}</button>
    )
}