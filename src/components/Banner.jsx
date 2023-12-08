import img1 from '../assets/icons/1.png'
import img2 from '../assets/icons/2.png'
import img3 from '../assets/icons/3.png'
import img4 from '../assets/icons/4.png'

const Banner = () => {
    return (
        <div className="grid grid-cols-4 gap-8 w-8/12 mx-auto py-12">
        <div>
            <img src={img1} alt="" />
            <h3 className="text-2xl my-2">Awesome Aroma</h3>
            <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div>
            <img src={img2} alt="" />
            <h3 className="text-2xl my-2">High Quality</h3>
            <p className="text-sm">We served the coffee to you maintaining the best quality</p>
        </div>
        <div>
            <img src={img3} alt="" />
            <h3 className="text-2xl my-2">Pure Grades</h3>
            <p className="text-sm">The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div>
            <img src={img4} alt="" />
            <h3 className="text-2xl my-2">Proper Roasting</h3>
            <p className="text-sm">Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    );
};

export default Banner;