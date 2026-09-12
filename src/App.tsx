import { useState, useEffect } from "react";
import logoImg from "@/imports/WhatsApp_Image_2026-08-26_at_23.21.12.jpeg";
import facultadImg from "@/imports/facultad.jpg";

type Section = "inicio" | "equipo" | "proyectos" | "links";

// ── SVG Icons ──────────────────────────────────────────────────────────────

const IconScale = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 9l9-6 9 6" />
    <path d="M6 12l-3 6h6l-3-6z" />
    <path d="M18 12l-3 6h6l-3-6z" />
    <line x1="3" y1="21" x2="21" y2="21" />
  </svg>
);

const IconBook = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const IconHandshake = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
  </svg>
);

const IconBulb = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
);

const IconLeaf = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const IconBuilding = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="9" width="18" height="13" rx="1" />
    <path d="M8 22V9" />
    <path d="M16 22V9" />
    <path d="M12 9V4" />
    <path d="M3 9l9-6 9 6" />
    <rect x="9" y="14" width="6" height="8" />
  </svg>
);

const IconClipboard = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="13" y2="16" />
  </svg>
);

const IconGraduate = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const IconMonitor = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const IconPlay = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" fill={color} stroke="none" />
  </svg>
);

const IconMessage = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconMail = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconDoc = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
);

const IconPaw = ({ size = 32, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="4" r="1.5" fill={color} stroke="none" />
    <circle cx="12" cy="3" r="1.5" fill={color} stroke="none" />
    <circle cx="17" cy="4" r="1.5" fill={color} stroke="none" />
    <circle cx="4.5" cy="8" r="1.2" fill={color} stroke="none" />
    <path d="M12 22c-4 0-7-3-7-6.5C5 12 7.5 10 10 10.5l2 .5 2-.5c2.5-.5 5 1.5 5 5C19 19 16 22 12 22z" fill={color} stroke="none" opacity="0.85" />
  </svg>
);

const IconArrow = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ── Mapeo de íconos que vienen del backend como string ──────────────────────

const ICON_MAP: Record<string, (props: { size?: number; color?: string }) => JSX.Element> = {
  graduado: IconGraduate,
  book: IconBook,
  doc: IconDoc,
  monitor: IconMonitor,
  play: IconPlay,
  message: IconMessage,
  clipboard: IconClipboard,
  mail: IconMail,
  bulb: IconBulb,
  leaf: IconLeaf,
  building: IconBuilding,
};

type ContentData = {
  docentes: { id: string; name: string; role: string }[];
  auxiliares: { id: string; name: string }[];
  links: { id: string; label: string; url: string; desc: string; icon: string }[];
  timeline: {
    id: string;
    title: string;
    text: string;
    badge?: string;
    color: "cyan" | "magenta";
    icon: string;
  }[];
};

// ── Component ─────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState<Section>("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [content, setContent] = useState<ContentData | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/content`)
      .then((r) => {
        if (!r.ok) throw new Error("Respuesta no OK");
        return r.json();
      })
      .then(setContent)
      .catch(() => setLoadError(true));
  }, []);

  // Datos que vienen del backend, con fallback vacío mientras carga o si falla
  const docentesCuerpo = content?.docentes ?? [];
  const auxiliaresEstudiantiles = (content?.auxiliares ?? []).map((a) => a.name);
  const links = (content?.links ?? []).map((l) => ({
    ...l,
    Icon: ICON_MAP[l.icon] ?? IconDoc,
  }));
  const timelineSteps = (content?.timeline ?? []).map((t) => ({
    ...t,
    Icon: ICON_MAP[t.icon] ?? IconBulb,
  }));

  const nav = (section: Section) => {
    setActive(section);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-full mesh-bg">
      {/* NAV */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ borderColor: "var(--nav-border)", backgroundColor: "var(--nav-bg)", backdropFilter: "blur(16px)" }}
      >
       <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 overflow-hidden">
          {/* Left: logo + title */}
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={() => nav("inicio")} className="flex items-center gap-3 min-w-0">
              <img src={logoImg} alt="Logo Comisión 4" className="w-10 h-10 rounded-full object-cover shrink-0" />
              <span
  className="font-display tracking-widest hidden md:block whitespace-nowrap"
  style={{ color: "var(--cyan)", fontSize: "1.125rem" }}>

  APRENDIENDO DERECHO
</span>
<span
  className="font-display tracking-widest md:hidden whitespace-nowrap"
  style={{ color: "var(--cyan)", fontSize: "1.125rem" }}
>
  APRENDIENDO DERECHO
</span>
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {(["inicio", "equipo", "proyectos", "links"] as Section[]).map((s) => (
              <button key={s} onClick={() => nav(s)} className={`nav-link ${active === s ? "active" : ""}`}>
                {s === "inicio" ? "Inicio" : s === "equipo" ? "Nuestro Equipo" : s === "proyectos" ? "Proyectos" : "Links"}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className="block w-6 h-0.5" style={{ backgroundColor: "var(--cyan)" }} />
            <span className="block w-6 h-0.5" style={{ backgroundColor: "var(--magenta)" }} />
            <span className="block w-4 h-0.5" style={{ backgroundColor: "var(--cyan)" }} />
          </button>
        </div>
      </header>

      {/* Menú móvil — FUERA del <header> a propósito: el header tiene backdropFilter (blur),
          y eso convierte a cualquier elemento "fixed" anidado adentro en relativo al header
          (no a la pantalla), haciendo que se vea semitransparente y mezclado con el contenido
          de atrás. Al vivir afuera, el fondo queda sólido y cubre toda la pantalla. */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 px-6 flex flex-col gap-6"
          style={{ backgroundColor: "var(--bg)", opacity: 1, zIndex: 100, paddingTop: "5rem" }}
        >
          {(["inicio", "equipo", "proyectos", "links"] as Section[]).map((s) => (
            <button key={s} onClick={() => nav(s)} className={`nav-link text-left text-lg ${active === s ? "active" : ""}`}>
              {s === "inicio" ? "Inicio" : s === "equipo" ? "Nuestro Equipo" : s === "proyectos" ? "Proyectos" : "Links"}
            </button>
          ))}
        </div>
      )}

      <main>
        {/* ── INICIO ── */}
        {active === "inicio" && (
          <div>
            {/* Hero */}
            <section className="relative overflow-hidden">
              {/* Foto de fondo — Desktop: visible a la derecha */}
<div
  className="hidden md:block absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `url(${facultadImg})`,
    backgroundSize: "cover",
    backgroundPosition: "right center",
  }}
/>
<div
  className="hidden md:block absolute inset-0 pointer-events-none"
  style={{
    background: "linear-gradient(90deg, var(--bg) 0%, var(--bg) 45%, transparent 85%)",
  }}
/>

{/* Foto de fondo — Mobile: textura sutil pareja, sin recortes raros */}
<div
  className="md:hidden absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `url(${facultadImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center 20%",
    opacity: 0.28,
  }}
/>
<div
  className="md:hidden absolute inset-0 pointer-events-none"
  style={{ backgroundColor: "var(--bg)", opacity: 0.55 }}
/>
<div
  className="absolute inset-0 pointer-events-none"
  style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(0,212,212,0.12) 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(255,45,155,0.12) 0%, transparent 55%)" }}
/>
              {/* Capa para mantener el contraste del texto — TEST: apagada */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "var(--bg)", opacity: 0 }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(0,212,212,0.12) 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(255,45,155,0.12) 0%, transparent 55%)" }}
              />
              <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-2 gap-16 items-center relative">
                <div>
                  <div
                    className="inline-block mb-4 px-3 py-1 rounded text-xs font-semibold tracking-widest uppercase"
                    style={{ backgroundColor: "rgba(0,212,212,0.12)", color: "var(--cyan)", border: "1px solid rgba(0,212,212,0.3)" }}
                  >
                    Facultad de Derecho
                  </div>
                  <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
                    TEORÍA DEL<br />
                    <span className="gradient-text">DERECHO</span><br />
                    Y LA JUSTICIA
                  </h1>
                  <p className="text-base md:text-lg mb-8 font-semibold" style={{ color: "var(--magenta)" }}>
                    Comisión 4
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn-primary" onClick={() => nav("equipo")}>
                      Conocer el equipo
                    </button>
                    <button
                      className="px-6 py-3 rounded text-sm font-semibold uppercase tracking-widest transition-colors"
                      style={{ border: "1px solid rgba(255,45,155,0.4)", color: "var(--magenta)" }}
                      onClick={() => nav("proyectos")}
                      onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,45,155,0.08)"; }}
                      onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                    >
                      Ver proyectos
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Welcome message */}
            <section className="max-w-6xl mx-auto px-6 py-20">
              <div
                className="gradient-border rounded-2xl p-8 md:p-12"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <div className="grid md:grid-cols-[1fr_2px_1fr] gap-10 md:gap-0 items-start">
                  <div className="md:pr-10">
                    <div className="mb-4" style={{ color: "var(--cyan)" }}>
                      <IconScale size={36} color="var(--cyan)" />
                    </div>
                    <h2
                      className="font-display text-3xl md:text-4xl leading-tight mb-4"
                      style={{ color: "var(--text-primary)", letterSpacing: "0.03em" }}
                    >
                      ¡BIENVENIDOS A LA<br />
                      <span className="gradient-text">COMISIÓN 4</span><br />
                      DE DERECHO Y<br />JUSTICIA B!
                    </h2>
                    <div className="h-1 w-16 rounded" style={{ background: "linear-gradient(90deg, var(--cyan), var(--magenta))" }} />
                  </div>

                  <div
                    className="hidden md:block h-full w-px mx-auto"
                    style={{ background: "linear-gradient(180deg, transparent, rgba(255,45,155,0.4) 30%, rgba(0,212,212,0.4) 70%, transparent)" }}
                  />

                  <div className="md:pl-10 flex flex-col gap-5">
                    <p style={{ color: "var(--text-primary)", lineHeight: 1.85, fontSize: "1rem" }}>
                      Les damos la más cordial bienvenida a la página oficial de la Comisión 4 de Derecho y Justicia B. Este sitio web nace como un <span style={{ color: "var(--cyan)", fontWeight: 600 }}>espacio institucional de encuentro</span>, diseñado para brindarles un acceso ágil y directo a la bibliografía oficial, programas, material de estudio, avisos y canales directos de contacto con nuestro equipo.
                    </p>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                      Entendemos este sitio no solo como un soporte a nuestras clases presenciales, sino también como un punto de <span style={{ color: "var(--magenta)", fontWeight: 600 }}>difusión e impulso para el desarrollo integral de la cátedra</span>. A lo largo del cursado, llevamos adelante actividades curriculares y extracurriculares, así como proyectos y jornadas de extensión universitaria que buscan conectar el conocimiento académico con la práctica profesional y la realidad social.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {["Bibliografía oficial", "Material de estudio", "Extensión universitaria", "Contacto docente"].map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{ backgroundColor: "rgba(0,212,212,0.1)", color: "var(--cyan)", border: "1px solid rgba(0,212,212,0.25)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ── NUESTRO EQUIPO ── */}
        {active === "equipo" && (
          <section className="max-w-5xl mx-auto px-6 py-20">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--magenta)" }}>Comisión 4</p>
              <h2 className="section-title gradient-text">Nuestro Equipo</h2>
            </div>

            {loadError && (
              <p className="mb-8 text-sm" style={{ color: "var(--magenta)" }}>
                No se pudo cargar el equipo desde el servidor. Mostrando lo disponible.
              </p>
            )}

            {/* Cuerpo Docente */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(0,212,212,0.5), transparent)" }} />
                <span className="text-xs font-semibold uppercase tracking-widest px-3" style={{ color: "var(--cyan)" }}>Cuerpo Docente</span>
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,212,0.5))" }} />
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {docentesCuerpo.map((d) => (
                  <div
                    key={d.id}
                    className="card-hover rounded-xl p-6 text-center"
                    style={{ backgroundColor: "var(--bg-card)", border: "1px solid rgba(0,212,212,0.2)" }}
                  >
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-display text-2xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(0,212,212,0.2), rgba(0,212,212,0.05))",
                        color: "var(--cyan)",
                        border: "1.5px solid rgba(0,212,212,0.35)",
                      }}
                    >
                      {d.name.replace(/^(Dr|Dra)\.\s+/, "").split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <h3 className="font-semibold text-base mb-1">{d.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--cyan)" }}>{d.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Auxiliares Estudiantiles */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(255,45,155,0.5), transparent)" }} />
                <span className="text-xs font-semibold uppercase tracking-widest px-3" style={{ color: "var(--magenta)" }}>Equipo de Auxiliares Estudiantiles</span>
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(255,45,155,0.5))" }} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {auxiliaresEstudiantiles.map((name) => (
                  <div
                    key={name}
                    className="card-hover rounded-lg px-4 py-4 flex items-center gap-3"
                    style={{ backgroundColor: "var(--bg-card)", border: "1px solid rgba(255,45,155,0.15)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,45,155,0.25), rgba(255,45,155,0.08))",
                        color: "var(--magenta)",
                        border: "1px solid rgba(255,45,155,0.3)",
                      }}
                    >
                      {name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <span className="text-sm font-medium leading-tight" style={{ color: "var(--text-primary)" }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nuestro Compromiso */}
            <div
              className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid rgba(255,45,155,0.2)" }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,212,212,0.07) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,45,155,0.07) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <IconHandshake size={28} color="var(--magenta)" />
                  <h3 className="font-display text-2xl md:text-3xl tracking-wide" style={{ color: "var(--text-primary)" }}>
                    NUESTRO <span className="gradient-text">COMPROMISO</span>
                  </h3>
                </div>

                <div className="space-y-5 mb-8">
                  <p style={{ color: "var(--text-primary)", lineHeight: 1.85, fontSize: "0.975rem" }}>
                    Refrendamos nuestro compromiso con toda la comunidad educativa, sustentado en el ejercicio responsable de nuestra labor docente, académica y de extensión. Promovemos una visión de la educación <span style={{ color: "var(--cyan)", fontWeight: 600 }}>integral, armónica y basada en competencias</span> que no solo abarquen la excelencia técnica, sino también la formación sólida en valores para el ejercicio profesional y el compromiso ciudadano.
                  </p>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                    Expresamos nuestro reconocimiento al esfuerzo y dedicación constante de cada estudiante, y los invitamos a sumarse activamente a las distintas propuestas de la comisión con el desafío de superarnos día a día: para que aquello que ayer y hoy hicimos bien, <span style={{ color: "var(--magenta)", fontWeight: 600 }}>mañana lo hagamos aún mejor</span>.
                  </p>
                </div>

                <div
                  className="inline-block px-6 py-3 rounded-lg font-semibold text-sm"
                  style={{ background: "linear-gradient(135deg, rgba(0,212,212,0.15), rgba(255,45,155,0.15))", border: "1px solid rgba(0,0,0,0.08)", color: "var(--text-primary)" }}
                >
                  ¡Les deseamos un excelente trayecto académico!
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── PROYECTOS ── */}
        {active === "proyectos" && (
          <section className="max-w-5xl mx-auto px-6 py-20">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--cyan)" }}>Investigación y Docencia</p>
              <h2 className="section-title gradient-text">Proyectos</h2>
            </div>

            <div
              className="rounded-2xl overflow-hidden mb-10"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid rgba(0,212,212,0.25)" }}
            >
              {/* Header banner */}
              <div
                className="px-8 py-6"
                style={{ background: "linear-gradient(135deg, rgba(0,212,212,0.15) 0%, rgba(255,45,155,0.12) 100%)", borderBottom: "1px solid rgba(0,212,212,0.2)" }}
              >
                <div className="flex flex-wrap items-start gap-4">
                  <div style={{ color: "var(--cyan)", marginTop: 4 }}>
                    <IconPaw size={36} color="var(--cyan)" />
                  </div>
                  <div>
                    <span
                      className="inline-block text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-widest mb-2"
                      style={{ backgroundColor: "rgba(0,212,212,0.15)", color: "var(--cyan)", border: "1px solid rgba(0,212,212,0.3)" }}
                    >
                      Asignatura Optativa — Plan 2018
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl tracking-wide" style={{ color: "var(--text-primary)" }}>
                      Derecho de los Animales<br className="hidden sm:block" /> No Humanos
                    </h3>
                    <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                      Facultad de Derecho y Ciencias Sociales — UNT · Bloque III, IV y V
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 py-8">
                <p className="mb-8 text-base" style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                  Uno de los principales proyectos académicos e institucionales impulsados por la comisión fue la creación de esta materia optativa perteneciente al <span style={{ color: "var(--cyan)", fontWeight: 600 }}>Plan de Estudios 2018</span> de la carrera de Abogacía en la Facultad de Derecho y Ciencias Sociales (UNT).
                </p>

                <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--magenta)" }}>
                  Trayectoria y Proceso de Institucionalización
                </p>

                <div className="relative">
                  <div
                    className="absolute left-5 top-2 bottom-2 w-px hidden sm:block"
                    style={{ background: "linear-gradient(180deg, var(--cyan), var(--magenta))" }}
                  />

                  <div className="space-y-6">
                    {timelineSteps.map((step) => (
                      <div key={step.id} className="sm:pl-14 relative flex flex-col sm:flex-row gap-4 sm:gap-0">
                        <div
                          className="hidden sm:flex absolute left-0 w-10 h-10 rounded-full items-center justify-center shrink-0"
                          style={{
                            backgroundColor: step.color === "cyan" ? "rgba(0,212,212,0.15)" : "rgba(255,45,155,0.15)",
                            border: `1.5px solid ${step.color === "cyan" ? "rgba(0,212,212,0.5)" : "rgba(255,45,155,0.5)"}`,
                            zIndex: 1,
                          }}
                        >
                          <step.Icon size={18} color={step.color === "cyan" ? "var(--cyan)" : "var(--magenta)"} />
                        </div>

                        <div
                          className="flex-1 rounded-xl p-5"
                          style={{
                            backgroundColor: step.color === "cyan" ? "rgba(0,212,212,0.05)" : "rgba(255,45,155,0.05)",
                            border: `1px solid ${step.color === "cyan" ? "rgba(0,212,212,0.15)" : "rgba(255,45,155,0.15)"}`,
                          }}
                        >
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <div className="sm:hidden">
                              <step.Icon size={18} color={step.color === "cyan" ? "var(--cyan)" : "var(--magenta)"} />
                            </div>
                            <h4 className="font-semibold text-sm" style={{ color: step.color === "cyan" ? "var(--cyan)" : "var(--magenta)" }}>
                              {step.title}
                            </h4>
                            {step.badge && (
                              <span
                                className="text-xs px-2 py-0.5 rounded font-mono"
                                style={{
                                  backgroundColor: step.color === "cyan" ? "rgba(0,212,212,0.12)" : "rgba(255,45,155,0.12)",
                                  color: step.color === "cyan" ? "var(--cyan)" : "var(--magenta)",
                                }}
                              >
                                {step.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>{step.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── LINKS ── */}
        {active === "links" && (
          <section className="max-w-5xl mx-auto px-6 py-20">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--magenta)" }}>Recursos</p>
              <h2 className="section-title gradient-text">Links Útiles</h2>
              <p className="mt-4 max-w-xl" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                Accesos directos a plataformas, materiales y canales de comunicación de la cátedra.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {links.map((link, i) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="card-hover flex items-start gap-4 p-5 rounded-lg group"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: `1px solid ${i % 2 === 0 ? "rgba(0,212,212,0.18)" : "rgba(255,45,155,0.18)"}`,
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded shrink-0"
                    style={{ backgroundColor: i % 2 === 0 ? "rgba(0,212,212,0.1)" : "rgba(255,45,155,0.1)" }}
                  >
                    <link.Icon size={18} color={i % 2 === 0 ? "var(--cyan)" : "var(--magenta)"} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-semibold text-sm mb-1"
                      style={{ color: i % 2 === 0 ? "var(--cyan)" : "var(--magenta)" }}
                    >
                      {link.label}
                    </div>
                    <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {link.desc}
                    </div>
                  </div>
                  <div className="shrink-0 opacity-40 group-hover:opacity-80 transition-opacity mt-0.5" style={{ color: i % 2 === 0 ? "var(--cyan)" : "var(--magenta)" }}>
                    <IconArrow size={15} color={i % 2 === 0 ? "var(--cyan)" : "var(--magenta)"} />
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer
        className="mt-auto border-t py-8 text-center"
        style={{ borderColor: "rgba(255,45,155,0.15)", backgroundColor: "var(--bg-surface)" }}
      >
        <p className="font-display tracking-widest text-sm" style={{ color: "var(--text-muted)" }}>
          COMISIÓN 4 — TEORÍA DEL DERECHO Y LA JUSTICIA "B" — 2026
        </p>
      </footer>
    </div>
  );
}