import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
// import books from "../../assets/pngwing 1.png";
const Book = ({ book }) => {
  // console.log(book);
  const { tags, category,bookId, bookName, author, rating ,image} = book;
  return (
    <Link to={`/books/${bookId}`}>
    
    <div className=" border-2  rounded-lg ">
      <div className="card w-96 bg-base-100 ">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className="rounded-xl  px-24 bg-gray-200 py-8" />
  </figure>
  <div className="card-body ml-4 ">
    <div className="flex  gap-10">
    {
        tags.map(t => <button className="bg-gray-200 p-2 text-[#23BE0A] font-semibold  rounded-lg">{t}</button>)
    }
    </div>
    <div>
        <h1 className="card-title">{bookName}</h1>
        <h1>by: {author}</h1>
    </div>
    <div className="card-actions flex justify-between">
      <h1>{category}</h1>
      <h1 className="flex items-center justify-center gap-2">{rating} <CiStar></CiStar> </h1>
    </div>
  </div>
</div>
    </div>
    </Link>
  );
};

export default Book;
