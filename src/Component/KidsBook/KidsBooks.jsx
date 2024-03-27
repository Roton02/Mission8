import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Kidsbook from "./Kidsbook";

const KidsBooks = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
        <div>
            <div className="hero h-[500px] my-5 rounded-xl bg-orange-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='px-32 ' src='https://images-us.bookshop.org/ingram/9780399226168.jpg?height=500&v=v2' />
    <div className='ml-4 lg:ml-20 space-y-12'>
      <h1 className="text-5xl font-bold"> Most Gifted Children  Books: Emotions and Growth Mindset </h1>
    <div className="flex gap-10 items-center ">
    <button className="btn  hover:text-black text-white 
    font-xl bg-pink-600 "> <a href="#kidsBookList">See all Books</a> </button> 
    <h1 className=" flex gap-2 text-2xl font-bold"><FaArrowLeft></FaArrowLeft>  Click this and see magic !! </h1>
    </div>
    </div>
  </div>
</div>

<h1 className="text-3xl underline text-center my-14 font-semibold">Hilarious, Laugh-Out-Loud & All Time Funniest Picture Books Ever!</h1>
        <div id="kidsBookList" className="grid grid-cols-1 lg:grid-cols-3 gap-3  ">
            {
                data.map(d=> <Kidsbook key={d.bookId} book={d}></Kidsbook>)
            }
        </div>

        </div>
    );
};

export default KidsBooks;