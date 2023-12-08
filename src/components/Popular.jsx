import bg from "../assets/more/1.png";
import {
  FaEye,
  FaMugSaucer,
  FaRegTrashCan,
  FaSquarePen,
} from "react-icons/fa6";
import img1 from "../assets/1.png";
import { Link } from "react-router-dom";
import Follow from "./Follow";
import Swal from "sweetalert2";

const Popular = () => {

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure that you want to delete it?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Coffee Details.",
                icon: "success"
              });
            }
          });
    }

  return (
    <div className="my-8">
      <div
        style={{ backgroundImage: `url('${bg}')` }}
        className="text-center text-stone-800 mb-6"
      >
        <small>--- Sip & Savor ---</small>
        <h2 className="text-2xl font-bold">Our Popular Products</h2>
        <Link to="/addCoffee">
          <button className="my-5 btn btn-warning">
            Add Coffee <FaMugSaucer />
          </button>
        </Link>
        <div className="grid grid-cols-2 gap-8 w-8/12 mx-auto my-8">
          <div className="card card-side bg-base-300 shadow-xl">
            <figure>
              <img src={img1} alt="Coffee" />
            </figure>
            <div className="card-body flex flex-row justify-center items-center">
              <div className="card-content">
                <p>
                  Name: <span className="text-zinc-400">Americano Coffee</span>
                </p>
                <p>
                  Chef: <span className="text-zinc-400"> Mr. Matin Paul</span>
                </p>
                <p>
                  Price: <span className="text-zinc-400">890 Taka</span>
                </p>
              </div>
              <div className="card-actions join join-vertical ms-8">
                <Link to="/viewCoffee" className="btn btn-warning text-white">
                  <FaEye />
                </Link>
                <Link to="/editCoffee" className="btn btn-neutral text-white">
                  <FaSquarePen />
                </Link>
                <button onClick={handleDelete} className="btn btn-error text-white">
                  <FaRegTrashCan />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Follow></Follow>
      </div>
    </div>
  );
};

export default Popular;
