import { BgBoxEffect, Button } from "..";
import { ironVaults } from "@/constants";
import { CircleCheckBig } from "lucide-react";

const DisruptionHighlight = () => {
  const { title, sub, bullets, cta } = ironVaults;
  return (
    <section className="flex flex-col relative py-20 bg-gradient-to-tr from-red-700 to-red-400 text-white justify-center items-center overflow-hidden">
      {/* Background - box effect */}
      <BgBoxEffect
        leftFromColor="from-red-700"
        leftToColor="to-red-200"
        rightFromColor="from-red-200"
        rightToColor="to-red-500"
      />

      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center leading-snug mb-3 z-10">
        {title}
      </h2>
      <p className="text-sm md:text-base xl:text-lg font-medium text-gray-200 leading-relaxed mb-6 z-10">
        {sub}
      </p>

      <div className="max-w-2xl bg-accent text-sm md:text-base xl:text-lg text-gray-900 px-5 sm:px-8 py-3 sm:py-6 rounded-2xl mb-8 space-y-3 z-10">
        {bullets.map((bullet) => (
          <div className="flex gap-3 justify-center font-medium">
            <CircleCheckBig className="text-green-600" />
            <h1>{bullet}</h1>
          </div>
        ))}
      </div>

      <Button
        type={cta.type}
        size="lg"
        label={cta.label}
        buttonClassName="z-10"
      />
    </section>
  );
};

export default DisruptionHighlight;
