const departures = [
  {
    month: "Apr",
    day: "12",
    name: "Alpine Summit Trek",
    range: "Apr 12 — Apr 18 · 6 days",
    spots: "4 spots left",
    status: "Open",
    statusClass: "bg-green-100 text-green-700",
  },
  {
    month: "Apr",
    day: "24",
    name: "Glacier Valley Traverse",
    range: "Apr 24 — Apr 28 · 4 days",
    spots: "2 spots left",
    status: "Almost Full",
    statusClass: "bg-yellow-100 text-yellow-700",
  },
  {
    month: "May",
    day: "03",
    name: "Rocky Ridge Expedition",
    range: "May 3 — May 11 · 8 days",
    spots: "6 spots left",
    status: "Open",
    statusClass: "bg-green-100 text-green-700",
  },
  {
    month: "May",
    day: "17",
    name: "Alpine Summit Trek",
    range: "May 17 — May 23 · 6 days",
    spots: "8 spots left",
    status: "Open",
    statusClass: "bg-green-100 text-green-700",
  },
  {
    month: "Jun",
    day: "06",
    name: "Glacier Valley Traverse",
    range: "Jun 6 — Jun 10 · 4 days",
    spots: "Full",
    status: "Sold Out",
    statusClass: "bg-gray-100 text-gray-500",
  },
  {
    month: "Jun",
    day: "14",
    name: "Rocky Ridge Expedition",
    range: "Jun 14 — Jun 22 · 8 days",
    spots: "3 spots left",
    status: "Almost Full",
    statusClass: "bg-yellow-100 text-yellow-700",
  },
  {
    month: "Jul",
    day: "05",
    name: "Alpine Summit Trek",
    range: "Jul 5 — Jul 11 · 6 days",
    spots: "10 spots left",
    status: "Open",
    statusClass: "bg-green-100 text-green-700",
  },
];

const Calendar = () => {
  return (
    <section id="calendar" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase text-yellow-500 mb-3">
          Upcoming Departures
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 leading-none mb-4">
          Reserve Your Spot
        </h2>
        <p className="text-gray-500 text-base max-w-xl mb-14">
          All tours depart from Chamonix base camp. Transfers from Geneva
          airport available on request.
        </p>

        <div className="max-w-3xl border-l-2 border-yellow-400 pl-6">
          {departures.map((d, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 text-center shrink-0">
                  <span className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
                    {d.month}
                  </span>
                  <p className="text-2xl font-black text-gray-900 leading-none">
                    {d.day}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{d.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{d.range}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-17 sm:pl-0">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold ${d.statusClass}`}
                >
                  {d.status}
                </span>
                <span className="text-xs text-gray-400">{d.spots}</span>
                {d.status !== "Sold Out" && (
                  <a
                    href="#contact"
                    className="text-xs font-semibold uppercase tracking-wider text-yellow-500 hover:text-yellow-600 transition-colors"
                  >
                    Reserve →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
