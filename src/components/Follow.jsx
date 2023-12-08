import Rectangle9 from '../assets/cups/Rectangle 9.png'
import Rectangle10 from '../assets/cups/Rectangle 10.png'
import Rectangle11 from '../assets/cups/Rectangle 11.png'
import Rectangle12 from '../assets/cups/Rectangle 12.png'
import Rectangle13 from '../assets/cups/Rectangle 13.png'
import Rectangle14 from '../assets/cups/Rectangle 14.png'
import Rectangle15 from '../assets/cups/Rectangle 15.png'
import Rectangle16 from '../assets/cups/Rectangle 16.png'
const Follow = () => {
  return (
    <div className="my-24 w-8/12 mx-auto ">
        <small>Follow Us Now</small>
      <h2 className="text-2xl font-bold mb-12">Our Popular Products</h2>
      <figure className='grid grid-cols-4 gap-4 items-center'>
        <img src={Rectangle9}  className="hover:grayscale  transition duration-300" alt="" />
        <img src={Rectangle10} className="hover:grayscale  transition duration-300"  alt="" />
        <img src={Rectangle11} className="hover:grayscale  transition duration-300"  alt="" />
        <img src={Rectangle12} className="hover:grayscale  transition duration-300"  alt="" />
        <img src={Rectangle13} className="hover:grayscale  transition duration-300"  alt="" />
        <img src={Rectangle14} className="hover:grayscale  transition duration-300"  alt="" />
        <img src={Rectangle15} className="hover:grayscale  transition duration-300"  alt="" />
        <img src={Rectangle16} className="hover:grayscale  transition duration-300"  alt="" />
      </figure>
    </div>
  );
};

export default Follow;
