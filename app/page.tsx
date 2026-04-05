import Image from "next/image";
import Link from "next/link";
import { LightRays } from "@/components/luma/light-rays";
import { Reveal } from "@/components/luma/reveal";
import { SectionHeading } from "@/components/luma/section-heading";
import { SpotlightPanel } from "@/components/luma/spotlight-panel";
import { WaitlistForm } from "@/components/luma/waitlist-form";

const trustPoints = [
  {
    label: "Launch price",
    value: "From $268",
  },
  {
    label: "Brightness",
    value: "Up to 900 lumens",
  },
  {
    label: "Color range",
    value: "2700K to 5000K",
  },
  {
    label: "Launch window",
    value: "Ships October 2026",
  },
];

const modes = [
  {
    name: "Deep Focus",
    descriptor: "4300K balanced light",
    copy: "Bright, even light keeps paper, keyboard legends, and contrast clear during long work blocks.",
    tone: "mode-card--focus",
  },
  {
    name: "Soft Evening",
    descriptor: "2900K ambient glow",
    copy: "A warmer setting that lowers glare and makes the desk feel settled at the end of the day.",
    tone: "mode-card--evening",
  },
  {
    name: "Creative Session",
    descriptor: "Adaptive temperature shift",
    copy: "A middle ground for sketching, editing, and rearranging without making the room feel clinical.",
    tone: "mode-card--creative",
  },
  {
    name: "Reading Light",
    descriptor: "Low-glare task beam",
    copy: "A tighter pool of light for proofs, notebooks, and late reading when the rest of the room stays dim.",
    tone: "mode-card--reading",
  },
];

const testimonials = [
  {
    quote:
      "I stopped reaching for a second lamp. Luma gives me enough brightness for paperwork without flattening the whole room.",
    name: "Mina Keller",
    role: "Interior stylist",
  },
  {
    quote:
      "The touch surface is the part I notice most. Two days in, I stopped thinking about controls altogether.",
    name: "Arun Patel",
    role: "Product designer",
  },
  {
    quote:
      "It reads like a considered object even when it is off. That matters on a desk you see all day.",
    name: "Nora Villiers",
    role: "Architect",
  },
];

const specifications = [
  ["Brightness", "Up to 900 lumens with a low-glare diffuser"],
  ["Color temperature", "2700K to 5000K with warm memory recall"],
  ["Scenes", "Four presets plus press-and-hold dimming"],
  ["Automation", "Presence sensing for soft wake and fade-down"],
  ["Materials", "Machined aluminum, satin diffuser, braided cord"],
  ["Footprint", "16 cm base, 44 cm height, weighted steel core"],
];

const faqs = [
  {
    question: "What does the waitlist reserve?",
    answer:
      "It holds your place for the first launch batch and gives you the launch email before public availability.",
  },
  {
    question: "How is Luma powered?",
    answer:
      "The launch model uses a braided power cable and an internal driver tuned for desk use and low visual noise.",
  },
  {
    question: "Can I change brightness and warmth manually?",
    answer:
      "Yes. Tap to switch scenes, then press and hold to fine-tune brightness without opening an app.",
  },
  {
    question: "Will it work in a bedroom or only at a desk?",
    answer:
      "It is tuned for desks first, but the softer scenes are designed to feel comfortable in quieter rooms too.",
  },
  {
    question: "What finishes are in the launch edition?",
    answer:
      "Matte stone, graphite, and champagne. All three use the same satin diffuser and weighted base construction.",
  },
  {
    question: "Is there a warranty?",
    answer:
      "The launch plan includes a two-year limited warranty and replacement support for manufacturing defects.",
  },
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
            <a href="#benefits">Benefits</a>
            <a href="#how-it-works">How it works</a>
            <a href="#specs">Specs</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button button--ghost" href="#waitlist">
            Join waitlist
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero__grid">
            <div className="hero__content">
              <Reveal>
                <span className="eyebrow">Smart desk lamp</span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="hero__title">
                  Smart light that keeps the desk calm and focused.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="hero__copy">
                  Luma Desk combines low-glare brightness, touch dimming, saved
                  scenes, and a furniture-grade silhouette in one lamp built for
                  everyday work.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="hero__actions">
                  <a className="button" href="#waitlist">
                    Join the waitlist
                  </a>
                  <a className="text-link" href="#benefits">
                    See why it works
                  </a>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="hero__proof">
                  <div>
                    <strong>900 lm</strong>
                    <span>Low-glare output</span>
                  </div>
                  <div>
                    <strong>4 scenes</strong>
                    <span>Tap and hold control</span>
                  </div>
                  <div>
                    <strong>2-year</strong>
                    <span>Launch warranty</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={460}>
                <div className="hero__note">
                  <p>Launch edition</p>
                  <span>
                    Three finishes, October 2026 ship window, early-access
                    pricing for the first batch.
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
                    <strong>From warm evenings to bright desk work</strong>
                  </div>
                  <div>
                    <span className="hero__spec-label">Touch control</span>
                    <strong>Tap scenes, hold to dim, no app required</strong>
                  </div>
                  <div>
                    <span className="hero__spec-label">Presence sensing</span>
                    <strong>Wakes softly when you return</strong>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-strip__inner">
            {trustPoints.map((point) => (
              <div key={point.label} className="trust-point">
                <span>{point.label}</span>
                <strong>{point.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="section story">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Benefits"
                title="A lamp that solves glare, control, and desk clutter at once."
                copy="Every part of Luma is there to make the desk easier to work at and easier to look at."
              />
            </Reveal>

            <div className="story-grid">
              <Reveal className="feature-block">
                <div className="feature-block__copy">
                  <span className="feature-block__index">01</span>
                  <h3>See paper clearly from morning to midnight.</h3>
                  <p>
                    Luma shifts from crisp daytime output to softer evening
                    light without forcing you to choose between clarity and
                    comfort.
                  </p>
                  <ul className="feature-list">
                    <li>Balanced 2700K to 5000K color range.</li>
                    <li>Low-glare diffuser keeps contrast comfortable.</li>
                    <li>Warm memory recalls your last preferred tone.</li>
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
                  <h3>Change the light without breaking your flow.</h3>
                  <p>
                    Tap for scenes. Hold for dimming. The control surface is
                    direct enough to learn once and forget.
                  </p>
                  <ul className="feature-list">
                    <li>Capacitive edge with muted haptic feedback.</li>
                    <li>Fast scene changes with no app dependency.</li>
                    <li>Gradual night fade instead of abrupt shutoff.</li>
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
                  <h3>Keep the desk looking resolved when the lamp is off.</h3>
                  <p>
                    The form stays quiet on the desk: weighted, stable, and
                    finished like a permanent object rather than a gadget.
                  </p>
                  <ul className="feature-list">
                    <li>Machined aluminum with a bead-blasted finish.</li>
                    <li>Weighted base for smaller desks and shelves.</li>
                    <li>Braided cable and concealed joints reduce clutter.</li>
                  </ul>
                </div>
                <div className="feature-visual feature-visual--form">
                  <div className="photo-panel photo-panel--detail">
                    <Image
                      src="/luma-lamp-reference.jpg"
                      alt="Close view of the lamp showing the dark metal frame and softly glowing bulb."
                      fill
                      sizes="(max-width: 820px) 90vw, 36vw"
                      className="photo-panel__image photo-panel__image--detail"
                    />
                  </div>
                  <div className="photo-panel__caption">
                    Weighted base, satin diffuser, and restrained geometry.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section modes">
          <div className="container modes__grid">
            <Reveal>
              <SectionHeading
                eyebrow="How it works"
                title="Four saved scenes and one touch surface."
                copy="Choose a starting scene with one tap, then fine-tune brightness as the room changes around you."
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

        <section id="specs" className="section craftsmanship">
          <div className="container craftsmanship__frame">
            <Reveal>
              <div className="craftsmanship__copy">
                <span className="eyebrow eyebrow--light">Built to last</span>
                <h2>Daily-use hardware with the manners of a furniture piece.</h2>
                <p>
                  Luma is designed to stay visible on the desk all day: durable
                  materials, softer optical diffusion, and a base that feels
                  stable without looking heavy.
                </p>
                <div className="craftsmanship__details">
                  <div>
                    <strong>Bead-blasted aluminum</strong>
                    <span>Dry, low-sheen finish that avoids the gadget look.</span>
                  </div>
                  <div>
                    <strong>Satin optical diffuser</strong>
                    <span>Even spread with controlled glare on paper and screens.</span>
                  </div>
                  <div>
                    <strong>Weighted steel core</strong>
                    <span>Confident stability on compact desks and side tables.</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="craftsmanship__visuals">
                <div className="craftsmanship__detail craftsmanship__detail--lamp">
                  <Image
                    src="/luma-workspace.jpg"
                    alt="Workspace scene showing the lamp inside a warm, quiet interior."
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

        <section className="section details">
          <div className="container details__grid">
            <Reveal>
              <div className="details__intro">
                <span className="eyebrow">Specs</span>
                <h2>Key details, fast to scan.</h2>
                <p>
                  Enough information to understand the product before you join
                  the list.
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

        <section id="reviews" className="section testimonials">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Reviews"
                title="People notice three things right away: less glare, faster control, calmer rooms."
                copy="The strongest feedback is practical. Better task light, less visual noise, and a lamp that still looks good when idle."
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

        <section id="faq" className="section faq">
          <div className="container faq__grid">
            <Reveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Answer the obvious questions before asking for the click."
                copy="Shipping, controls, finishes, and warranty are the main blockers. The answers live here."
              />
            </Reveal>

            <div className="faq-list">
              {faqs.map((item, index) => (
                <Reveal key={item.question} delay={index * 70}>
                  <details className="faq-item">
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" className="section reserve">
          <div className="container">
            <Reveal>
              <div className="reserve__frame">
                <div className="reserve__copy">
                  <span className="eyebrow">Waitlist</span>
                  <h2>Get launch access before the first batch opens.</h2>
                  <p>
                    Join the list for launch pricing, finish availability, and
                    the October 2026 shipping update.
                  </p>
                  <WaitlistForm />
                  <ul className="reserve__meta">
                    <li>Early-access pricing from $268</li>
                    <li>Three launch finishes</li>
                    <li>Two-year limited warranty</li>
                  </ul>
                </div>
                <div className="reserve__visual">
                  <Image
                    src="/luma-workspace.jpg"
                    alt="Warm workspace scene with the lamp illuminating a desk."
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
            <p>Smart desk light for focused work, calmer rooms, and cleaner surfaces.</p>
          </div>
          <p>Launch edition, October 2026</p>
        </div>
      </footer>
    </div>
  );
}
