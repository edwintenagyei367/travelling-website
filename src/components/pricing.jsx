import { RiCheckLine } from "@remixicon/react";

const plans = [
  {
    name: "Basecamp",
    price: "$980",
    tag: null,
    features: [
      "Up to 4 days",
      "Moderate trails",
      "Group up to 14",
      "Gear included",
      "Daily meals",
      "Guide & safety briefing",
    ],
    cta: "Book Basecamp",
    cardClass: "bg-white border border-gray-200",
    headingClass: "text-gray-900",
    priceClass: "text-gray-900",
    featureClass: "text-gray-600",
    priceNoteClass: "text-gray-400",
    ctaClass: "bg-gray-900 hover:bg-gray-800 text-white",
  },
  {
    name: "Summit",
    price: "$1,490",
    tag: "Most Popular",
    features: [
      "Up to 6 days",
      "Challenging terrain",
      "Group up to 12",
      "Full gear kit",
      "All meals & snacks",
      "Senior certified guide",
      "Emergency satellite comms",
    ],
    cta: "Book Summit",
    cardClass: "bg-white border-2 border-yellow-400 shadow-xl scale-[1.03]",
    headingClass: "text-gray-900",
    priceClass: "text-gray-900",
    featureClass: "text-gray-600",
    priceNoteClass: "text-gray-400",
    ctaClass: "bg-yellow-400 hover:bg-yellow-500 text-gray-900",
  },
  {
    name: "Expedition",
    price: "$2,150",
    tag: "Best Value",
    features: [
      "Up to 10 days",
      "Expert-level routes",
      "Private group (max 8)",
      "Premium gear kit",
      "Chef-prepared meals",
      "Lead guide + assistant",
      "Heli-evac insurance",
      "Pre-trip fitness coaching",
    ],
    cta: "Book Expedition",
    cardClass: "bg-gray-900",
    headingClass: "text-white",
    priceClass: "text-white",
    featureClass: "text-gray-400",
    priceNoteClass: "text-gray-500",
    ctaClass: "bg-yellow-400 hover:bg-yellow-500 text-gray-900",
  },
];

const Pricing = () => {
  return (
    <section id="prices" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase text-yellow-500 mb-3">
          Pricing
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 leading-none mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-base max-w-xl mb-14">
          All packages include gear rental, certified guide, mountain hut
          accommodation, and full catering. No hidden fees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${plan.cardClass}`}
            >
              {plan.tag && (
                <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {plan.tag}
                </span>
              )}
              <h3
                className={`text-xl font-black uppercase ${plan.headingClass} mb-1`}
              >
                {plan.name}
              </h3>
              <div className="mt-4 mb-6">
                <span className={`text-5xl font-black ${plan.priceClass}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.priceNoteClass}`}>
                  / person
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2 text-sm ${plan.featureClass}`}
                  >
                    <RiCheckLine size={15} className="text-yellow-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full font-semibold text-sm py-3 rounded-full transition-colors cursor-pointer ${plan.ctaClass}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
