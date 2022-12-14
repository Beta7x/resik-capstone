import './style.css';
import widies from '../../assets/widies.jpeg';
import './style.css';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <div className="bg-resik-base">
      <div className="container mx-auto lg:px-20 max-w-screen-2xl">
        <div className="team grid grid-cols-2 py-10">
          <div className=" text-left grid lg:grid-cols-1 lg:col-span-1 md:grid-cols-2 md:col-span-1 sc:grid-cols-2 sc:col-span-2 sc:p-10">
            <div className="title lg:px-20 lg:text-7xl font-sans">
              <h1>ReSik</h1>
            </div>
            <p className="lg:px-20 lg:text-2xl font-sans">
              ReSik is a waste application that helps people to easily throw
              trash and gives education about how to safe earth from waste. With
              ReSik, you can organize your own trash bin and choose where it
              goes.
            </p>
          </div>
          <div className=" text-right grid lg:grid-cols-1 lg:col-span-1 md:grid-cols-2 md:col-span-1 sc:grid-cols-2 sc:col-span-2 sc:p-10">
            <div className="title lg:px-20 lg:text-7xl font-sans">
              <h1>Our Team</h1>
            </div>
            <p className="lg:px-20 lg:text-2xl font-sans">
              We are a team of young and enthusiastic developers who are
              passionate about web development.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 justify-items-center my-10">
          <div className="col-span-2">
            <div className="card grid lg:grid-cols-2 md:grid-cols-2 sc:grid-cols-1">
              <div className="card-image p-5">
                <img src={widies} alt="reduce" />
              </div>
              <div className="card-content content-center grid justify-items-center ">
                <h1 className="lg:text-3xl md:text-2xl sc:text-xl">
                  Widies Ade Priyanto
                </h1>
                <p className="lg:text-lg md:text-base sc:text-base">
                  Fullstack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10"></div>
      </div>
      <Footer />
    </div>
  );
};
export default About;