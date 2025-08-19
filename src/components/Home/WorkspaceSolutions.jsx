import { Button } from "..";

const WorkspaceSolutions = () => {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        From desk to data centre—we host it all.
      </h2>
      <p className="max-w-2xl mx-auto text-gray-300 mb-6">
        Incubation hubs, remote-first infrastructure, and enterprise-grade
        facilities connected to our cloud.
      </p>
      <Button type="secondary" label="Explore Workspace Solutions" />
    </section>
  );
};

export default WorkspaceSolutions;
