import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function LandingPage() {
  const orange = '#f97316'
  const cream = '#fdf7ee'
  const ink = '#111827'

  return (
    <main
      style={{
        minHeight: '100vh',
        background: cream,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '1.5rem 1.25rem 3.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        {/* Top nav */}
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: '1.3rem',
                letterSpacing: '-0.04em',
                color: ink,
              }}
            >
              Stock
              <span style={{ color: orange }}>Scan</span>
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/app/login"
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: 999,
                border: `1px solid ${ink}`,
                background: 'transparent',
                color: ink,
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              style={{
                padding: '0.6rem 1.35rem',
                borderRadius: 999,
                border: `1px solid ${ink}`,
                background: ink,
                color: '#f9fafb',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Start free trial
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            maxWidth: 640,
          }}
        >
          <span
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.35rem 0.85rem',
              borderRadius: 999,
              background: orange,
              color: '#111827',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            AI-powered inventory OCR
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
            }}
          >
            <span style={{ color: ink, display: 'block' }}>Count inventory.</span>
            <span style={{ color: orange, display: 'block' }}>Not hours.</span>
          </h1>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: '#4b5563',
              maxWidth: 520,
            }}
          >
            StockScan turns photos of your shelves into a clean, export‑ready inventory sheet. Built
            for bars, restaurants, and busy operators who can&apos;t afford to spend Sunday night in
            a spreadsheet.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.9rem',
              alignItems: 'center',
              marginTop: '0.25rem',
            }}
          >
            <Link
              href="/signup"
              style={{
                padding: '0.85rem 1.6rem',
                borderRadius: 999,
                border: 'none',
                background: orange,
                color: '#111827',
                fontSize: '0.95rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Start Free Trial →
            </Link>

            <Link
              href="/app/login"
              style={{
                padding: '0.85rem 1.5rem',
                borderRadius: 999,
                border: `1px solid ${ink}`,
                background: 'transparent',
                color: ink,
                fontSize: '0.95rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Sign in
            </Link>

            <span
              style={{
                width: '100%',
                fontSize: '0.82rem',
                color: '#6b7280',
                marginTop: '0.2rem',
              }}
            >
              No credit card required · Free trial included
            </span>
          </div>
        </section>
      </div>
    </main>
  )
}
