import PropTypes from 'prop-types';
import { MdOutlineFindInPage } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

const ReadBook = ({books}) => {
    // console.log(typeof(books.rating));
    return (
        
      <div className='border-2 rounded-xl '>
        <section className='lg:p-10'>
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div className="w-full lg:w-1/3 bg-base-200 text-center lg:p-10 rounded-2xl" >
        <img
            src={books.image}
            className="rounded-lg w-52 ml-20 lg:ml-10 h-80" 
          />
        </div>
        {/* Text */}
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
        <div className=" space-y-4">
          <h1 className="text-3xl font-bold">{books.bookName}</h1> <hr />
          <p className='text-xl font-bold'>by: {books.author}</p>
          <hr />
          <div className="flex flex-col space-y-2 lg:flex-row items-center space-x-3">
            <div>
            <div className="text-xl font-bold">
             Tag 
            {books.tags.map((t, id) => (
              <button
                key={id}
                className="bg-gray-200 ml-2 font-bold lg:mr-10 p-2 rounded-2xl text-[#23BE0A]   "
              >
                #{t}
              </button>
            ))}
            </div>
            </div>
            <h1>Year of Publishing : {books.yearOfPublishing}</h1>
          </div>
          <hr />
          <div className="flex justify-center lg:justify-start gap-10">
          <h1 className="flex items-center gap-2"> 
               <MdManageAccounts></MdManageAccounts>  Publisher: <span>{books.publisher} </span>
              </h1>
            <h1 className="flex items-center gap-2">
           <MdOutlineFindInPage></MdOutlineFindInPage>
               Page:
              <span > {books.totalPages}</span>
            </h1>
          </div>
          <div className=" flex flex-col lg:flex-row items-center gap-10 ">
            <div>
            <button  className="btn bg-green-200 rounded-3xl ">Category: {books.category}</button>
            <button className="btn ml-10  bg-pink-200  rounded-3xl ">Rating:{books.rating}</button>
            </div>
            <button className="btn  bg-green-500 rounded-3xl text-white hover:text-black   ">View Details</button>
            
          </div>
        </div>
        </div>
      </div>
    </section>

            {/*  */}
        
   
      </div>
   );
};

export default ReadBook;
ReadBook.propTypes={
  books:PropTypes.object.isRequired
}