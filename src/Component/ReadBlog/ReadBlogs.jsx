
import { useState } from "react";
import { getDataToLs } from "../../Utility/util";
import SortBtn from "../ListedBooks/SortBtn";
import ReadBook from "./ReadBook";
// console.log(data);
const ReadBlogs = () => {
    const data = getDataToLs();
    // console.log(data);
    const [sortD, setSortD] = useState([...data]);
    const sortedData = (sort) => {
      if (sort === "Rating") {
        const rating = data.sort((a, b) => a.rating - b.rating);
        setSortD([...rating]);
      } else if (sort === "pages") {
        const pages = data.sort((a, b) => a.totalPages - b.totalPages);
        setSortD([...pages]);
      } else if (sort === "year") {
        const year = data.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        setSortD([...year]);
      }
    };
  return (
    <div>
      <div className="mt-0 mb-5">
      <SortBtn  sortedData={sortedData}></SortBtn>
      </div>
      <div className="flex flex-col space-y-5 mb-5">
        {sortD.map((d) => (
          <ReadBook key={d.bookId} books={d}></ReadBook>
        ))}
      </div>
    </div>
  );
};

export default ReadBlogs;
