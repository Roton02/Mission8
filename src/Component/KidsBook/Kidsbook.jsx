import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";

const Kidsbook = ({book}) => {
    const { tags, category, bookName, author, rating ,image} = book;
    return (
      
      
      <div className=" border-2  rounded-lg ">
        <div className="card w-96 bg-base-100 ">
    <figure className="px-10 pt-10">
      <img  src={image} alt="Shoes" className="rounded-xl w-80 h-52  px-24 bg-gray-200 py-8" />
    </figure>
    <div className="card-body ml-4 ">
      <div className="flex  gap-10">
      {
          tags.map((t,idx) => <button key={idx} className="bg-gray-200 p-2 text-[#23BE0A] font-semibold  rounded-lg">{t}</button>)
      }
      </div>
      <div>
          <h1 className="card-title">{bookName}</h1>
          <h1>Author: {author}</h1>
      </div>
      <div className="card-actions flex justify-between">
        <h1>{category}</h1>
        <h1 className="flex items-center justify-center gap-2">{rating} <CiStar></CiStar> </h1>
      </div>
    </div>
  </div>
      </div>
    );
};

export default Kidsbook;
Kidsbook.propTypes ={
  book:PropTypes.object.isRequired
}