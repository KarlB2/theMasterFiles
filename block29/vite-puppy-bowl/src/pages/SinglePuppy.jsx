import { useEffect, useState } from "react"

export default function SinglePuppy({ pupId, setPupId, api }) {
    const [data, setData] = useState({})

    useEffect(() => {
        const getPuppy = async () => {
            try {
                const response = await fetch(
                    `${api}/players/${pupId}`
                );
                const result = await response.json()
                setData(result.data.player)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getPuppy();
    }, []);

    return (
        <div>
            {data == false ? <p>Error, no id found!</p> : (
                <>
                    <h2>{data.name}'s Profile</h2>
                    <div className="flex">
                        <img src={data.imageUrl} className="profile-pic"></img>
                        <div>
                            <h3>Breed: {data.breed}</h3>
                            <h3>Status: {data.status}</h3>
                            <h3>Team: {data.teamId ? data.teamId : "N/A"}</h3>
                        </div>
                    </div>
                    <div className="filler">
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quibusdam mollitia eum ratione eius veritatis deserunt odit nam provident odio. Sit natus doloribus rem quisquam iste molestias ipsam optio sed? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut temporibus nemo repudiandae labore provident assumenda culpa quo, ullam saepe harum maxime explicabo ab! Odit eveniet sapiente labore id in.
                            Sit, distinctio cum qui molestias doloremque nam iste incidunt iure quisquam perspiciatis aut expedita ut, officiis magnam voluptatum deserunt at soluta obcaecati beatae labore ducimus perferendis fuga? Nesciunt, est dignissimos!
                            Fugit deserunt officiis quisquam, labore at accusantium aperiam debitis, distinctio iste illum nesciunt totam sapiente ea commodi minima laborum! Ea quos incidunt facilis nisi reiciendis recusandae doloribus iure voluptatem officiis.
                            Repellendus tenetur, esse blanditiis natus perferendis qui alias laborum! Atque quisquam quae rem illo minima dolore laudantium. Temporibus eveniet blanditiis illo consectetur perferendis quaerat ipsam dolor omnis fugit! Eveniet, deserunt?
                            Magnam quae tenetur odio officia soluta esse possimus temporibus ullam exercitationem? Fugit dignissimos sapiente est repellendus quisquam exercitationem facilis molestias voluptates incidunt, temporibus, officia soluta assumenda et quaerat. Quas, nemo!</p>
                    </div>
                </>

            )}
        </div>
    )
}