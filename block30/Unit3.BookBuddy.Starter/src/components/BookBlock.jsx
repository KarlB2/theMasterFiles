import GoToButton from "./GoToButton"

export default function BookBlock({ book, setBookId, setLoading }) {
    const thisId = book.id;

    return (
        <div>
            <img src={book.coverimage} />
            <div>
                <p>{book.title}</p>
                <p>By {book.author}</p>
                {book.available ? <p>Available</p> : <p>Unavailable</p>}
                <GoToButton toRoute={`/BookDetails`} text="More" func={(() => setBookId(thisId))} setLoading={setLoading} />
            </div>
        </div>
    )
}