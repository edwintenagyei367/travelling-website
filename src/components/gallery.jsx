const images = [
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=800&fit=crop&auto=format&q=80",
    alt: "Aerial mountain lake",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=800&fit=crop&auto=format&q=80",
    alt: "Snowy peak at dawn",
  },
  {
    src: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=800&fit=crop&auto=format&q=80",
    alt: "Hiker silhouette on ridge",
  },
  {
    src: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&h=800&fit=crop&auto=format&q=80",
    alt: "Mountain village valley",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop&auto=format&q=80",
    alt: "Alpine wildflower meadow",
  },
  {
    src: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&h=800&fit=crop&auto=format&q=80",
    alt: "Ice cave entrance",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase text-yellow-400 mb-3">
          Gallery
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-none mb-4">
          The Mountains in Their Own Words
        </h2>
        <p className="text-gray-400 text-base max-w-xl mb-14">
          Every photograph taken on an actual GoSummit tour. No stock
          photography of places we don't go.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((img) => (
            <div key={img.alt} className="overflow-hidden aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
