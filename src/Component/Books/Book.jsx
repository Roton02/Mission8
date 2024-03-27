import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
// import books from "../../assets/pngwing 1.png";
const Book = ({ book }) => {
  // console.log(book);
  const { tags, category,bookId, bookName, author, rating ,image} = book;
  return (
    <Link to={`/books/${bookId}`}>
    
    <div className=" border-2 flex flex-col justify-center items-center rounded-lg ">
      <div className="card  bg-base-100 ">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className="rounded-xl  px-24 bg-gray-200 py-8" />
  </figure>
  <div className="card-body ml-4 ">
    <div className="flex  gap-10">
    {
        tags.map((t,idx) => <button key={idx} className="bg-gray-200 p-2 text-[#23BE0A] font-semibold  rounded-lg">{t}</button>)
    }
    </div>
    <div>
        <h1 className="card-title">{bookName}</h1>
        <h1 className='text-sm font-bold my-2'>by: {author}</h1>
        <hr className='h-2 mt-1'/>
    </div>
    <div className="card-actions flex justify-between">
      <h1 className=' font-semibold'>{category}</h1>
      <h1 className="flex items-center justify-center gap-2">{rating} <CiStar></CiStar> </h1>
    </div>
  </div>
</div>
    </div>
    </Link>
  );
};

export default Book;
Book.propTypes ={
  book:PropTypes.object.isRequired
}