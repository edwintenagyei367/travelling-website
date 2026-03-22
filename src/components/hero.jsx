import heroImg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase text-gray-500 mb-4">
          Fall in love with
        </p>
        <h1
          className="font-black uppercase leading-none"
          style={{
            fontSize: "clamp(4rem, 14vw, 13rem)",
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Mountains
        </h1>
        <button
          onClick={() => document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-12 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm px-8 py-3 rounded-full transition-colors cursor-pointer"
        >
          SEE TOURS →
        </button>
      </div>
    </section>
  );
};

export default Hero;
