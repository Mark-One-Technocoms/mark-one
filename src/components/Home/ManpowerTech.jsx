import { Button } from "..";

const ManpowerTech = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Manpower & Tech Outsourcing
          </h2>
          <p className="text-gray-700 mb-6">
            On-demand teams, global outsourcing, AI testing, multilingual
            customer support. Flexible models from remote pods to fully managed
            services.
          </p>
          <Button type="primary" label="Request Manpower" />
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
