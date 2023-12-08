import headerBg1 from '../assets/more/3.png'

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url('${headerBg1}')` }}
      className="h-[50rem] bg-center"
    >
      <div className="grid grid-cols-2 h-[50rem]">
        <div></div>
        <div className="text-white place-self-center w-3/4">
          <h1 className="text-4xl">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="my-4">
            Its coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn btn-warning mt-5">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
