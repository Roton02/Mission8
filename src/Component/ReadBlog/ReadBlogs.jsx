import { getDataToLs } from "../../Utility/util";
import ReadBook from "./ReadBook";

const ReadBlogs = () => {
    const data = getDataToLs()
    // console.log(data);
    return (
        <div className="flex flex-col space-y-5 mb-5">
            {
                data.map(d => <ReadBook key={d.bookId} books={d}></ReadBook>)
            }
        </div>
    );
};

export default ReadBlogs;