import { FaArrowLeft } from "react-icons/fa6";
import bg from "../assets/more/1.png";
import { Link } from "react-router-dom";
import img from '../assets/404/404.gif'

const NotFound = () => {
  return (
    <div style={{ backgroundImage: `url('${bg}')` }}>
      <Link to="/home" className="flex items-center my-6 justify-center">
        <FaArrowLeft className="me-2" /> Back to home
      </Link>
        <img src={img} className="w-1/2 mx-auto" alt="" />
    </div>
  );
};

export default NotFound;
