import PuppyRow from "./PuppyRow";

export default function PuppyTable({ puppies, pupId, setPupId, api }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Team</th>
                </tr>
            </thead>
            <tbody>
                {puppies.length == 0 && <p>Sorry no puppies were found</p>}
                {puppies.map((pup) => {
                    return <PuppyRow pup={pup} pupId={pupId} setPupId={setPupId} api={api} />
                })}
            </tbody>
        </table>
    )
}