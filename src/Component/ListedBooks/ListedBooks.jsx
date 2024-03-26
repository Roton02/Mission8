import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
const ListedBooks = () => {
    const [idx , setIdx] =useState([0])
    const handleTabs =(id)=>{
        setIdx(id)
    }
  return (
    <div>
      <div className="bg-gray-100 text-center font-bold text-3xl mt-5 py-3">
        <h1>Books</h1>
      </div>
      <div className="flex justify-center mx-auto mt-5 ">
        

        <details className="dropdown">
          <summary className="m-1  btn bg-green-500 text-white"> 
          Sort By <FaArrowDown></FaArrowDown>{" "}
        </summary>
          <ul className="p-2 bg-gray-300 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className="hover:bg-black hover:text-white rounded-lg">
              <a>Rating</a>
            </li>
            <li className="hover:bg-black hover:text-white rounded-lg">
              <a>Number of Pages</a>
            </li>
            <li className="hover:bg-black hover:text-white rounded-lg">
              <a>Pubhlisher year</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden px-5 flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<Link to='' onClick={()=> handleTabs(0)} rel="noopener noreferrer" 
     className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-b 
     ${idx === 0 && 'border border-b-0'} rounded-t-lg `}>
		
		<span>Read Books</span>
	</Link>
	<Link to='WishesBlog' onClick={()=>handleTabs(1)}  rel="noopener noreferrer" 
     className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b
     ${idx === 1 && 'border border-b-0'} rounded-t-lg `}>
		
		<span>Wishlist Books</span>
	</Link>
</div>
    <Outlet></Outlet>

    </div>
  );
};

export default ListedBooks;
