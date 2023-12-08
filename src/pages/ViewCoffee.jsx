import { FaArrowLeft } from "react-icons/fa6";
import bg from "../assets/more/1.png";
import { Link } from "react-router-dom";
import coffee from '../assets/5.png'

const ViewCoffee = () => {
    return (
        <div style={{ backgroundImage: `url('${bg}')` }}>
      <Link to="/home" className="flex items-center my-6 w-8/12 mx-auto">
        <FaArrowLeft className="me-2" /> Back to home
      </Link>
      <div className="w-8/12 mx-auto bg-slate-300 p-20 mb-16 grid grid-cols-2 gap-6 rounded">
        <img className="place-self-center" src={coffee} alt="" />
        <div>
            <h4 className="text-xl font-semibold text-stone-950 mb-5">Niceties</h4>
            <p>Name: <span className="text-zinc-500">Americano Coffee</span></p>
            <p className="my-2">Chief: <span className="text-zinc-500">Mr. Matin Paul</span></p>
            <p>Supplier: <span className="text-zinc-500">Cappu Authorizer</span></p>
            <p className="my-2">Taste: <span className="text-zinc-500">Sweet and hot</span></p>
            <p>Category: <span className="text-zinc-500">Americano</span></p>
            <p className="my-2">Details: <span className="text-zinc-500">Espresso with hot water</span></p>
        </div>
      </div>
    </div>
    );
};

export default ViewCoffee;