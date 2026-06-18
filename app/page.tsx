"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function ApartmentCard({ apartment }: any) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev: number) =>
      prev === apartment.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev: number) =>
      prev === 0 ? apartment.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-xl hover:border-[#E8B07A]/30 transition-all duration-300">

      {/* IMAGE */}
      <div className="relative h-[500px]">

        <img
          src={apartment.images[current]}
          alt={apartment.title}
          className="w-full h-full object-cover object-center"
        />

        {/* LEFT */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 transition-all w-10 h-10 rounded-full text-white text-xl"
        >
          ←
        </button>

        {/* RIGHT */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 transition-all w-10 h-10 rounded-full text-white text-xl"
        >
          →
        </button>

      </div>

      {/* CONTENT */}
      <div className="p-8">

        <h3 className="text-3xl font-bold mb-4 text-[#E8B07A]">
          {apartment.title}
        </h3>

        <p className="text-[#D8C3B5] leading-relaxed text-lg">
          {apartment.desc}
        </p>

      </div>
    </div>
  );
}

export default function LuxuryHouseLanding() {

const gallery = [
  {
    src: "/images/apto102/IMG_2041.jpeg",
    title: "Entrada principal del Apartamento 102",
  },
  {
    src: "/images/apto102/IMG_2017.jpeg",
    title: "Sala con excelente iluminación natural",
  },
  {
    src: "/images/apto102/IMG_2018.jpeg",
    title: "Vista amplia de la zona social",
  },
  {
    src: "/images/apto102/IMG_2020.jpeg",
    title: "Espacio interior amplio y acogedor",
  },
  {
    src: "/images/apto102/IMG_2021.jpeg",
    title: "Zona social con gran amplitud",
  },
  {
    src: "/images/apto102/IMG_2023.jpeg",
    title: "Segunda entrada del Apartamento 102",
  },
  {
    src: "/images/apto102/IMG_2024.jpeg",
    title: "Baño remodelado con acabados modernos",
  },
  {
    src: "/images/apto102/IMG_2026.jpeg",
    title: "Baño principal con iluminación natural",
  },
  {
    src: "/images/apto102/IMG_2027.jpeg",
    title: "Zona de ducha y acabados contemporáneos",
  },
  {
    src: "/images/apto102/IMG_2028.jpeg",
    title: "Detalles arquitectónicos y vitral clásico",
  },
  {
    src: "/images/apto102/IMG_2029.jpeg",
    title: "Cocina amplia con comedor auxiliar",
  },
  {
    src: "/images/apto102/IMG_2031.jpeg",
    title: "Patio exterior privado con jardín natural",
  },
  {
    src: "/images/apto102/IMG_2033.jpeg",
    title: "Patio exterior con excelente iluminación",
  },
  {
    src: "/images/apto102/IMG_2035.jpeg",
    title: "Amplia zona verde privada",
  },
  {
    src: "/images/apto102/IMG_2037.jpeg",
    title: "Vista general del patio residencial",
  },
  {
    src: "/images/apto102/IMG_2039.jpeg",
    title: "Bodega de almacenamiento",
  },

  {
    src: "/images/apto101/IMG_2042.jpeg",
    title: "Ingreso principal apartamento 101",
  },
  {
    src: "/images/apto101/IMG_2044.jpeg",
    title: "Sala comedor amplia con diseño clásico",
  },
  {
    src: "/images/apto101/IMG_2045.jpeg",
    title: "Cocina amplia con excelente entrada de luz",
  },
  {
    src: "/images/apto101/IMG_2046.jpeg",
    title: "Zona de lavado y ventilación natural",
  },
  {
    src: "/images/apto101/IMG_2047.jpeg",
    title: "Pasillo exterior privado y funcional",
  },
  {
    src: "/images/apto101/IMG_2049.jpeg",
    title: "Espacio exterior",
  },
  {
    src: "/images/apto101/IMG_2050.jpeg",
    title: "Patio muy amplio",
  },
  {
    src: "/images/apto101/IMG_2056.jpeg",
    title: "Puerta de acceso para bodega",
  },
  {
    src: "/images/apto101/IMG_2057.jpeg",
    title: "Distribución funcional en múltiples niveles",
  },
];

  const apartmentImages = {
    apto102: [
      "/images/apto102/IMG_2017.jpeg",
      "/images/apto102/IMG_2018.jpeg",
      "/images/apto102/IMG_2020.jpeg",
      "/images/apto102/IMG_2021.jpeg",
      "/images/apto102/IMG_2023.jpeg",
      "/images/apto102/IMG_2024.jpeg",
      "/images/apto102/IMG_2026.jpeg",
      "/images/apto102/IMG_2027.jpeg",
      "/images/apto102/IMG_2028.jpeg",
      "/images/apto102/IMG_2029.jpeg",
      "/images/apto102/IMG_2031.jpeg",
      "/images/apto102/IMG_2033.jpeg",
      "/images/apto102/IMG_2035.jpeg",
      "/images/apto102/IMG_2037.jpeg",
      "/images/apto102/IMG_2039.jpeg",
      "/images/apto102/IMG_2041.jpeg",
    ],

    apto201: [
      "/images/apto201/foto1.jpeg",
      "/images/apto201/foto2.jpeg",
      "/images/apto201/foto3.jpeg",
    ],

    apto101: [
      "/images/apto101/IMG_2042.jpeg",
      "/images/apto101/IMG_2044.jpeg",
      "/images/apto101/IMG_2045.jpeg",
      "/images/apto101/IMG_2046.jpeg",
      "/images/apto101/IMG_2047.jpeg",
      "/images/apto101/IMG_2049.jpeg",
      "/images/apto101/IMG_2050.jpeg",
      "/images/apto101/IMG_2056.jpeg",
      "/images/apto101/IMG_2057.jpeg",
    ],
  };

  const features = [
    {
      title: "Patrimonio Arquitectónico",
      desc: "Vivienda clásica de interés cultural con arquitectura tradicional y gran carácter histórico.",
      icon: "🏛️",
    },

    {
      title: "3 Apartamentos Internos",
      desc: "Distribución ideal para vivienda familiar, renta independiente o remodelación multifamiliar.",
      icon: "🏠",
    },

    {
      title: "Amplios Patios y Jardín",
      desc: "Tres patios externos grandes con excelente iluminación natural y espacios abiertos.",
      icon: "🌿",
    },

    {
      title: "Ubicación Estratégica",
      desc: "En Teusaquillo, cerca de TransMilenio, SITP, universidades, comercio y futuro Metro de Bogotá.",
      icon: "📍",
    },
  ];

  return (
    <div className="bg-[#2B1B17] text-white min-h-screen overflow-x-hidden font-sans">

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('/images/IMG_2069(1).jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1B17]/80 via-[#4B2E2B]/70 to-[#1E1412]/90 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-5xl pt-32">

          <p className="uppercase tracking-[0.4em] text-[#E8B07A] mb-6 text-sm bg-black/40 backdrop-blur-md border border-[#E8B07A]/30 inline-block px-6 py-2 rounded-full shadow-2xl">
            Casa Santa Teresita
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6">
            Patrimonio arquitectónico con
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B07A] to-[#F5D0A9]">
              {" "}Gran Potencial
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Ubicada en el tradicional sector de Teusaquillo en Bogotá D.C., Casa Santa Teresita combina arquitectura clásica, amplitud y un enorme potencial de inversión.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">

  {/* BOTÓN CONTACTO */}
  <button
    onClick={() =>
      document
        .getElementById("contacto")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="bg-gradient-to-r from-[#A84432] to-[#D07A5C] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-[#A84432]/40"
  >
    Agendar Visita
  </button>

  {/* BOTÓN GALERÍA */}
  <button
    onClick={() =>
      document
        .getElementById("galeria")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="border border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 px-10 py-4 rounded-2xl text-lg"
  >
    Ver Galería
  </button>

</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#2B1B17] to-[#3B241F]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-[#E8B07A] uppercase tracking-[0.3em] mb-4">
              Características
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-16 mb-4">
              Espacios amplios, clásicos y auténticos
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((item, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 hover:border-[#E8B07A]/40 transition-all duration-300"
              >

                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-[#D8C3B5] leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* GALERÍA EXTERIOR */}
<section className="py-24 px-6 bg-[#3A120C]">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.4em] text-[#E8B07A] mb-4 text-sm">
        FACHADA Y ACCESOS
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Arquitectura clásica
        <span className="block text-[#E8B07A]">
          con carácter único
        </span>
      </h2>

      <p className="text-white/70 max-w-3xl mx-auto text-lg">
        Fachada tradicional de interés cultural con amplios accesos,
        garaje privado, rejas ornamentales y entradas independientes
        para los apartamentos internos.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="overflow-hidden rounded-[2rem] border border-white/10">
        <img
          src="/images/IMG_2069.jpeg"
          alt="Fachada principal"
          className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">

        <div className="overflow-hidden rounded-[2rem] border border-white/10">
          <img
            src="/images/IMG_2065.jpeg"
            alt="Entrada principal"
            className="w-full h-[250px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10">
          <img
            src="/images/IMG_2064.jpeg"
            alt="Zona de garaje"
            className="w-full h-[250px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10">
        <img
          src="/images/IMG_2060.jpeg"
          alt="Entrada apartamentos"
          className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
        />
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10">
        <img
          src="/images/IMG_2059.jpeg"
          alt="Entrada apartamentos"
          className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
        />
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10">
        <img
          src="/images/IMG_2058.jpeg"
          alt="Rejas clásicas"
          className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
        />
      </div>

    </div>
  </div>
</section>

      {/* APARTMENTS */}
      <section id="galeria" className="py-24 px-6 bg-[#241512]">

        <div className="max-w-7xl mx-auto mb-24">

          <div className="text-center mb-16">

            <p className="text-[#E8B07A] uppercase tracking-[0.3em] mb-4">
              Ubicación Estratégica
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              En el corazón de Bogotá
            </h2>

            <p className="text-[#D8C3B5] text-lg max-w-4xl mx-auto leading-relaxed">
              Carrera 17A #44-32, Teusaquillo, Bogotá D.C. Cercana a TransMilenio por la Calle 30 y Caracas, el futuro Metro de Bogotá, rutas SITP, universidades, colegios y una amplia oferta comercial.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

            {[
              {
                title: "Apartamento 102",
                desc: "Habitación amplia, sala comedor, cocina, patio externo, bodega interna, baño y doble acceso independiente.",
                images: apartmentImages.apto102,
              },
              /*
              {
                title: "Apartamento 201",
                desc: "3 habitaciones, patio exterior, balcón, cocina y sala con excelente iluminación natural.",
                images: apartmentImages.apto201,
              },
              */
              {
                title: "Apartamento 101",
                desc: "4 habitaciones, cocina, patios interno y externo, mini bodega, sala comedor y 2 baños.",
                images: apartmentImages.apto101,
              },

            ].map((apartment, index) => (
              <ApartmentCard key={index} apartment={apartment} />
            ))}

          </div>

        </div>

        {/* GALLERY */}
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">

            <div>

              <p className="text-[#E8B07A] uppercase tracking-[0.3em] mb-4">
                Galería
              </p>

              <h2 className="text-4xl md:text-6xl font-bold">
                Descubre cada espacio
              </h2>

            </div>

            <p className="text-[#D8C3B5] max-w-xl text-lg">
              Una experiencia visual diseñada para enamorar desde el primer vistazo.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {gallery.map((img, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-3xl group relative"
              >

                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay SIEMPRE visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Texto */}
                  <div className="absolute bottom-0 left-0 z-10 p-4 md:p-8 w-full">


                  <p className="text-3xl font-bold text-white">
                      {img.title}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#8E3B2E] to-[#C46A4B]">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-5xl font-black mb-3">499</h3>
            <p className="text-lg text-white/80">Varas Cuadradas</p>
          </div>

          <div>
            <h3 className="text-5xl font-black mb-3">3</h3>
            <p className="text-lg text-white/80">Apartamentos internos</p>
          </div>

          <div>
            <h3 className="text-5xl font-black mb-3">3</h3>
            <p className="text-lg text-white/80">Patios externos</p>
          </div>

          <div>
            <h3 className="text-5xl font-black mb-3">$2.100M</h3>
            <p className="text-lg text-white/80">Precio negociable</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
    <section id="contacto" className="py-28 px-6 bg-[#241512]">

  <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-2xl">

    <p className="text-[#E8B07A] uppercase tracking-[0.3em] mb-4">
      Contacto
    </p>

    <h2 className="text-4xl md:text-6xl font-black mb-8">
      Agenda una visita privada
    </h2>

    <p className="text-[#D8C3B5] text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
      Contáctanos directamente vía WhatsApp para recibir información,
      agendar visitas o resolver cualquier inquietud sobre la propiedad.
    </p>

    <a
      href="https://wa.me/573112470049"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5d] transition-all duration-300 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:scale-105"
    >

      <FaWhatsapp className="text-3xl" />

      Contactar por WhatsApp

    </a>

    

  </div>

  <div className="flex flex-col items-center">

            <button
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    className="mt-24 border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold text-white backdrop-blur-md"
  >
    Volver al Inicio ↑
  </button>

  </div>

  

</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
        © 2026 Casa Santa Teresita en venta — Bogotá D.C., Colombia
      </footer>

    </div>
  );
}
