const stats = [
  { value: "14+", label: "Years Operating" },
  { value: "3,200+", label: "Summits Reached" },
  { value: "98%", label: "Return Rate" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.4em] uppercase text-yellow-500 mb-3">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 leading-none mb-8">
              Born on the
              <br />
              Mountain
            </h2>
            <p className="text-gray-500 mb-5 leading-relaxed">
              GoSummit was founded in 2009 by two alpine guides who were tired
              of tourist treks that promised adventure and delivered crowds. We
              set out to build small-group, high-quality expeditions that
              respect both the mountain and the people on it.
            </p>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Every guide holds UIAGM/IFMGA certification — the international
              gold standard for mountain guiding. Our groups stay small by
              design. Your safety, your experience, and the integrity of the
              alpine environment are the three things we never compromise.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10 border-t border-gray-100 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm px-8 py-3 rounded-full transition-colors"
            >
              Meet the Team →
            </a>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&h=1100&fit=crop&auto=format&q=80"
              alt="Mountain guide on summit"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 bg-yellow-400 px-5 py-4 rounded-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-900">
                UIAGM Certified
              </p>
              <p className="text-xs text-gray-700 mt-0.5">All our guides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
