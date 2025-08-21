import { BgBoxEffect, Button } from "..";

const FinalCTA = () => {
  return (
    <section className="flex flex-col relative py-20 bg-gradient-to-tr from-red-700 to-red-400 text-white justify-center items-center overflow-hidden">
      {/* Background - box effect */}
      <BgBoxEffect
        leftFromColor="from-red-700"
        leftToColor="to-red-200"
        rightFromColor="from-red-200"
        rightToColor="to-red-500"
      />

      <h2 className="max-w-3xl text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center leading-snug mb-3 z-10">
        Your idea deserves capital, cloud, and confidence. We bring all three.
      </h2>

      {/* CTA Buttons */}
      <div className="mt-4 flex flex-wrap gap-4">
        <Button type="primary" size="lg" label="Upload Pitch Deck" />
        <Button type="secondary" size="lg" label="Request Dataset" />
        <Button type="secondary" size="lg" label="Apply for Cloud Hosting" />
        <Button type="secondary" size="lg" label="Talk to an Advisor" />
      </div>

      <p className="text-sm md:text-base xl:text-lg font-medium text-gray-200 leading-relaxed my-6 z-10">
        Pitch in. Plug in. Power up — with Mark One
      </p>
    </section>
  );
};

export default FinalCTA;
