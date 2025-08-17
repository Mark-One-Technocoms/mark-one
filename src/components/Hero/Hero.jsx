import { Button } from "..";
import Img from "../../assets/heroImage.png";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-64px)] py-10 sm:mt-0 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-20">
      {/* Left Content */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
          Smart customer communication, <br /> powered by Mark One
        </h1>
        <p className="mt-6 text-sm xl:text-lg font-medium text-gray-600 max-w-xl">
          Mark One delivers world-class inbound & outbound call center services,
          knowledge solutions, and 24×7 customer support — helping businesses
          stay connected, responsive, and future-ready.
        </p>
        <div className="mt-8 flex gap-4">
          <Button type="primary" size="lg" label="Contact Us" />
          <Button type="secondary" size="lg" label="Learn More" />
        </div>
      </div>

      {/* Right Content - Placeholder for Illustration */}
      <div className="lg:w-1/2 border-8 rounded-2xl bg-gray-100 border-gray-100 lg:border-none">
        <img
          src={Img}
          alt="Hero Image"
          className="rounded-xl border-2 border-blue-50"
        />
      </div>
    </section>
  );
};

export default Hero;
