import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--f-display" });
const body = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--f-mono" });

export const metadata: Metadata = {
  title: "David Small",
  description:
    "David Small — Computer Science student at the University of Reading and founder of The Audience Engine and Mockly.",
};

const LINKS = {
  email: "davidsmall7890@gmail.com",
  github: "https://github.com/davidsmall7890",
  linkedin: "https://www.linkedin.com/in/david-small-713842ds366/",
};

type Link = { label: string; href: string };
type Work = { name: string; kind: string; blurb: string; tags: string[]; links: Link[]; muted?: boolean };

const MORE_WORK: Work[] = [
  {
    name: "Violette Ltd",
    kind: "Contract",
    blurb: "Contract web developer since October 2024. Built and maintain the artist website and its online merch store.",
    tags: ["Web development", "E-commerce"],
    links: [
      { label: "zachtemplar.com", href: "https://zachtemplar.com" },
      { label: "shop.zachtemplar.com", href: "https://shop.zachtemplar.com" },
    ],
  },
  {
    name: "Zavior Records",
    kind: "Website",
    blurb: "Website for an independent record label.",
    tags: ["Web development"],
    links: [{ label: "zaviorrecords.com", href: "https://zaviorrecords.com" }],
  },
  {
    name: "Zavior Hart",
    kind: "E-commerce",
    blurb: "Online store for a clothing brand.",
    tags: ["E-commerce"],
    links: [{ label: "zaviorhart.com", href: "https://zaviorhart.com" }],
  },
  {
    name: "Buzzspot",
    kind: "Discontinued",
    blurb: "Mobile app I built and published on the App Store, since retired.",
    tags: ["Mobile app", "App Store"],
    links: [],
    muted: true,
  },
];

const STACK = ["TypeScript", "Next.js", "React Native", "Supabase", "Firebase", "OpenAI Realtime API", "Python", "Git"];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Page() {
  return (
    <main className={`pf ${display.variable} ${body.variable} ${mono.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="shell">
        <nav className="nav">
          <a href="#top" className="mark" aria-label="David Small, home">
            DS<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* HERO */}
        <header className="hero" id="top">
          <p className="status">
            <span className="dot" aria-hidden="true" />
            Open to graduate software engineering roles · 2027
          </p>
          <h1>
            David Small builds <em>products</em> people actually use.
          </h1>
          <p className="lede">
            Final-year Computer Science student at the University of Reading. I&rsquo;ve designed, built and launched two
            products of my own, a B2B SaaS for the music industry and an AI interview app on the App Store, alongside
            client websites and e-commerce stores.
          </p>
          <div className="cta">
            <a href="#work" className="btn primary">
              See my work
            </a>
            <a href={`mailto:${LINKS.email}`} className="btn">
              Email me
            </a>
            <a href={LINKS.github} className="btn ghost" {...ext}>
              GitHub ↗
            </a>
            <a href={LINKS.linkedin} className="btn ghost" {...ext}>
              LinkedIn ↗
            </a>
          </div>

          <dl className="facts">
            <div>
              <dt>Live products</dt>
              <dd>2</dd>
            </div>
            <div>
              <dt>Apps shipped to the App Store</dt>
              <dd>2</dd>
            </div>
            <div>
              <dt>Production websites</dt>
              <dd>4</dd>
            </div>
          </dl>
        </header>

        {/* PRODUCTS */}
        <section id="work" className="section">
          <div className="section-head">
            <span className="eyebrow">01 — Products</span>
            <h2>Things I founded and built end to end</h2>
          </div>

          <article className="feature">
            <div className="feature-copy">
              <div className="feature-meta">
                <span className="pill live">Live</span>
                <span className="pill">Founder</span>
              </div>
              <h3>The Audience Engine</h3>
              <p className="tagline">Creator campaign management for music teams.</p>
              <p>
                B2B SaaS for labels, agencies and artist teams running creator campaigns. It handles creator offers and
                approvals, tracks every post, and turns the results into client-ready reports, replacing the spreadsheets
                most teams run this on today.
              </p>
              <ul className="tags">
                <li>B2B SaaS</li>
                <li>Web app</li>
                <li>Reporting</li>
              </ul>
              <div className="links">
                <a href="https://theaudienceengine.co.uk" {...ext}>
                  theaudienceengine.co.uk ↗
                </a>
              </div>
            </div>

            <div className="feature-visual tae" aria-hidden="true">
              <div className="win">
                <div className="win-bar">
                  <i />
                  <i />
                  <i />
                  <span>Campaign · New single</span>
                </div>
                <div className="win-body">
                  <div className="tae-chart">
                    {[38, 52, 46, 70, 64, 88, 80].map((h, i) => (
                      <span key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="tae-rows">
                    {[
                      ["@creator.one", "Posted", "ok"],
                      ["@creator.two", "Approved", "mid"],
                      ["@creator.three", "Offer sent", "wait"],
                    ].map(([h, s, t]) => (
                      <div className="tae-row" key={h}>
                        <span className="avatar" />
                        <span className="handle">{h}</span>
                        <span className={`st ${t}`}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="feature flip">
            <div className="feature-copy">
              <div className="feature-meta">
                <span className="pill live">Live on the App Store</span>
                <span className="pill">Founder</span>
              </div>
              <h3>Mockly</h3>
              <p className="tagline">Practise interviews out loud with an AI interviewer.</p>
              <p>
                An iOS app for students preparing for internships and graduate schemes. Interviews run as a realtime
                voice conversation on OpenAI&rsquo;s Realtime API, with a separate app and API. Launched in September
                2026.
              </p>
              <ul className="tags">
                <li>React Native</li>
                <li>Realtime voice AI</li>
                <li>Subscriptions</li>
              </ul>
              <div className="links">
                <a href="https://mockly-app.com" {...ext}>
                  mockly-app.com ↗
                </a>
                <a href="https://apps.apple.com/us/app/mockly/id6760736117" {...ext}>
                  App Store ↗
                </a>
              </div>
            </div>

            <div className="feature-visual mockly" aria-hidden="true">
              <div className="phone">
                <div className="notch" />
                <div className="ph-top">
                  <b>M.</b>
                  <span>Live interview</span>
                </div>
                <p className="q">&ldquo;Tell me about a time you had to learn something fast.&rdquo;</p>
                <div className="wave">
                  {Array.from({ length: 22 }).map((_, i) => (
                    <span key={i} style={{ animationDelay: `${(i % 7) * 0.12}s` }} />
                  ))}
                </div>
                <div className="mic" />
              </div>
            </div>
          </article>
        </section>

        {/* MORE WORK */}
        <section className="section">
          <div className="section-head">
            <span className="eyebrow">02 — More work</span>
            <h2>Client sites, e-commerce and apps</h2>
          </div>
          <div className="grid">
            {MORE_WORK.map((w) => (
              <article className={`card${w.muted ? " muted" : ""}`} key={w.name}>
                <div className="card-top">
                  <h3>{w.name}</h3>
                  <span className="pill">{w.kind}</span>
                </div>
                <p>{w.blurb}</p>
                <ul className="tags">
                  {w.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {w.links.length > 0 && (
                  <div className="links">
                    {w.links.map((l) => (
                      <a key={l.href} href={l.href} {...ext}>
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-head">
            <span className="eyebrow">03 — About</span>
            <h2>How I work</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I care more about shipping something people will pay for than writing perfect code. Both of my products
                started as ideas I took all the way: design, backend, launch, and the first customer conversations.
              </p>
              <p>
                I&rsquo;m looking for a graduate role where I can bring that same ownership to a strong engineering
                team, and learn how great software gets built at scale.
              </p>
            </div>
            <div>
              <p className="label">Stack I use day to day</p>
              <ul className="stack">
                {STACK.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="label">Education</p>
              <p className="edu">
                BSc Computer Science, University of Reading
                <br />
                <span>2024 – 2027 · Predicted First</span>
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <span className="eyebrow">04 — Contact</span>
          <h2>Let&rsquo;s talk.</h2>
          <a className="email" href={`mailto:${LINKS.email}`}>
            {LINKS.email}
          </a>
          <div className="cta">
            <a href={LINKS.github} className="btn ghost" {...ext}>
              GitHub ↗
            </a>
            <a href={LINKS.linkedin} className="btn ghost" {...ext}>
              LinkedIn ↗
            </a>
          </div>
        </section>

        <footer className="foot">
          <span>© {new Date().getFullYear()} David Small</span>
          <span>Reading, UK</span>
        </footer>
      </div>
    </main>
  );
}

const CSS = `
.pf{
  --bg:#F6F5F1; --bg-2:#EDECE6; --card:#FFFFFF; --ink:#111316; --ink-2:#555A61; --ink-3:#8A8F95;
  --line:#E0DED6; --accent:#2B45E0; --accent-ink:#FFFFFF; --accent-soft:#E4E8FD; --ok:#1F8A5B; --ok-soft:#DDF1E6;
  --mid:#B7791F; --mid-soft:#F7EBD6;
  --display:var(--f-display), "Helvetica Neue", Arial, sans-serif;
  --sans:var(--f-body), system-ui, sans-serif;
  --mono:var(--f-mono), ui-monospace, monospace;
  background:var(--bg); color:var(--ink); font-family:var(--sans); min-height:100vh;
  -webkit-font-smoothing:antialiased; line-height:1.55;
}
@media (prefers-color-scheme: dark){
  .pf{
    --bg:#0E1013; --bg-2:#15181C; --card:#171A1E; --ink:#F1F0EC; --ink-2:#A3A8AE; --ink-3:#6E747A;
    --line:#262A30; --accent:#8B9CFF; --accent-ink:#0E1013; --accent-soft:#1E2442; --ok:#5FD39A; --ok-soft:#15301F;
    --mid:#E9B35C; --mid-soft:#33271A;
    color-scheme:dark;
  }
}
.pf *{box-sizing:border-box}
.pf a{color:inherit}
.pf h1,.pf h2,.pf h3{font-family:var(--display); margin:0; text-wrap:balance; letter-spacing:-0.02em}
.pf p{margin:0}
.pf ul{list-style:none; margin:0; padding:0}
.pf :focus-visible{outline:2px solid var(--accent); outline-offset:3px; border-radius:6px}

.shell{max-width:1040px; margin:0 auto; padding-inline:24px}

/* nav */
.nav{display:flex; justify-content:space-between; align-items:center; padding-block:24px}
.mark{font-family:var(--display); font-weight:800; font-size:20px; text-decoration:none; letter-spacing:-0.03em}
.mark span{color:var(--accent)}
.nav-links{display:flex; gap:24px; font-size:14px}
.nav-links a{text-decoration:none; color:var(--ink-2)}
.nav-links a:hover{color:var(--ink)}

/* hero */
.hero{padding-block:64px 56px; display:flex; flex-direction:column; gap:24px}
.status{display:inline-flex; align-items:center; gap:10px; align-self:flex-start; font-family:var(--mono);
  font-size:12.5px; color:var(--ink-2); background:var(--card); border:1px solid var(--line);
  padding:7px 14px 7px 12px; border-radius:999px}
.dot{width:8px; height:8px; border-radius:50%; background:var(--ok); box-shadow:0 0 0 0 var(--ok); animation:pulse 2.2s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 color-mix(in srgb, var(--ok) 55%, transparent)}70%{box-shadow:0 0 0 8px transparent}100%{box-shadow:0 0 0 0 transparent}}
.hero h1{font-size:clamp(40px, 7.4vw, 84px); line-height:0.98; font-weight:800; max-width:14ch}
.hero h1 em{font-style:normal; color:var(--accent)}
.lede{font-size:clamp(17px, 2vw, 19px); color:var(--ink-2); max-width:60ch}
.cta{display:flex; flex-wrap:wrap; gap:10px}
.btn{display:inline-flex; align-items:center; gap:6px; text-decoration:none; font-weight:600; font-size:14.5px;
  padding:11px 18px; border-radius:10px; border:1px solid var(--line); background:var(--card);
  transition:transform .15s ease, border-color .15s ease, background .15s ease}
.btn:hover{transform:translateY(-1px); border-color:var(--ink-3)}
.btn.primary{background:var(--ink); color:var(--bg); border-color:var(--ink)}
.btn.ghost{background:transparent}

.facts{display:grid; grid-template-columns:repeat(3, 1fr); margin:24px 0 0; border-top:1px solid var(--line)}
.facts div{padding:20px 20px 0 0; display:flex; flex-direction:column-reverse; gap:4px}
.facts div + div{padding-left:20px; border-left:1px solid var(--line)}
.facts dt{font-size:13px; color:var(--ink-2)}
.facts dd{margin:0; font-family:var(--display); font-weight:700; font-size:clamp(32px, 5vw, 44px); line-height:1; font-variant-numeric:tabular-nums}

/* sections */
.section{padding-block:56px}
.section-head{display:flex; flex-direction:column; gap:8px; margin-bottom:32px}
.eyebrow{font-family:var(--mono); font-size:12px; letter-spacing:.06em; text-transform:uppercase; color:var(--accent)}
.section-head h2{font-size:clamp(26px, 3.6vw, 36px); font-weight:700}

/* feature */
.feature{display:grid; grid-template-columns:1.05fr 1fr; gap:40px; align-items:center; background:var(--card);
  border:1px solid var(--line); border-radius:24px; padding:40px; overflow:hidden}
.feature + .feature{margin-top:24px}
.feature.flip .feature-copy{order:2}
.feature-copy{display:flex; flex-direction:column; gap:14px}
.feature-meta{display:flex; gap:8px; flex-wrap:wrap}
.feature h3{font-size:clamp(28px, 3.4vw, 38px); font-weight:800}
.tagline{font-size:18px; font-weight:500}
.feature-copy > p:not(.tagline){color:var(--ink-2); max-width:52ch}

.pill{font-family:var(--mono); font-size:11.5px; padding:4px 10px; border-radius:999px; background:var(--bg-2);
  color:var(--ink-2); white-space:nowrap; border:1px solid var(--line)}
.pill.live{background:var(--ok-soft); color:var(--ok); border-color:transparent}

.tags{display:flex; flex-wrap:wrap; gap:6px}
.tags li{font-family:var(--mono); font-size:11.5px; color:var(--ink-2); border:1px solid var(--line); padding:3px 9px; border-radius:6px}
.links{display:flex; flex-wrap:wrap; gap:18px; font-family:var(--mono); font-size:13px}
.links a{color:var(--accent); text-decoration:none; border-bottom:1px solid transparent}
.links a:hover{border-bottom-color:var(--accent)}

.feature-visual{border-radius:18px; min-height:320px; display:grid; place-items:center; padding:28px; position:relative}

/* TAE visual */
.feature-visual.tae{background:
  radial-gradient(120% 90% at 100% 0%, var(--accent-soft), transparent 60%), var(--bg-2)}
.win{width:100%; max-width:380px; background:var(--card); border:1px solid var(--line); border-radius:14px;
  box-shadow:0 20px 50px -24px rgba(17,19,22,.35); overflow:hidden; transform:rotate(-1.5deg)}
.win-bar{display:flex; align-items:center; gap:6px; padding:10px 14px; border-bottom:1px solid var(--line); font-family:var(--mono); font-size:11px; color:var(--ink-3)}
.win-bar i{width:9px; height:9px; border-radius:50%; background:var(--line)}
.win-bar span{margin-left:8px}
.win-body{padding:16px; display:flex; flex-direction:column; gap:16px}
.tae-chart{height:96px; display:flex; align-items:flex-end; gap:8px; padding-bottom:6px; border-bottom:1px dashed var(--line)}
.tae-chart span{flex:1; border-radius:5px 5px 2px 2px; background:var(--accent); opacity:.85}
.tae-chart span:last-child{opacity:1}
.tae-rows{display:flex; flex-direction:column; gap:10px}
.tae-row{display:flex; align-items:center; gap:10px; font-size:13px}
.avatar{width:22px; height:22px; border-radius:50%; background:linear-gradient(135deg, var(--accent-soft), var(--line))}
.handle{flex:1; font-family:var(--mono); font-size:12px}
.st{white-space:nowrap; font-family:var(--mono); font-size:10.5px; padding:3px 8px; border-radius:999px}
.st.ok{background:var(--ok-soft); color:var(--ok)}
.st.mid{background:var(--accent-soft); color:var(--accent)}
.st.wait{background:var(--mid-soft); color:var(--mid)}

/* Mockly visual */
.feature-visual.mockly{background:radial-gradient(90% 80% at 0% 100%, #1D5A3E, transparent 70%), #0C2419}
.phone{width:220px; height:400px; border-radius:36px; background:#0A1A12; border:6px solid #1B2B23;
  box-shadow:0 30px 60px -20px rgba(0,0,0,.6); padding:34px 18px 22px; display:flex; flex-direction:column; gap:22px;
  position:relative; color:#E7F5EC; transform:rotate(2deg)}
.notch{position:absolute; top:10px; left:50%; transform:translateX(-50%); width:70px; height:18px; border-radius:999px; background:#1B2B23}
.ph-top{display:flex; justify-content:space-between; align-items:center; font-family:var(--mono); font-size:10.5px; color:#8FD4AE}
.ph-top b{font-family:var(--display); font-size:18px; color:#E7F5EC}
.q{font-family:var(--display); font-weight:500; font-size:17px; line-height:1.25}
.wave{flex:1; display:flex; align-items:center; justify-content:center; gap:3px}
.wave span{width:4px; height:30%; border-radius:4px; background:#7FE0A8; animation:talk 1.1s ease-in-out infinite alternate}
.wave span:nth-child(3n){height:55%} .wave span:nth-child(4n){height:75%} .wave span:nth-child(5n){height:40%}
@keyframes talk{from{transform:scaleY(.35)}to{transform:scaleY(1)}}
.mic{width:54px; height:54px; border-radius:50%; align-self:center; background:#7FE0A8;
  box-shadow:0 0 0 8px rgba(127,224,168,.15), 0 0 0 16px rgba(127,224,168,.07)}

/* more work grid */
.grid{display:grid; grid-template-columns:repeat(2, 1fr); gap:16px}
.card{background:var(--card); border:1px solid var(--line); border-radius:18px; padding:24px;
  display:flex; flex-direction:column; gap:12px; transition:border-color .15s ease, transform .15s ease}
.card:hover{border-color:var(--ink-3); transform:translateY(-2px)}
.card-top{display:flex; justify-content:space-between; align-items:center; gap:12px}
.card h3{font-size:20px; font-weight:700}
.card p{color:var(--ink-2); font-size:15px}
.card .tags{margin-top:auto}
.card.muted h3{color:var(--ink-2)}

/* about */
.about-grid{display:grid; grid-template-columns:1.3fr 1fr; gap:48px}
.about-copy{display:flex; flex-direction:column; gap:16px; font-size:18px; max-width:56ch}
.label{font-family:var(--mono); font-size:12px; text-transform:uppercase; letter-spacing:.06em; color:var(--ink-3); margin-bottom:12px !important}
.pf .stack{display:flex; flex-wrap:wrap; gap:8px; margin-bottom:28px}
.stack li{font-size:14px; padding:6px 12px; border-radius:8px; background:var(--card); border:1px solid var(--line)}
.edu{font-size:15px; font-weight:500}
.edu span{color:var(--ink-2); font-weight:400}

/* contact */
.contact{margin-block:40px 24px; padding:56px 40px; border-radius:28px; background:var(--ink); color:var(--bg);
  display:flex; flex-direction:column; gap:18px; align-items:flex-start}
.contact .eyebrow{color:color-mix(in srgb, var(--bg) 60%, transparent)}
.contact h2{font-size:clamp(40px, 7vw, 72px); font-weight:800; line-height:1}
.email{font-family:var(--display); font-size:clamp(20px, 3.2vw, 30px); font-weight:500; text-decoration:none;
  border-bottom:2px solid color-mix(in srgb, var(--bg) 35%, transparent); word-break:break-all}
.email:hover{border-bottom-color:var(--bg)}
.contact .btn{color:var(--bg); border-color:color-mix(in srgb, var(--bg) 25%, transparent)}
.contact .btn:hover{border-color:var(--bg)}

.foot{display:flex; justify-content:space-between; padding-block:24px 40px; font-size:13px; color:var(--ink-3)}

/* responsive */
@media (max-width:820px){
  .feature{grid-template-columns:1fr; padding:28px; gap:28px}
  .feature.flip .feature-copy{order:0}
  .about-grid{grid-template-columns:1fr; gap:32px}
}
@media (max-width:600px){
  .grid{grid-template-columns:1fr}
  .facts{grid-template-columns:1fr}
  .facts div, .facts div + div{padding:16px 0; border-left:0; border-bottom:1px solid var(--line)}
  .nav-links{gap:16px}
  .hero{padding-block:40px}
  .contact{padding:40px 24px}
  .feature-visual{min-height:280px; padding:20px}
}
@media (prefers-reduced-motion: reduce){
  .pf *{animation:none !important; transition:none !important}
}
`;