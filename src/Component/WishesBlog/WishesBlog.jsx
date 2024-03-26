import { useState } from "react";
import { getWishList } from "../../Utility/util";
import SortBtn from "../ListedBooks/SortBtn";
import WishBooks from "./WishBooks";

const WishesBlog = () => {
    const data = getWishList()
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
      <SortBtn sortedData={sortedData}></SortBtn>
      </div>
        <div className="flex flex-col space-y-5 mb-5">
            {
                sortD.map(d => <WishBooks key={d.bookId} books={d} ></WishBooks> )
            }
        </div>
      </div>
    );
};

export default WishesBlog;