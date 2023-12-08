import headerBg from "../assets/more/15.jpg";
import logo1 from "../assets/more/logo1.png";

const Header = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url('${headerBg}')` }}
        className="h-24 flex justify-center items-center"
      >
        <img src={logo1} alt="" className="h-20" />
        <h2 className="text-white text-4xl ms-4">Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Header;
