import PropTypes from 'prop-types';
import { FaArrowDown } from 'react-icons/fa';

const SortBtn = ({sortedData}) => {
  console.log(sortedData);
    return (
        <div>
            <div className="flex justify-center mx-auto mt-4 mb-20 ">
        <details className="dropdown">
          <summary className="m-1  btn bg-green-500 text-white">
            Sort By <FaArrowDown></FaArrowDown>
          </summary>
          <ul className="p-2 bg-gray-300 shadow menu dropdown-content z-[1]  rounded-box w-52">
            <li className="hover:bg-black hover:text-white rounded-lg">
              <button onClick={()=>sortedData('Rating')} >Rating</button>
            </li>
            <li className="hover:bg-black hover:text-white rounded-lg">
              <button onClick={()=>sortedData('pages')}>Number of Pages</button>
            </li>
            <li className="hover:bg-black hover:text-white rounded-lg">
              <button onClick={()=>sortedData('year')}>Pubhlisher year</button>
            </li>
          </ul>
        </details>
      </div>
        </div>
    );
};

export default SortBtn;
SortBtn.propTypes ={
  sortedData: PropTypes.func.isRequired
}