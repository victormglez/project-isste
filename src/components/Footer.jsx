import { useState } from "react";

export default function Footer() {
  return (
    <footer className="bg-[#611232] text-white mt-20">
      <div className="max-w-[1280px] mx-auto px-4 py-10">
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          <FooterLogo />

          <FooterLinks
            title="Enlaces"
            links={[
              { label: "Participa", url: "https://participa.gob.mx/" },
              {
                label: "Marco jurídico",
                url: "http://www.ordenjuridico.gob.mx/",
              },
              {
                label: "Plataforma Nacional de Transparencia",
                url: "https://consultapublicamx.plataformadetransparencia.org.mx/",
              },
              {
                label: "Transparencia para el pueblo",
                url: "https://transparencia.gob.mx/",
              },
              {
                label: "Alerta",
                url: "https://alertadores.buengobierno.gob.mx/",
              },
            ]}
          />

          <FooterGobMx />

          <FooterSocial />
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-4">
          <FooterLogo mobile />

          <Accordion
            title="Enlaces"
            links={[
              { label: "Participa", url: "https://participa.gob.mx/" },
              {
                label: "Marco jurídico",
                url: "http://www.ordenjuridico.gob.mx/",
              },
              {
                label: "Plataforma Nacional de Transparencia",
                url: "https://consultapublicamx.plataformadetransparencia.org.mx/",
              },
              {
                label: "Transparencia para el pueblo",
                url: "https://transparencia.gob.mx/",
              },
              {
                label: "Alerta",
                url: "https://alertadores.buengobierno.gob.mx/",
              },
            ]}
          />

          <Accordion
            title="¿Qué es gob.mx?"
            content="Es el portal único de trámites, información y participación ciudadana."
            extraLink={{
              label: "Leer más",
              url: "https://www.gob.mx/que-es-gobmx",
            }}
          />

          <FooterSocial mobile />
        </div>
      </div>
    </footer>
  );
}

function FooterLogo({ mobile }) {
  return (
    <div className={`${mobile ? "mb-4" : ""}`}>
      <img
        src="/images/logoGobMX.png"
        alt="Logo GOB MX"
        className={`${mobile ? "max-w-[160px]" : "max-w-[130px]"}`}
      />
    </div>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterGobMx() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">¿Qué es gob.mx?</h3>

      <p className="text-sm">
        Es el portal único de trámites, información y participación ciudadana.
      </p>

      <a
        href="https://www.gob.mx/que-es-gobmx"
        target="_blank"
        className="underline text-sm block mt-2"
      >
        Leer más
      </a>

      <div className="mt-4 space-y-2 text-sm">
        <a
          href="https://datos.gob.mx/"
          target="_blank"
          className="block hover:underline"
        >
          Portal de datos abiertos
        </a>

        <a
          href="https://www.gob.mx/accesibilidad"
          target="_blank"
          className="block hover:underline"
        >
          Declaración de Accesibilidad
        </a>

        <a
          href="https://www.gob.mx/terminos"
          target="_blank"
          className="block hover:underline"
        >
          Términos y Condiciones
        </a>
      </div>
    </div>
  );
}

function FooterSocial({ mobile }) {
  return (
    <div className={`${mobile ? "mt-4" : ""}`}>
      <a
        href="https://sidec.buengobierno.gob.mx/"
        className="underline block mb-4 text-sm"
        target="_blank"
      >
        Denuncia contra servidores públicos
      </a>

      <p className="mb-3">Síguenos en</p>

      <div className="flex gap-4 mb-4">
        <SocialIcon
          url="https://www.facebook.com/gobmexico"
          img="/images/facebook.png"
        />
        <SocialIcon
          url="https://x.com/GobiernoMX"
          img="/images/twitter.png"
        />
        <SocialIcon
          url="https://www.instagram.com/gobmexico/"
          img="/images/instagram.png"
        />
        <SocialIcon
          url="https://www.youtube.com/@gobiernodemexico"
          img="/images/youtube.png"
        />
      </div>

      <img
        src="/images/079.png"
        alt="079"
        className="max-w-[250px] w-full"
      />
    </div>
  );
}

function SocialIcon({ url, img }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt="" className="w-6 h-6" />
    </a>
  );
}

function Accordion({ title, links, content, extraLink }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full text-left text-lg font-semibold py-2 border-b"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>

      {open && (
        <div className="mt-2 space-y-2 text-sm">
          {content && <p>{content}</p>}

          {extraLink && (
            <a href={extraLink.url} className="underline block" target="_blank">
              {extraLink.label}
            </a>
          )}

          {links &&
            links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="block hover:underline"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
        </div>
      )}
    </div>
  );
}
