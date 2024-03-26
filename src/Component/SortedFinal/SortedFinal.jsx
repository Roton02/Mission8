import { useState } from "react";
import { getDataToLs } from "../../Utility/util";
import SortBtn from "../ListedBooks/SortBtn";
import ReadBlogs from "../ReadBlog/ReadBlogs";

const SortedFinal = () => {

    const data = getDataToLs();
  console.log(data);

  const [sortD, setSortD] = useState({});
  const sortedData = (sort) => {
    if (sort === "Rating") {
      const rating = data.sort((a, b) => a.rating - b.rating);
      setSortD([...sortD, rating]);
    } else if (sort === "pages") {
      const pages = data.sort((a, b) => a.totalPages - b.totalPages);
      setSortD([...sortD, pages]);
    } else if (sort === "year") {
      const year = data.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      setSortD([...sortD, year]);
    }
  };

  // console.log ( 'ami', sortD);

    return (
        <div>
            <SortBtn sortedData={sortedData}></SortBtn>
            <ReadBlogs></ReadBlogs>
        </div>
    );
};

export default SortedFinal;