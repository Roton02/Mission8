import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
        <div className="my-10">
            <div className="my-5">
                <h1 className="text-4xl font-bold text-center "> Books</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  ">
                {
                    data.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;