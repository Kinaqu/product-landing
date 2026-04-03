import Image from "next/image";
import Link from "next/link";
import { LightRays } from "@/components/luma/light-rays";
import { Reveal } from "@/components/luma/reveal";
import { SectionHeading } from "@/components/luma/section-heading";
import { SpotlightPanel } from "@/components/luma/spotlight-panel";

const modes = [
  {
    name: "Deep Focus",
    descriptor: "4300K balanced light",
    copy: "Crisp illumination keeps contrast high and the desk quietly alert through long stretches of concentrated work.",
    tone: "mode-card--focus",
  },
  {
    name: "Soft Evening",
    descriptor: "2900K ambient glow",
    copy: "The room settles. Edges soften. Notes, books, and ceramic surfaces hold a warmer, calmer presence.",
    tone: "mode-card--evening",
  },
  {
    name: "Creative Session",
    descriptor: "Adaptive temperature shift",
    copy: "Light follows the rhythm of sketching, editing, arranging, and stepping back without feeling clinical.",
    tone: "mode-card--creative",
  },
  {
    name: "Reading Light",
    descriptor: "Low glare task beam",
    copy: "A close, comfortable pool of light for pages, proofs, and late drafts when the rest of the room stays quiet.",
    tone: "mode-card--reading",
  },
];

const testimonials = [
  {
    quote:
      "Luma Desk feels more like a beautifully resolved object than a piece of office equipment. It changes the atmosphere before it changes the brightness.",
    name: "Mina Keller",
    role: "Interior stylist, Copenhagen",
  },
  {
    quote:
      "The touch response is immediate and discreet. There is no visual noise, no clutter, just the right light landing exactly where I need it.",
    name: "Arun Patel",
    role: "Product designer, London",
  },
  {
    quote:
      "Most desk lamps solve function. This one solves mood. It makes a workspace feel finished.",
    name: "Nora Villiers",
    role: "Architect, Montreal",
  },
];

const specifications = [
  ["Light balance", "2700K to 5000K with ambient memory"],
  ["Output", "Up to 900 lumens with low-glare diffuser"],
  ["Controls", "Capacitive touch dimming and mode recall"],
  ["Awareness", "Presence sensing for gentle wake and rest"],
  ["Materials", "Machined aluminum, satin diffuser, braided cord"],
  ["Footprint", "16 cm base, 44 cm height, quietly weighted"],
];

export default function Home() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="brand-mark" aria-label="Luma Desk home">
            <span className="brand-mark__symbol" />
            <span className="brand-mark__text">Luma Desk</span>
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <a href="#philosophy">Philosophy</a>
            <a href="#story">Story</a>
            <a href="#modes">Modes</a>
            <a href="#details">Details</a>
          </nav>
          <a className="button button--ghost" href="#reserve">
            Reserve
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero__grid">
            <div className="hero__content">
              <Reveal>
                <span className="eyebrow">Designed for calm work</span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="hero__title">
                  Light, composed for the hours that matter.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="hero__copy">
                  Luma Desk brings adaptive illumination, tactile control, and a
                  sculptural silhouette to the rituals of focused work and quiet
                  rooms.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="hero__actions">
                  <a className="button" href="#reserve">
                    Reserve Luma Desk
                  </a>
                  <a className="text-link" href="#details">
                    View the finishes
                  </a>
                </div>
              </Reveal>
              <Reveal delay={420}>
                <div className="hero__note">
                  <p>Autumn release</p>
                  <span>
                    Matte stone, graphite, and champagne with a warm memory glow.
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal className="hero__visual-frame" delay={180}>
              <div className="hero__visual">
                <LightRays />
                <div className="hero__product-shot">
                  <div className="hero__product-aura" />
                  <div className="hero__product-card">
                    <Image
                      src="/luma-lamp-reference.jpg"
                      alt="Minimal black desk lamp with a softly glowing bulb on a pale interior surface."
                      fill
                      priority
                      sizes="(max-width: 820px) 90vw, 42vw"
                      className="hero__product-image"
                    />
                  </div>
                </div>
                <div className="hero__specs">
                  <div>
                    <span className="hero__spec-label">Adaptive light</span>
                    <strong>2700K to 5000K</strong>
                  </div>
                  <div>
                    <span className="hero__spec-label">Touch response</span>
                    <strong>Dim, shift, recall</strong>
                  </div>
                  <div>
                    <span className="hero__spec-label">Presence</span>
                    <strong>Motion-aware calm</strong>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="philosophy" className="section philosophy">
          <div className="container">
            <Reveal>
              <div className="philosophy__frame">
                <div className="philosophy__intro">
                  <span className="eyebrow">Object philosophy</span>
                  <p className="philosophy__quote">
                    A desk object first. Smart second.
                  </p>
                </div>
                <div className="philosophy__body">
                  <p>
                    Luma Desk was shaped around a simple idea: the best tools for
                    concentrated work should settle into the room with dignity.
                    Nothing blinking. Nothing overstated. Just precise light,
                    intuitive touch, and a silhouette that belongs beside paper,
                    stone, aluminum, walnut, and calm surfaces.
                  </p>
                  <p>
                    It is made for people who think carefully about the mood of a
                    workspace, because focus is rarely only functional. It is
                    visual. Spatial. Atmospheric.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="story" className="section story">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Story-led features"
                title="Each detail is there to shape the feeling of the desk."
                copy="Rather than stacking features into a grid, Luma Desk reveals itself through quiet moments of use: morning clarity, tactile dimming, a softer evening room, and a form that keeps visual rhythm intact."
              />
            </Reveal>

            <div className="story-grid">
              <Reveal className="feature-block">
                <div className="feature-block__copy">
                  <span className="feature-block__index">01</span>
                  <h3>Morning clarity. Evening softness.</h3>
                  <p>
                    Adaptive balance shifts from cooler precision to warmer
                    ambience as the day changes, so the lamp feels aligned with
                    the room instead of fixed against it.
                  </p>
                  <ul className="feature-list">
                    <li>Ambient memory remembers the tone you leave it on.</li>
                    <li>Presence sensing wakes the light softly as you return.</li>
                    <li>High color fidelity keeps materials and paper honest.</li>
                  </ul>
                </div>
                <div className="feature-visual feature-visual--gradient">
                  <div className="feature-visual__orb" />
                  <div className="feature-visual__disc" />
                  <div className="feature-visual__line" />
                </div>
              </Reveal>

              <Reveal className="feature-block feature-block--reverse" delay={120}>
                <div className="feature-block__copy">
                  <span className="feature-block__index">02</span>
                  <h3>Touch becomes part of the ritual.</h3>
                  <p>
                    Dimness, warmth, and mode changes happen under the hand with a
                    light press. No menu language. No instructional overhead. Just
                    an interaction that feels natural after the first evening.
                  </p>
                  <ul className="feature-list">
                    <li>Capacitive edge with a muted haptic confirmation.</li>
                    <li>Quick hold for brightness, tap for scene changes.</li>
                    <li>Night mode descends gradually instead of snapping dark.</li>
                  </ul>
                </div>
                <div className="feature-visual feature-visual--touch">
                  <div className="feature-visual__gesture" />
                  <div className="feature-visual__ring feature-visual__ring--one" />
                  <div className="feature-visual__ring feature-visual__ring--two" />
                </div>
              </Reveal>

              <Reveal className="feature-block" delay={180}>
                <div className="feature-block__copy">
                  <span className="feature-block__index">03</span>
                  <h3>Quiet geometry, sculpted to stay.</h3>
                  <p>
                    The form is reduced to the essentials: a weighted base, a
                    balanced arm, a satin diffuser, and a profile that reads like
                    furniture hardware rather than gadgetry.
                  </p>
                  <ul className="feature-list">
                    <li>Machined aluminum with a low-sheen bead-blasted finish.</li>
                    <li>Braided cord and concealed joints keep the line clean.</li>
                    <li>Weighted base sits confidently on compact desks.</li>
                  </ul>
                </div>
                <div className="feature-visual feature-visual--form">
                  <div className="photo-panel photo-panel--detail">
                    <Image
                      src="/luma-lamp-reference.jpg"
                      alt="Close product reference of a refined desk lamp with dark metal frame and glowing bulb."
                      fill
                      sizes="(max-width: 820px) 90vw, 36vw"
                      className="photo-panel__image photo-panel__image--detail"
                    />
                  </div>
                  <div className="photo-panel__caption">
                    Graphite frame, weighted stone base, quiet silhouette.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section lifestyle">
          <div className="container lifestyle__grid">
            <Reveal>
              <div className="lifestyle__card lifestyle__card--large">
                <div className="lifestyle__copy">
                  <span className="eyebrow">Styled for the room</span>
                  <h3>Made to live with notebooks, stone trays, shelves, and quiet speakers.</h3>
                  <p>
                    Luma Desk is meant to belong in carefully composed workspaces,
                    not dominate them. The light stays present. The object stays
                    measured.
                  </p>
                </div>
                <div className="workspace-photo">
                  <Image
                    src="/luma-workspace.jpg"
                    alt="Warm interior workspace with wooden desk, chair, and a desk lamp creating a calm atmosphere."
                    fill
                    sizes="(max-width: 1120px) 90vw, 40vw"
                    className="workspace-photo__image"
                  />
                  <div className="workspace-photo__overlay" />
                  <div className="workspace-photo__label">
                    Calm interior composition
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="lifestyle__card lifestyle__card--stack">
                <div className="material-swatch material-swatch--stone" />
                <div className="material-swatch material-swatch--graphite" />
                <div className="material-swatch material-swatch--champagne" />
                <p>
                  Three finishes, one palette: architectural neutrals with a warm
                  metallic note.
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="lifestyle__card lifestyle__card--quote">
                <p>
                  “The lamp settles the whole desk. The space feels quieter before
                  the work even begins.”
                </p>
                <span>Studio resident note</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="modes" className="section modes">
          <div className="container modes__grid">
            <Reveal>
              <SectionHeading
                eyebrow="Scenes"
                title="Modes for different hours, not different menus."
                copy="The presets are treated like moods rather than software states. Each one adjusts color balance and brightness with a distinct spatial feeling."
              />
            </Reveal>
            <div className="modes__cards">
              {modes.map((mode, index) => (
                <Reveal key={mode.name} delay={index * 100}>
                  <SpotlightPanel
                    className={`mode-card ${mode.tone}`}
                    spotlightColor="rgba(235, 205, 159, 0.3)"
                  >
                    <span className="mode-card__descriptor">{mode.descriptor}</span>
                    <h3>{mode.name}</h3>
                    <p>{mode.copy}</p>
                  </SpotlightPanel>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section craftsmanship">
          <div className="container craftsmanship__frame">
            <Reveal>
              <div className="craftsmanship__copy">
                <span className="eyebrow eyebrow--light">Craftsmanship</span>
                <h2>Refined where the hand meets it. Restrained where the eye rests.</h2>
                <p>
                  Every visible surface is there for a reason. The stem is softly
                  blasted for a dry, architectural finish. The diffuser is satin,
                  not glossy. The joints disappear into the profile. Even the cord
                  is chosen to feel considered, not merely supplied.
                </p>
                <div className="craftsmanship__details">
                  <div>
                    <strong>Bead-blasted aluminum</strong>
                    <span>Low-sheen surface that reads quietly in daylight.</span>
                  </div>
                  <div>
                    <strong>Satin optical diffuser</strong>
                    <span>Soft, even spread with controlled glare at the desk.</span>
                  </div>
                  <div>
                    <strong>Weighted steel core</strong>
                    <span>Stability without a visually heavy base.</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="craftsmanship__visuals">
                <div className="craftsmanship__detail craftsmanship__detail--lamp">
                  <Image
                    src="/luma-lamp-reference.jpg"
                    alt="Evening-toned lamp reference showing dark metal stem and softly illuminated bulb."
                    fill
                    sizes="(max-width: 820px) 90vw, 30vw"
                    className="craftsmanship__photo craftsmanship__photo--lamp"
                  />
                </div>
                <div className="craftsmanship__detail craftsmanship__detail--surface" />
                <div className="craftsmanship__detail craftsmanship__detail--edge" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Selected voices"
                title="Understated praise from people who notice a room."
                copy="Writers, designers, architects, and remote workers all describe Luma Desk in the same terms: calmer, warmer, and more resolved."
                align="center"
              />
            </Reveal>
            <div className="testimonials__grid">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.name} delay={index * 100}>
                  <blockquote className="testimonial-card">
                    <p>{testimonial.quote}</p>
                    <footer>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="details" className="section details">
          <div className="container details__grid">
            <Reveal>
              <div className="details__intro">
                <span className="eyebrow">Product details</span>
                <h2>Everything essential, presented with restraint.</h2>
                <p>
                  Enough detail to understand the object. Nothing that turns the
                  page into a datasheet.
                </p>
              </div>
            </Reveal>

            <div className="spec-list">
              {specifications.map(([label, value], index) => (
                <Reveal key={label} delay={index * 70}>
                  <div className="spec-item">
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="reserve" className="section reserve">
          <div className="container">
            <Reveal>
              <div className="reserve__frame">
                <div className="reserve__copy">
                  <span className="eyebrow">Bring the room together</span>
                  <h2>A calmer light for the desk you keep returning to.</h2>
                  <p>
                    Reserve Luma Desk from $268. First release ships in October
                    with matte stone, graphite, and champagne finishes.
                  </p>
                  <div className="hero__actions">
                    <a className="button" href="mailto:hello@lumadesk.example">
                      Reserve yours
                    </a>
                    <a className="text-link" href="#modes">
                      Explore the scenes
                    </a>
                  </div>
                </div>
                <div className="reserve__visual">
                  <Image
                    src="/luma-lamp-reference.jpg"
                    alt="Minimal Luma Desk-style lamp visual for the final call to action."
                    fill
                    sizes="(max-width: 820px) 90vw, 24vw"
                    className="reserve__photo"
                  />
                  <div className="reserve__photo-glow" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div>
            <strong>Luma Desk</strong>
            <p>Smart light for focused work, calm spaces, and modern interiors.</p>
          </div>
          <p>Launch edition for Autumn 2026</p>
        </div>
      </footer>
    </div>
  );
}
