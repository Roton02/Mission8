
// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDataWishList, setDataToLs } from "../../Utility/util";

// import {useParams } from "react-router-dom";

const BookDetails = () => {
  const data = useLoaderData()
  // console.log(data);
  const param = useParams()
  // console.log('det', parseInt(param.bookId));

  const finderData = data.find(d => d.bookId == param.bookId)
  // console.log(finderData);

  // const data = useParams();
  // console.log(data);
  // console.log(data.bookId);
  // const parsedata = parseInt(data.bookId)
  // const [books, setBooks] = useState([]);
  // // const [details, setDetails]= useState([])
  // useEffect(() => {
  //   fetch("https://roton02.github.io/JsonData-/Books.json")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, []);

  // // console.log(books);
  // const finderData = books.find(book => book.bookId === parsedata)
  // console.log(finderData);

  // console.log(details)
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 flex justify-start">
          <img
            src={finderData.image}
            className=" bg-base-200  p-20 w-[500px] rounded-lg "
          />
        </div>
        <div className="w-1/2 space-y-4">
          <h1 className="text-5xl font-bold">{finderData.bookName}</h1> <hr />
          <p>by: {finderData.category}</p>
          <hr />
          <div className="flex space-x-2">
            <h1 className="text-xl underline mr-2 font-bold">Review</h1>
            {finderData.review}
          </div>
          <div className="flex space-x-3">
            <h1 className="text-xl font-bold">Tag </h1>
            {finderData.tags.map((t, id) => (
              <button
                key={id}
                className="bg-gray-200 ml-2 p-2 rounded-2xl text-[#23BE0A] font-semibold  rounded-lg"
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
              <span className="ml-8"> {finderData.totalPages}</span>{" "}
            </h1>
            <h1>
              Publisher: <span className="ml-20">{finderData.publisher} </span>{" "}
            </h1>
            <h1>
              {" "}
              Year of Publishing:{" "}
              <span className="ml-6">{finderData.yearOfPublishing} </span>{" "}
            </h1>
            <h1>
              {" "}
              Rating: <span className="ml-[105px]">{finderData.rating} </span>{" "}
            </h1>
          </div>
          <div className=" flex items-center gap-10 ">
            <button onClick={()=>setDataToLs(finderData)} className="btn bg-gray-200 text-black hover:text-white hover:bg-pink-600 ">Read</button>
            <button onClick={()=>saveDataWishList(finderData)} className="btn  bg-gray-200 text-black hover:text-white hover:bg-green-500 ">Wishlist</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
