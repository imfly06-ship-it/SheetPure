import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top left, #eef2ff 0, #f9fafb 45%, #f3f4f6 100%)',
        padding: '2.5rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1040,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        {/* Left: hero copy */}
        <section>
          <div style={{ marginBottom: '1.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.9rem',
                borderRadius: 999,
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: '#0f172a',
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '999px',
                  background: 'rgb(56, 189, 248)',
                  boxShadow: '0 0 0 4px rgba(56, 189, 248, 0.25)',
                }}
              />
              Inventory in minutes — not hours
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
              letterSpacing: '-0.04em',
              color: 'var(--ink)',
              marginBottom: '1rem',
            }}
          >
            Count bottles, not cells.
          </h1>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--ink-faint)',
              maxWidth: 520,
              marginBottom: '1.8rem',
            }}
          >
            Stock<span style={{ color: 'var(--accent)', fontWeight: 600 }}>Scan</span> turns photos of your
            shelves into a clean, export-ready inventory sheet. Designed for bars, restaurants, and busy
            operators who don&apos;t have hours to spend in spreadsheets.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <Link
              href="/signup"
              className="btn btn-accent"
              style={{
                padding: '0.9rem 1.5rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: 999,
                textDecoration: 'none',
              }}
            >
              Start free trial →
            </Link>

            <Link
              href="/app/login"
              className="btn btn-secondary"
              style={{
                padding: '0.9rem 1.4rem',
                fontSize: '0.95rem',
                fontWeight: 500,
                borderRadius: 999,
                textDecoration: 'none',
              }}
            >
              Sign in
            </Link>

            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--ink-faint)',
                marginLeft: '0.1rem',
              }}
            >
              No credit card required.
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              fontSize: '0.82rem',
              color: 'var(--ink-faint)',
            }}
          >
            <div>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>5× faster counts</div>
              <div>Operators cut Sunday night inventory from 3 hours to under 40 minutes.</div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Spreadsheet ready</div>
              <div>Export a clean Excel file that drops directly into your existing workflows.</div>
            </div>
          </div>
        </section>

        {/* Right: product preview card */}
        <aside>
          <div
            style={{
              background: 'white',
              borderRadius: 24,
              padding: '1.6rem 1.6rem 1.4rem',
              boxShadow:
                '0 22px 45px rgba(15, 23, 42, 0.16), 0 0 0 1px rgba(148, 163, 184, 0.18)',
              border: '1px solid rgba(148, 163, 184, 0.25)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    letterSpacing: '-0.04em',
                    color: 'var(--ink)',
                  }}
                >
                  Stock<span style={{ color: 'var(--accent)' }}>Scan</span>
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.7rem',
                  borderRadius: 999,
                  background: '#ecfdf5',
                  color: '#166534',
                  fontWeight: 600,
                }}
              >
                Live demo
              </span>
            </div>

            <div
              style={{
                borderRadius: 18,
                background:
                  'radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 55%), radial-gradient(circle at bottom right, rgba(52,211,153,0.12), transparent 55%)',
                border: '1px solid rgba(226, 232, 240, 1)',
                padding: '1.1rem 1rem 1.1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                  fontSize: '0.8rem',
                  color: 'var(--ink-faint)',
                }}
              >
                <span>Tonight&apos;s inventory session</span>
                <span style={{ fontWeight: 500 }}>Bar · Walk‑in · Cellar</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
                  gap: '0.8rem',
                  alignItems: 'stretch',
                }}
              >
                <div
                  style={{
                    background: 'white',
                    borderRadius: 14,
                    border: '1px solid #e5e7eb',
                    padding: '0.75rem 0.8rem',
                    fontSize: '0.78rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>Areas</span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        padding: '0.1rem 0.5rem',
                        borderRadius: 999,
                        background: '#eff6ff',
                        color: '#1d4ed8',
                        fontWeight: 600,
                      }}
                    >
                      Live
                    </span>
                  </div>
                  <div style={{ display: 'grid', gap: '0.4rem' }}>
                    {['Main bar', 'Walk‑in fridge', 'Dry storage'].map((name, i) => (
                      <div
                        key={name}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.35rem 0.35rem',
                          borderRadius: 9,
                          background: i === 0 ? '#eef2ff' : 'transparent',
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 500,
                            color: '#111827',
                            fontSize: '0.78rem',
                          }}
                        >
                          {name}
                        </span>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            color: '#6b7280',
                          }}
                        >
                          {i === 0 ? '18 items' : i === 1 ? '24 items' : 'Saved'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    background: '#020617',
                    borderRadius: 14,
                    padding: '0.75rem 0.8rem',
                    color: '#e5e7eb',
                    fontSize: '0.78rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'radial-gradient(circle at top right, rgba(56,189,248,0.25), transparent 55%)',
                      opacity: 0.9,
                      pointerEvents: 'none',
                    }}
                  />
                  <div style={{ position: 'relative' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>AI inventory table</span>
                      <span style={{ fontSize: '0.72rem', color: '#a5b4fc' }}>Export → Excel</span>
                    </div>
                    <div
                      style={{
                        borderRadius: 10,
                        border: '1px solid rgba(148,163,184,0.65)',
                        overflow: 'hidden',
                        background: 'rgba(15,23,42,0.75)',
                      }}
                    >
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '2.2fr 1fr 1fr 1.1fr',
                          borderBottom: '1px solid rgba(148,163,184,0.65)',
                          background: 'rgba(15,23,42,0.9)',
                        }}
                      >
                        {['Item', 'Unit', 'On hand', 'Par'].map((h) => (
                          <div
                            key={h}
                            style={{
                              padding: '0.22rem 0.35rem',
                              fontSize: '0.7rem',
                              color: '#cbd5f5',
                              fontWeight: 600,
                            }}
                          >
                            {h}
                          </div>
                        ))}
                      </div>
                      {[
                        ['Don Julio Blanco', 'bottle', '2.5', '3'],
                        ['Campari', 'bottle', '1', '2'],
                        ['House chardonnay', 'case', '0.5', '1'],
                      ].map((row, i) => (
                        <div
                          key={row[0]}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '2.2fr 1fr 1fr 1.1fr',
                            background: i === 0 ? 'rgba(22,163,74,0.14)' : 'transparent',
                            borderTop:
                              i === 0 ? '1px solid rgba(34,197,94,0.4)' : '1px solid rgba(30,64,175,0.4)',
                          }}
                        >
                          {row.map((cell, idx) => (
                            <div
                              key={idx}
                              style={{
                                padding: '0.25rem 0.35rem',
                                fontSize: '0.7rem',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                              }}
                            >
                              {cell}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p
            style={{
              marginTop: '0.8rem',
              fontSize: '0.78rem',
              color: 'var(--ink-faint)',
              textAlign: 'center',
            }}
          >
            Snap shelves on your phone, review a clean table on your laptop, export to Excel when
            you&apos;re ready.
          </p>
        </aside>
      </div>
    </main>
  )
}
