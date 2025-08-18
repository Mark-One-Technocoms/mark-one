import Img from "@/assets/about.png";

const OurStory = () => {
  return (
    <section className="pb-16 pt-5">
      <div className="mx-auto">
        <img src={Img} alt="About Mark One" className="rounded-2xl w-full" />
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 mt-8">
          Our Story
        </h2>

        {/* Story Content */}
        <p className="text-gray-700 leading-relaxed mb-4">
          Mark One is a business created by professionals with extensive
          experience in services and product marketing businesses. The company
          was founded in 2000 as a consumer connect services company serving the
          fledgling transaction outsourcing business in the India domestic
          market. Since beginning the company has served big brands in
          Insurance, Telecom – carriers, Mobile Handset manufacturers, Banking
          and Retail industry.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Today, Mark One has carved a niche for itself in providing simple
          solutions for complex business problems. Mark One uses technology to
          deliver process innovation. Mark One has invested in state-of-the-art
          infrastructure in Delhi and Dehradun, offering the perfect setting to
          deliver solutions to its customers located across India and overseas.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Mark One has little over 200 employees and over 700 field associates
          operating from its 2 delivery centres and over 100 field offices
          located across India.
        </p>

        {/* Value Points */}
        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
          How We Create Value
        </h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            We create value by enhancing productivity, ensuring high
            availability and better returns.
          </li>
          <li>
            We create value by simplifying customer facing processes, simple
            enough to implement.
          </li>
          <li>
            We understand our customers business by asking questions and work
            towards helping them achieve their goals — customer convenience is
            our goal.
          </li>
          <li>
            We enhance value by focusing on control levers designed to minimize
            risks — aim to manage monetary and opportunity risks through process
            dimension.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurStory;
