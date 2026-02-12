export default function Hero() {
  return (
    <section className="relative w-full pt-16 lg:h-[624px] lg:min-h-[624px]" id="hero-section">
      <div className="relative w-full max-w-[2880px] mx-auto h-full">

        {/* Background */}
        <img
          src="https://maestriasydiplomadostec.blob.core.windows.net/maestriasydiplomados/uploads/programa_posgrado/banner/120/Especialidad-en-Neurolog_a.jpg"
          alt="Neurología"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center text-white py-12 md:py-16 lg:py-0">

          {/* Left */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl" id="title-hero">
              Especialidad en Neurología
            </h1>

            <p className="mt-4 uppercase tracking-wide text-sm">
              Especialízate y desarrolla tu potencial
            </p>
          </div>

          {/* Right → Individual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard title="Inicio" value="Marzo" />
            <InfoCard title="Duración" value="6 semestres" />
            <InfoCard title="Modalidad" value="Presencial" />
            <InfoCard title="Campus" value="Campus Monterrey" />
          </div>

        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="bg-white text-gray-800 p-5 rounded-xl shadow-lg flex gap-4 items-start">
      
      {/* Icon placeholder */}
      <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0" />

      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{value}</p>
      </div>

    </div>
  );
}
