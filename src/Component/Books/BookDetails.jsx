import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1>ki obosta monu </h1>
        </div>
    );
};

export default BookDetails;