import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SortBtn from "./SortBtn";
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
