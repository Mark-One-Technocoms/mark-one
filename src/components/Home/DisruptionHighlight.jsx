import { Button } from "..";
import { ironVaults } from "@/constants";
import { CircleCheckBig } from "lucide-react";

const DisruptionHighlight = () => {
  const { title, sub, bullets, cta } = ironVaults;
  return (
    <section className="flex flex-col py-20 bg-gradient-to-tr from-red-700 to-red-400 text-white justify-center items-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-3">
        {title}
      </h2>
      <p className="text-sm md:text-base lg:text-lg font-medium text-gray-200 leading-relaxed mb-6">
        {sub}
      </p>

      <div className="max-w-2xl bg-accent text-gray-900 px-5 sm:px-8 py-3 sm:py-6 rounded-2xl mb-8 space-y-3">
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
        buttonClassName=""
      />
    </section>
  );
};

export default DisruptionHighlight;
