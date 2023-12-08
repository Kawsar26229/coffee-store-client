import { FaArrowLeft } from "react-icons/fa6";
import bg from "../assets/more/1.png";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  return (
    <div style={{ backgroundImage: `url('${bg}')` }}>
      <Link to="/home" className="flex items-center my-6 w-8/12 mx-auto">
        <FaArrowLeft className="me-2" /> Back to home
      </Link>
      <div className="w-8/12 mx-auto bg-slate-300 p-20 mb-16 rounded">
        <div className="w-8/12 text-center mx-auto">
          <h2 className="text-3xl">Add New Coffee</h2>
          <p className="text-sm text-zinc-600 my-4">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form className="grid grid-cols-2 gap-4 items-center">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Name</span>
            </div>
            <input
              type="text"
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Chef</span>
            </div>
            <input
              type="text"
              placeholder="Enter coffee chef"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Supplier</span>
            </div>
            <input
              type="text"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Taste</span>
            </div>
            <input
              type="text"
              placeholder="Enter coffee taste"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Category</span>
            </div>
            <input
              type="text"
              placeholder="Enter coffee category"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Details</span>
            </div>
            <input
              type="text"
              placeholder="Enter coffee details"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control col-span-2">
            <div className="label">
              <span className="label-text text-lg">Photo</span>
            </div>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control col-span-2">
            <input
              type="submit"
              value='Add Coffee'
              className="btn btn-warning"
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
