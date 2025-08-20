import { Button } from "..";

const ManpowerTech = () => {
  return (
    <section className="bg-gray-50 max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-20 flex flex-col md:flex-row md:justify-between items-center md:gap-10 lg:gap-20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-3">
            Manpower & Tech Outsourcing
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
            On-demand teams, global outsourcing, AI testing, multilingual
            customer support. Flexible models from remote pods to fully managed
            services.
          </p>
          <Button
            type="primary"
            size="lg"
            label="Request Manpower"
            buttonClassName="w-fit"
          />
        </div>
        <div className="rounded-lg bg-white shadow-md h-48 flex items-center justify-center">
          {/* Placeholder for illustration / image */}
          <span className="text-gray-400">[Illustration]</span>
        </div>
      </div>
    </section>
  );
};

export default ManpowerTech;
