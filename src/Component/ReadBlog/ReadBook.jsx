import { MdOutlineFindInPage } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

const ReadBook = ({books}) => {
    // console.log(typeof(books.rating));
    return (
        
            <div className="hero lg:border-2 p-0 rounded-lg h-screen lg:h-[400px] ">
      <div className="hero-content  flex-col lg:flex-row  lg:gap-20">
        <div className=" w-72 bg-base-200 lg:p-10 rounded-2xl">
          <img
            src={books.image}
            className="rounded-lg "
          />
        </div>
        <div className=" space-y-4">
          <h1 className="text-3xl font-bold">{books.bookName}</h1> <hr />
          <p>by: {books.category}</p>
          <hr />
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold">Tag </h1>
            {books.tags.map((t, id) => (
              <button
                key={id}
                className="bg-gray-200 ml-2 mr-10 p-2 rounded-2xl text-[#23BE0A] font-semibold  "
              >
                #{t}
              </button>
            ))}
            <h1>Year of Publishing : {books.yearOfPublishing}</h1>
          </div>
          <hr />
          <div className="flex gap-10">
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
            <button  className="btn bg-green-200 rounded-3xl ">Category: {books.category}</button>
            <button className="btn  bg-pink-200  rounded-3xl ">Rating:{books.rating}</button>
            <button className="btn  bg-green-500 rounded-3xl text-white hover:text-black   ">View Details</button>
            
          </div>
        </div>
      </div>
    </div>
        
    );
};

export default ReadBook;