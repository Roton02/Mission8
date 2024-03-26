import toast from "react-hot-toast";

// Get data to local storage for Read book btn
const getDataToLs=()=>{
   const books =  localStorage.getItem('books')
   if(books){
    return JSON.parse(books)
   }
   return []

}
// save data to local storage for read Data 
const setDataToLs =(book)=>{
    const bookData = getDataToLs();
    const isAxist = bookData.find(bd => bd.bookId == book.bookId);
    if(!isAxist){
        bookData.push(book);
        localStorage.setItem('books',JSON.stringify(bookData))
        toast.success('Added this Item ')
    }
     else{
        toast.error('This Item has Already been added')
     }
}

// Get data to local storage for wishlist btn
const getWishList=()=>{
    const books =  localStorage.getItem('wish')
    if(books){
     return JSON.parse(books)
    }
    return []
 }

// save data to local storage for wishList
const saveDataWishList =(wish)=>{
    const book = getDataToLs();
    const bookData = getWishList();
    const isAxistdata = book.find(bd => bd.bookId == wish.bookId);
    const isAxist = bookData.find(bd => bd.bookId == wish.bookId);
    if(!isAxist && !isAxistdata){
        bookData.push(wish);
        localStorage.setItem('wish',JSON.stringify(bookData))
        toast.success('Added this Item ')
    }
    else{
        toast.error('This Item has Already been added')
     }
}
export {getDataToLs,setDataToLs,saveDataWishList,getWishList}