import { FaEnvelope, FaLocationPin, FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" bg-light-teal p-4 pt-10">
      <div className="container mx-auto relative grid md:grid-cols-2 lg:grid-cols-4 bottom-0 p-4 md:p-10">
        <nav className="w-full">
          <header className="flex gap-2 items-center">
            <img loading="lazy" src='https://i.ibb.co/kyg59Y0/pngegg.png' alt="img" className="w-8 h-8" />
            <p className="text-primary-black text-2xl font-bold">HealthCare</p>
          </header>
          <div className="text-primary-black font-medium ">
            <p className="font-semibold text-lg mt-5">Our Info</p>
            <div className="">
              <p className="flex items-center gap-2">
                <FaLocationPin className="text-primary-teal" />
                <span>House 9, Road 15, Uttara, Dhaka</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-primary-teal" />
                <a>Call Us: +88011111111</a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-primary-teal" />
                <a >mail.healthcare@yahoo.com</a>
              </p>
            </div>
          </div>
        </nav>
        <nav className="w-full text-primary-black md:w-1/2">
          <header className="text-primary-black mt-3 lg:mt-0 text-lg font-bold">Latest Events</header>
          <div>
            <a className="link link-hover font-medium">Decade of Action on Nutrition and Global Initiatives</a>
            <p className="text-teal-600 mb-3">27 May, 2023</p>
          </div>
          <div>
            <a  className="link link-hover font-medium">Standards and Scientific Advice on Food and Nutrition</a>
            <p className="text-teal-600 mb-3">27 May, 2023</p>
          </div>
        </nav>
        <nav className="w-full text-primary-black font-medium">
          <header className="text-primary-black text-lg font-bold">Useful Link</header>
          <div className="flex flex-col gap-1 mt-1">
            <a  className="link link-hover">About Company</a>
            <a  className="link link-hover">Services</a>
            <a  className="link link-hover">Take Appointment</a>
            <a  className="link link-hover">Doctor Tips</a>
            <Link className="link link-hover">Contact us</Link>
            <a  className="link link-hover">Our Team</a>
          </div>
        </nav>
        <form  className="w-full">
          <header className="text-primary-black text-lg font-bold">Subscribe</header>
          <fieldset className="form-control w-full font-medium">
            <label className="label mt-1">
              <span className="label-text text-primary-black ">
                Enter your email address
              </span>
            </label>
            <div className="relative mt-5">
              <input
                type="email"
                name="email"
                placeholder="abc@gmail.com"
                className="p-3 rounded-lg shadow-md text-primary-black w-full pr-16"
              />
              <button className="h-full text-white rounded-r-lg px-2 bg-teal-400 hover:bg-teal-300 absolute top-0 right-0 ">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
};

export default Footer;