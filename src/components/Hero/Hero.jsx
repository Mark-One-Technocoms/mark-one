import { Link } from "react-router-dom";
import { Button } from "..";
import Img from "@/assets/heroImage.png";
import Img2 from "@/assets/heroImage2.png";
import Img3 from "@/assets/home_img1.jpg";
import Img4 from "@/assets/home_img2.jpg";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-64px)] py-10 sm:mt-0 flex flex-col md:flex-row md:justify-between items-center md:gap-10 lg:gap-20 overflow-hidden">
      {/* Hero Content */}
      <div className="md:w-1/2">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
          Smart customer communication, <br /> powered by Mark One
        </h1>
        <p className="mt-6 text-sm xl:text-lg font-medium text-gray-600 max-w-xl">
          Mark One delivers world-class inbound & outbound call center services,
          knowledge solutions, and 24×7 customer support — helping businesses
          stay connected, responsive, and future-ready.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <Link to="contact">
            <Button type="primary" size="lg" label="Contact Us" />
          </Link>
          <Link to="our-story">
            <Button type="secondary" size="lg" label="Learn More" />
          </Link>
        </div>
      </div>

      {/* Placeholder for Illustration */}
      <div className="md:w-1/2 flex flex-col justify-center items-center mt-10 md:mt-0 translate-x-18 md:translate-x-0 scale-75 sm:scale-100">
        <img
          src={Img3}
          alt="Hero Image"
          className="-translate-x-50 translate-y-8 z-10"
        />
        <img src={Img4} alt="Hero Image" className="-translate-y-8" />
      </div>
    </section>
  );
};

export default Hero;
