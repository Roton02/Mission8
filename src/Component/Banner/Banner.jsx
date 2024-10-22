import { Link } from 'react-router-dom';
import book from '../../assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className="hero h-[550px] my-5 rounded-xl bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='px-32 ' src={book} />
    <div className='ml-4 lg:ml-20 space-y-12'>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      
      <Link to='/ListedBooks'><button className="btn mt-10 hover:text-black text-white font-xl bg-[#23BE0A] ">View The List</button></Link>
    </div>
  </div>
</div>
    );
};

export default Banner;