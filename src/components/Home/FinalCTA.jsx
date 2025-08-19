import { Button } from "..";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Your idea deserves capital, cloud, and confidence. We bring all three.
      </h2>

      <div className="flex flex-wrap justify-center gap-4 my-6">
        <Button type="primary" label="Upload Pitch Deck" />
        <Button type="secondary" label="Request Dataset" />
        <Button type="primary" label="Apply for Cloud Hosting" />
        <Button type="outline" label="Talk to an Advisor" />
      </div>

      <p className="text-gray-400 mt-6">
        Pitch in. Plug in. Power up—with Mark One.
      </p>
    </section>
  );
};

export default FinalCTA;
