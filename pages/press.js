import Head from 'next/head';
import Link from 'next/link';
const inter_STUB = { style: { fontFamily: 'Inter, sans-serif' } };

const inter = inter_STUB;

const C = {
  BG: '#08090C', SURFACE: '#101216', BORDER: '#1F2228',
  TEXT: '#F5F6F8', TEXT2: '#A1A6B0', TEXT3: '#5C6470',
  ACCENT: '#647EFF', SHADOW: '0 1px 2px rgba(0,0,0,.4), 0 2px 8px rgba(0,0,0,.25)',
};

const MENTIONS = [
  {
    outlet: 'Economist Zone',
    date: { es: '14 de octubre de 2026', en: 'October 14, 2026' },
    desc: {
      es: 'Participación en un Q&A grupal sobre automatización y criterio humano en el trabajo, junto a otros 24 referentes. Cita destacada: "automate the draft, never the decision."',
      en: 'Featured in a group Q&A on automation and human judgment at work, alongside 24 other contributors. Featured quote: "automate the draft, never the decision."',
    },
    title: { es: 'Cómo los equipos automatizan trabajo sin perder el criterio humano', en: 'How Teams Automate Work Without Losing Human Judgment' },
    url: 'https://economistzone.com/qa/how-teams-automate-work-without-losing-human-judgment/',
  },
  {
    outlet: 'InfoMendoza',
    date: { es: '2026', en: '2026' },
    desc: {
      es: 'Nota de la periodista Carla Luna sobre Alejandro Galliski, Chef Ejecutivo de Grupo Equinoxe, y su proyecto EzWrite.',
      en: 'Feature by journalist Carla Luna about Alejandro Galliski, Executive Chef of Grupo Equinoxe, and his project EzWrite.',
    },
    title: { es: null, en: null },
    url: null,
  },
];

const UI = {
  es: {
    title: 'Prensa — EzWrite',
    back: '← Volver a EzWrite',
    h1: 'Prensa',
    updated: 'Última actualización: 14 de octubre de 2026',
    intro: 'Dónde se mencionó a EzWrite y a Alejandro Galliski, su fundador.',
    readMore: 'Leer la nota →',
    contactH: 'Contacto de prensa',
    contactP: 'Para consultas de prensa, escribir a ezwrite.app@gmail.com o por Instagram (@ezwrite.app) o X (@Polaco23456).',
  },
  en: {
    title: 'Press — EzWrite',
    back: '← Back to EzWrite',
    h1: 'Press',
    updated: 'Last updated: October 14, 2026',
    intro: 'Where EzWrite and its founder, Alejandro Galliski, have been mentioned.',
    readMore: 'Read the piece →',
    contactH: 'Press contact',
    contactP: 'For press inquiries, reach out at ezwrite.app@gmail.com or on Instagram (@ezwrite.app) or X (@Polaco23456).',
  },
};

function MentionCard({ m, lang }) {
  const t = UI[lang];
  const title = m.title[lang];
  return (
    <div style={{ border: '1px solid ' + C.BORDER, background: C.SURFACE, borderRadius: '12px', padding: '18px 20px', marginBottom: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
        <span style={{ fontSize: '15px', fontWeight: 700, color: C.TEXT }}>{m.outlet}</span>
        <span style={{ fontSize: '12px', color: C.TEXT3 }}>{m.date[lang]}</span>
      </div>
      {title && (
        <div style={{ fontSize: '14px', fontWeight: 600, color: C.TEXT2, marginBottom: '6px' }}>{title}</div>
      )}
      <p style={{ fontSize: '14px', color: C.TEXT2, lineHeight: 1.6, margin: 0 }}>{m.desc[lang]}</p>
      {m.url && (
        <a href={m.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', fontSize: '13px', fontWeight: 600, color: C.ACCENT, textDecoration: 'none' }}>
          {t.readMore}
        </a>
      )}
    </div>
  );
}

function LangBlock({ lang }) {
  const t = UI[lang];
  return (
    <>
      <h1 style={{ fontSize: lang === 'es' ? '26px' : '22px', fontWeight: 800, color: C.TEXT, marginBottom: '6px', letterSpacing: '-0.02em' }}>{t.h1}</h1>
      <div style={{ fontSize: '12.5px', color: C.TEXT3, marginBottom: '1.75rem' }}>{t.updated}</div>
      <p style={{ fontSize: '15px', color: C.TEXT2, lineHeight: 1.6, marginBottom: '1.75rem' }}>{t.intro}</p>

      {MENTIONS.map((m, i) => (
        <MentionCard key={i} m={m} lang={lang} />
      ))}

      <div style={{ marginTop: '1.75rem' }}>
        <h2 style={{ fontSize: '15px', fontWeight: 700, color: C.TEXT, marginBottom: '6px' }}>{t.contactH}</h2>
        <p style={{ fontSize: '14px', color: C.TEXT2, lineHeight: 1.65, margin: 0 }}>{t.contactP}</p>
      </div>
    </>
  );
}

export default function Press() {
  return (
    <div style={{ minHeight: '100vh', background: C.BG, fontFamily: inter.style.fontFamily, padding: '0 1rem' }}>
      <Head>
        <title>{UI.es.title}</title>
        <meta name="description" content={UI.es.intro} />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#08090C" />
      </Head>
      <div style={{ maxWidth: '640px', margin: '0 auto', paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: C.TEXT2, textDecoration: 'none', marginBottom: '2rem' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: C.ACCENT, display: 'inline-block' }}></span>
          {UI.es.back}
        </Link>

        <LangBlock lang="es" />

        <div style={{ height: '1px', background: C.BORDER, margin: '2.5rem 0' }}></div>

        <LangBlock lang="en" />

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid ' + C.BORDER, textAlign: 'center', fontSize: '12px', color: C.TEXT3 }}>
          Made with <span style={{ color: C.ACCENT, fontWeight: 700 }}>EzWrite</span>
        </div>
      </div>
    </div>
  );
}
