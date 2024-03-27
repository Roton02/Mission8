
import { useLoaderData, useParams } from "react-router-dom";
import { saveDataWishList, setDataToLs } from "../../Utility/util";

const BookDetails = () => {
  const data = useLoaderData()
  const param = useParams()

  const finderData = data.find(d => d.bookId == param.bookId)
  return (
    <div className="hero min-h-screen border-2 rounded-xl ">
      <div className="hero-content flex-col gap-20 lg:flex-row">
        <div className="lg:w-1/2 w-96 p-10 lg:p-0 bg-base-200 rounded-xl  flex justify-start">
          <img
            src={finderData.image}
            className=" bg-base-200  lg:p-20 w-[500px] rounded-lg "
          />
        </div>
        <div className="w-2/3 space-y-4">
          <h1 className="text-2xl lg:text-5xl font-bold">{finderData.bookName}</h1> <hr />
          <p className="text-xl font-bold">by: {finderData.author}</p>
          <hr />
          <div>
            <h1>{finderData.category}</h1>
            <hr />
          </div>
          <div className="flex space-x-2">
            <h1 ><span className="text-xl underline mr-2 font-bold">Review</span> {finderData.review} </h1>
            
          </div>
          <div className="flex space-x-3">
            <h1 className="text-xl font-bold">Tag </h1>
            {finderData.tags.map((t, id) => (
              <button
                key={id}
                className="bg-gray-200 ml-2 p-2 rounded-2xl text-[#23BE0A] font-semibold "
              >
                #{t}
              </button>
            ))}
          </div>{" "}
          <hr />
          <div className="space-y-3">
            <h1>
              {" "}
              Number of Pages:{" "}
              <span className="ml-8 font-bold"> {finderData.totalPages}</span>{" "}
            </h1>
            <h1>
              Publisher: <span className="ml-20 font-bold">{finderData.publisher} </span>{" "}
            </h1>
            <h1>
              {" "}
              Year of Publishing:{" "}
              <span className="ml-6 font-bold">{finderData.yearOfPublishing} </span>{" "}
            </h1>
            <h1>
              {" "}
              Rating: <span className="ml-[105px] font-bold">{finderData.rating} </span>{" "}
            </h1>
          </div>
          <div className=" flex items-center gap-10 ">
            <button onClick={()=>setDataToLs(finderData)} className="btn bg-gray-200 text-black hover:text-white hover:bg-pink-600 "> <span className="px-4">Read</span> </button>
            <button onClick={()=>saveDataWishList(finderData)} className="btn  bg-gray-200 text-black hover:text-white hover:bg-green-500 "><span className="px-2">Wishlist</span></button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
