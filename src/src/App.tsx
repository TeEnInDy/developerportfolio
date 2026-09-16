import { useState } from 'react'

const PROJECTS = [
  {
    id: 1,
    featured: true,
    title: 'Luminary — AI Design System',
    description:
      'A full-stack design system generator that translates Figma tokens into production-ready Tailwind config, React components, and Storybook docs with zero manual labor. Used by 40+ teams.',
    tags: ['Next.js', 'Figma API', 'OpenAI', 'Tailwind'],
    year: '2024',
    role: 'Lead Engineer',
    link: '#',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop&auto=format',
    accent: '#A78BFA',
  },
  {
    id: 2,
    title: 'Flux — Real-time Collab',
    description: 'Multiplayer whiteboard with CRDT-based sync, sub-50ms latency across regions.',
    tags: ['WebSockets', 'Yjs', 'Canvas API'],
    year: '2024',
    role: 'Full-stack',
    link: '#',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&auto=format',
    accent: '#34D399',
  },
  {
    id: 3,
    title: 'Helix CLI',
    description: 'Developer workflow tool that scaffolds, lints, and deploys monorepos from a single config.',
    tags: ['Rust', 'CLI', 'WASM'],
    year: '2023',
    role: 'Author',
    link: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format',
    accent: '#60A5FA',
  },
  {
    id: 4,
    title: 'Meridian Analytics',
    description: 'Self-hosted product analytics built on ClickHouse. Tracks 2B+ events/month at $0.001 per event.',
    tags: ['Go', 'ClickHouse', 'React'],
    year: '2023',
    role: 'Co-founder',
    link: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=400&fit=crop&auto=format',
    accent: '#FB923C',
  },
  {
    id: 5,
    title: 'Orion — 3D Portfolio Engine',
    description: 'WebGL-powered creative portfolio template with scroll-driven 3D animations.',
    tags: ['Three.js', 'GSAP', 'TypeScript'],
    year: '2023',
    role: 'Creator',
    link: '#',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=700&h=400&fit=crop&auto=format',
    accent: '#F472B6',
  },
]

const SKILLS = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Rust', 'Go',
  'PostgreSQL', 'Redis', 'Docker', 'Figma', 'Three.js', 'WebGL',
]

function GlassCard({ className = '', children, style }: { className?: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      className={className}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: '24px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function Tag({ label, color }: { label: string; color?: string }) {
  return (
    <span
      className="font-display text-xs font-medium tracking-wide uppercase"
      style={{
        padding: '6px 12px',
        borderRadius: '999px',
        background: color ? `${color}18` : 'rgba(167,139,250,0.12)',
        border: `1px solid ${color ? `${color}30` : 'rgba(167,139,250,0.25)'}`,
        color: color ?? '#A78BFA',
        letterSpacing: '0.06em',
      }}
    >
      {label}
    </span>
  )
}

function HeroSection() {
  return (
    <section
      style={{ paddingTop: '160px', paddingBottom: '128px' }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px', position: 'relative' }}>

        {/* Ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>

          {/* Status badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '999px',
              background: 'rgba(167,139,250,0.10)',
              border: '1px solid rgba(167,139,250,0.25)',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399', boxShadow: '0 0 8px #34D399' }} />
              <span className="font-display" style={{ fontSize: '13px', color: '#A78BFA', fontWeight: 500, letterSpacing: '0.05em' }}>
                Available for new projects
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1
            className="font-display"
            style={{
              fontSize: '72px',
              lineHeight: '80px',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
              color: '#F5F5F5',
            }}
          >
            Crafting interfaces{' '}
            <br />
            <span style={{ color: '#A78BFA' }}>that feel inevitable.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-body"
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#A3A3A3',
              maxWidth: '520px',
              margin: '0 auto 48px',
            }}
          >
            I'm Thanapat — a full-stack engineer and design-minded builder. I turn complex ideas into
            software people actually want to use. Based in Bangkok, working globally.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#work"
              className="font-display"
              style={{
                padding: '14px 32px',
                borderRadius: '12px',
                background: '#A78BFA',
                color: '#0A0A0A',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
                display: 'inline-block',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = '0.88'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = '1'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              View my work
            </a>
            <a
              href="mailto:hello@thanapat.dev"
              className="font-display"
              style={{
                padding: '14px 32px',
                borderRadius: '12px',
                background: 'transparent',
                color: '#F5F5F5',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'border-color 0.2s, transform 0.2s',
                display: 'inline-block',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              Get in touch
            </a>
          </div>

          {/* Floating glassmorphism card */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-120px',
              top: '60px',
              width: '220px',
              animation: 'float 6s ease-in-out infinite',
            }}
          >
            <GlassCard style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(167,139,250,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '16px' }}>⚡</span>
                </div>
                <div>
                  <div className="font-display" style={{ fontSize: '12px', color: '#F5F5F5', fontWeight: 600 }}>Performance</div>
                  <div className="font-body" style={{ fontSize: '11px', color: '#A3A3A3' }}>Core Web Vitals</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[['LCP', '0.8s', '#34D399'], ['FID', '12ms', '#34D399'], ['CLS', '0.01', '#34D399']].map(([label, val, color]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="font-display" style={{ fontSize: '11px', color: '#A3A3A3', fontWeight: 500 }}>{label}</span>
                    <span className="font-display" style={{ fontSize: '11px', color: color as string, fontWeight: 700 }}>{val}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Second floating card */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '-100px',
              bottom: '-40px',
              width: '200px',
              animation: 'float 8s ease-in-out infinite reverse',
            }}
          >
            <GlassCard style={{ padding: '20px' }}>
              <div className="font-display" style={{ fontSize: '11px', color: '#A3A3A3', marginBottom: '8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['React', 'Go', 'Rust', 'SQL'].map(t => (
                  <span key={t} className="font-display" style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', color: '#F5F5F5', fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ maxWidth: '640px', margin: '96px auto 0', display: 'flex', justifyContent: 'center', gap: '64px' }}>
          {[['8+', 'Years building'], ['40+', 'Teams served'], ['2B+', 'Events/month']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div className="font-display" style={{ fontSize: '36px', fontWeight: 800, color: '#F5F5F5', letterSpacing: '-0.03em', lineHeight: 1 }}>{num}</div>
              <div className="font-body" style={{ fontSize: '14px', color: '#A3A3A3', marginTop: '6px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ project, span, rowSpan = 1 }: { project: typeof PROJECTS[0]; span: number; rowSpan?: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        gridColumn: `span ${span}`,
        gridRow: rowSpan > 1 ? `span ${rowSpan}` : undefined,
        position: 'relative',
      }}
    >
      <GlassCard
        style={{
          height: '100%',
          padding: '32px',
          overflow: 'hidden',
          position: 'relative',
          transition: 'border-color 0.3s, transform 0.3s',
          borderColor: hovered ? `${project.accent}40` : 'rgba(255,255,255,0.10)',
          transform: hovered ? 'translateY(-2px)' : 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div
          style={{
            width: '100%',
            height: span >= 8 ? '340px' : '180px',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '24px',
            background: '#111',
            flexShrink: 0,
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
            }}
          />
        </div>

        {/* Meta row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.tags.slice(0, span >= 8 ? 4 : 2).map(tag => (
              <Tag key={tag} label={tag} color={project.accent} />
            ))}
          </div>
          <span className="font-display" style={{ fontSize: '12px', color: '#555', fontWeight: 500 }}>{project.year}</span>
        </div>

        {/* Title */}
        <h3
          className="font-display"
          style={{
            fontSize: span >= 8 ? '28px' : '18px',
            lineHeight: span >= 8 ? '34px' : '24px',
            fontWeight: 700,
            color: '#F5F5F5',
            marginBottom: '12px',
            letterSpacing: '-0.02em',
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="font-body"
          style={{
            fontSize: '16px',
            lineHeight: '24px',
            color: '#A3A3A3',
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <span className="font-display" style={{ fontSize: '12px', color: '#555', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{project.role}</span>
          <a
            href={project.link}
            className="font-display"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: project.accent,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.gap = '8px')}
            onMouseLeave={e => (e.currentTarget.style.gap = '4px')}
          >
            View project <span>→</span>
          </a>
        </div>

        {/* Accent glow on hover */}
        {hovered && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)`,
            }}
          />
        )}
      </GlassCard>
    </div>
  )
}

function PortfolioSection() {
  const [featured, ...rest] = PROJECTS

  return (
    <section id="work" style={{ paddingBottom: '128px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px' }}>

        {/* Section header */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '16px' }}>
            <h2
              className="font-display"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                fontWeight: 800,
                color: '#F5F5F5',
                letterSpacing: '-0.03em',
              }}
            >
              Selected work
            </h2>
            <span className="font-body" style={{ fontSize: '14px', color: '#555' }}>/ 2023–2024</span>
          </div>
          <p className="font-body" style={{ fontSize: '16px', lineHeight: '24px', color: '#A3A3A3', maxWidth: '480px' }}>
            Projects that pushed boundaries — technically and visually. Each one built to last.
          </p>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
          }}
        >
          {/* Featured: 8 columns × 2 rows */}
          <ProjectCard project={featured} span={8} rowSpan={2} />

          {/* Right column: 4 columns, 2 stacked */}
          <ProjectCard project={rest[0]} span={4} />
          <ProjectCard project={rest[1]} span={4} />

          {/* Bottom row: 6 + 6 */}
          <ProjectCard project={rest[2]} span={6} />
          <ProjectCard project={rest[3]} span={6} />
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section style={{ paddingBottom: '128px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          {/* Left: heading */}
          <div>
            <h2
              className="font-display"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                fontWeight: 800,
                color: '#F5F5F5',
                letterSpacing: '-0.03em',
                marginBottom: '16px',
              }}
            >
              Tools I trust.
            </h2>
            <p className="font-body" style={{ fontSize: '16px', lineHeight: '24px', color: '#A3A3A3', maxWidth: '380px' }}>
              A curated stack refined over 8 years. I go deep, not wide — and I know when to reach for something new.
            </p>
          </div>

          {/* Right: skill tags */}
          <GlassCard style={{ padding: '32px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {SKILLS.map(skill => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section style={{ paddingBottom: '128px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 72px' }}>
        <GlassCard style={{ padding: '80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

          {/* Ambient */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-100px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative' }}>
            <h2
              className="font-display"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                fontWeight: 800,
                color: '#F5F5F5',
                letterSpacing: '-0.03em',
                marginBottom: '16px',
              }}
            >
              Let's build something<br />
              <span style={{ color: '#A78BFA' }}>worth remembering.</span>
            </h2>
            <p className="font-body" style={{ fontSize: '16px', lineHeight: '24px', color: '#A3A3A3', maxWidth: '400px', margin: '0 auto 48px' }}>
              I'm selective about what I take on. If you have a hard problem and a high bar, let's talk.
            </p>
            <a
              href="mailto:hello@thanapat.dev"
              className="font-display"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                borderRadius: '12px',
                background: '#A78BFA',
                color: '#0A0A0A',
                fontWeight: 700,
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = '0.88'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = '1'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              hello@thanapat.dev
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        width: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          padding: '12px 24px',
          borderRadius: '999px',
          background: 'rgba(10,10,10,0.85)',
          border: '1px solid rgba(255,255,255,0.10)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        <span className="font-display" style={{ fontSize: '15px', fontWeight: 700, color: '#F5F5F5', letterSpacing: '-0.02em' }}>TP</span>
        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.12)' }} />
        {[['Work', '#work'], ['About', '#about'], ['Contact', '#contact']].map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="font-display"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#A3A3A3',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F5')}
            onMouseLeave={e => (e.currentTarget.style.color = '#A3A3A3')}
          >
            {label}
          </a>
        ))}
        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.12)' }} />
        <a
          href="https://github.com"
          className="font-display"
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#A78BFA',
            textDecoration: 'none',
          }}
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '32px 72px', maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="font-display" style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>© 2024 Thanapat P.</span>
        <span className="font-body" style={{ fontSize: '13px', color: '#555' }}>Bangkok, Thailand · GMT+7</span>
      </footer>
    </div>
  )
}
