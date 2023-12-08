import { FaLocationDot, FaMessage, FaPhone } from "react-icons/fa6";
import bg from "../assets/more/13.jpg";
import logo1 from "../assets/more/logo1.png";
import bg1 from '../assets/more/24.jpg'

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url('${bg}')` }}>
      <footer className="w-8/12 footer p-10 grid grid-cols-2 mx-auto">
        <aside>
          <img src={logo1} className="h-20" alt="" />
          <p className="text-stone-800 text-2xl font-bold">Expresso Emporium</p>
          <p className="my-3">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          <p className="text-stone-800 text-2xl font-bold my-3">Get in touch</p>
          <p className="flex">
            <FaPhone className="me-4" /> +88 01533 333 333
          </p>
          <p className="flex">
            <FaMessage className="me-4" /> info@gmail.com
          </p>
          <p className="flex">
            <FaLocationDot className="me-4" /> 72, Wall street, King Road, Dhaka
          </p>
        </aside>
        <nav className="w-10/12">
          <p className="text-stone-800 text-2xl font-bold mt-20">
            Connect with Us
          </p>
          <form>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Name</span>
              </div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Eamil</span>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Message"
              ></textarea>
            </label>
            <label className="form-control col-span-2">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-outline btn-warning mt-4"
              />
            </label>
          </form>
        </nav>
      </footer>
      <footer className="footer footer-center p-4" style={{backgroundImage: `url('${bg1}')`}}>
        <aside>
          <p className="text-white">Copyright © 2023 - All right reserved by Coffee Expresso</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
