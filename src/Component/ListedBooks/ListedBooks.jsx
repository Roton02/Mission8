import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const ListedBooks = () => {
    const [idx , setIdx] =useState(0)
    const handleTabs =(id)=>{
        setIdx(id)
    }
  return (
    <div>
      <div className="bg-gray-100 text-center font-bold text-3xl mt-5 py-3">
        <h1>Books</h1>
      </div>
      <div className="flex items-center px-5 mt-20 overflow-x-auto overflow-y-hidden  flex-nowrap border-b-2">
	<Link to='' onClick={()=> handleTabs(0)} rel="noopener noreferrer" 
     className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
     ${idx === 0 ? 'border border-b-0 ':'border-b'} rounded-t-lg `}>
		
		<span>Read Books</span>
	</Link>
	<Link to='WishesBlog' onClick={()=>handleTabs(1)}  rel="noopener noreferrer" 
     className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
     ${idx === 1 ?  'border border-b-0 ':'border-b'} rounded-t-lg `}>
		
		<span>Wishlist Books</span>
	</Link>
</div>
    <div className="mt-0">
    <Outlet></Outlet>
    </div>

    </div>
  );
};

export default ListedBooks;
