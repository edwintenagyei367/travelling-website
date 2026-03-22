import { RiMapPinLine, RiMailLine, RiPhoneLine, RiTimeLine } from "@remixicon/react";

const contactInfo = [
  {
    icon: RiMapPinLine,
    label: "Address",
    value: "14 Mount Gravatt , Brisbane, Australia",
  },
  {
    icon: RiMailLine,
    label: "Email",
    value: "hello@gosummit.com",
  },
  {
    icon: RiPhoneLine,
    label: "Phone",
    value: "+61 4 20 00 00 00",
  },
  {
    icon: RiTimeLine,
    label: "Hours",
    value: "Mon–Friday, 08:00 – 17:00 AEST",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase text-yellow-500 mb-3">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 leading-none mb-4">
          Let's Plan Your Climb
        </h2>
        <p className="text-gray-500 text-base max-w-xl mb-14">
          Questions, custom itineraries, or corporate group bookings — drop us a
          message and we'll get back within 24 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Tour of Interest
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white">
                <option value="">All Tours</option>
                <option>Alpine Summit Trek</option>
                <option>Glacier Valley Traverse</option>
                <option>Rocky Ridge Expedition</option>
                <option>Custom / Private Group</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your group size, fitness level, and preferred travel dates…"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm px-8 py-3 rounded-full transition-colors cursor-pointer"
            >
              Send Message →
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8 pt-2">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="mt-0.5 w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-gray-900" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-gray-700">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
