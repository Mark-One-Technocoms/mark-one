import { BgBoxEffect, Button } from "..";

const WorkspaceSolutions = () => {
  return (
    <section className="flex flex-col relative py-20 bg-gradient-to-tr from-gray-400 to-gray-50 text-white justify-center items-center overflow-hidden">
      {/* Background - box effect */}
      <BgBoxEffect
        leftFromColor="from-gray-700"
        leftToColor="to-gray-200"
        rightFromColor="from-gray-200"
        rightToColor="to-gray-500"
      />

      <h2 className="max-w-4xl text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 text-center leading-snug mb-3 z-10">
        From desk to data centre—we host it all.
      </h2>
      <p className="text-sm md:text-base xl:text-lg font-medium text-gray-600 leading-relaxed mb-6 z-10">
        Incubation hubs, remote-first infrastructure, and enterprise-grade
        facilities connected to our cloud.
      </p>

      <Button type="primary" size="lg" label="Explore Workspace Solutions" />
    </section>
  );
};

export default WorkspaceSolutions;
