const WhyMarkOne = () => {
  const points = [
    {
      title: "Capital + Counsel",
      desc: "We invest and mentor, not just bankroll.",
    },
    {
      title: "Data + Cloud",
      desc: "From datasets to sovereign hosting, we deliver the backbone.",
    },
    {
      title: "People + Places",
      desc: "Manpower and office infrastructure to scale.",
    },
    {
      title: "Global Edge",
      desc: "A network that connects startups to enterprises and investors worldwide.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">
        {points.map(({ title, desc }) => (
          <div key={title}>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyMarkOne;
