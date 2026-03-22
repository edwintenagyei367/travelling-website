import { RiTimeLine, RiGroupLine } from "@remixicon/react";

const tours = [
  {
    name: "Alpine Summit Trek",
    tagline: "The classic high-altitude summit",
    duration: "6 Days",
    group: "12 guests",
    difficulty: "Challenging",
    difficultyColor: "text-orange-500",
    price: "$1,490",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop&auto=format&q=80",
  },
  {
    name: "Glacier Valley Traverse",
    tagline: "Walk among living glaciers",
    duration: "4 Days",
    group: "10 guests",
    difficulty: "Moderate",
    difficultyColor: "text-green-600",
    price: "$980",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&auto=format&q=80",
  },
  {
    name: "Rocky Ridge Expedition",
    tagline: "A ridge run with panoramic rewards",
    duration: "8 Days",
    group: "8 guests",
    difficulty: "Expert",
    difficultyColor: "text-red-500",
    price: "$2,150",
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=500&fit=crop&auto=format&q=80",
  },
];

const Tours = () => {
  return (
    <section id="tours" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase text-yellow-500 mb-3">
          Our Expeditions
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 leading-none mb-4">
          Choose Your Adventure
        </h2>
        <p className="text-gray-500 text-base max-w-xl mb-14">
          Handcrafted routes led by certified mountain guides. Every tour
          includes gear, meals, and a story worth telling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.name}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span
                  className={`absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full ${tour.difficultyColor}`}
                >
                  {tour.difficulty}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black uppercase text-gray-900 mb-1">
                  {tour.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{tour.tagline}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                  <span className="flex items-center gap-1">
                    <RiTimeLine size={13} />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <RiGroupLine size={13} />
                    {tour.group}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-black text-gray-900">
                      {tour.price}
                    </span>
                    <span className="text-xs text-gray-400 ml-1">/ person</span>
                  </div>
                  <a
                    href="#prices"
                    className="text-xs font-semibold uppercase tracking-wider text-yellow-500 hover:text-yellow-600 transition-colors"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
