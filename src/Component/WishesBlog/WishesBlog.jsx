import { getWishList } from "../../Utility/util";
import WishBooks from "./WishBooks";

const WishesBlog = () => {
    const data = getWishList()
    // console.log(data);
    return (
        <div className="flex flex-col space-y-5 mb-5">
            {
                data.map(d => <WishBooks key={d.bookId} books={d} ></WishBooks> )
            }
        </div>
    );
};

export default WishesBlog;