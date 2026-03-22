import { RiStarFill } from "@remixicon/react";

const testimonials = [
  {
    quote:
      "I've hiked in six countries and GoSummit's Alpine Summit Trek is hands-down the most beautifully organized experience I've ever had. The guide knew every rock by name.",
    name: "Rita Cole",
    location: "Hanoi, Vietnam",
    tour: "Alpine Summit Trek",
    initials: "RC",
    avatarColor: "bg-orange-200 text-orange-700",
  },
  {
    quote:
      "The Glacier Valley Traverse felt simultaneously effortless and epic. Our guide had 14 years on these routes and you felt it in every decision he made. Already booked for next summer.",
    name: "Edwin Tenagyei",
    location: "Brisbane, Australia",
    tour: "Glacier Valley Traverse",
    initials: "ET",
    avatarColor: "bg-blue-200 text-blue-700",
  },
  {
    quote:
      "Rocky Ridge pushed me to my absolute limit — and GoSummit was there at every step. The meals alone are worth the price. I came for the view and stayed for the food.",
    name: "Priscilla Owusu Ansah",
    location: "Gothenburg, Sweden",
    tour: "Rocky Ridge Expedition",
    initials: "POA",
    avatarColor: "bg-green-200 text-green-700",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase text-yellow-500 mb-3">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 leading-none mb-4">
          Stories From the Summit
        </h2>
        <p className="text-gray-500 text-base max-w-xl mb-14">
          Real words from real climbers. These aren't paid endorsements — just
          people who made it to the top.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <RiStarFill key={i} size={14} className="text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-600 text-sm leading-relaxed mb-8">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${t.avatarColor}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.location} · {t.tour}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
