import { Button } from "..";

const TechnologyServices = () => {
  const services = [
    { title: "SaaS Development", desc: "Build fast, scale globally." },
    {
      title: "Cloud & DevOps Support",
      desc: "Monitoring, pipelines, automation.",
    },
    {
      title: "AI Agent Integration",
      desc: "Embed intelligent agents into workflows.",
    },
    { title: "24/7 Tech Teams", desc: "Reliable, cost-efficient, always on." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {services.map(({ title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-lg bg-gray-50 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button type="primary" label="Talk to an Advisor" />
        </div>
      </div>
    </section>
  );
};

export default TechnologyServices;
