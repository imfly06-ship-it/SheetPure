'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default function SignupPage() {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          business_name: businessName,
          trial_started_at: new Date().toISOString(),
          plan: 'trial',
        },
      },
    })

    if (signupError) {
      setError(signupError.message)
      setLoading(false)
      return
    }

    // If email confirmation is required, Supabase won't auto-log in.
    // Check if user session exists to decide redirect vs confirm message.
    if (data.session) {
      router.push('/app')
      router.refresh()
    } else {
      // Email confirmation required
      setSuccess(true)
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface)',
        padding: '2rem',
      }}>
        <div style={{ maxWidth: 420, textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>📬</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.75rem', marginBottom: '0.75rem' }}>
            Check your email
          </h2>
          <p style={{ color: 'var(--ink-faint)', lineHeight: 1.7, marginBottom: '2rem' }}>
            We sent a confirmation link to <strong>{email}</strong>.
            Click it to activate your free trial.
          </p>
          <Link href="/login" className="btn btn-secondary">
            Back to login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface)',
      padding: '2rem',
    }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.03em', color: 'var(--ink)' }}>
              Stock<span style={{ color: 'var(--accent)' }}>Scan</span>
            </span>
          </Link>
        </div>

        {/* Trial badge */}
        <div style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div style={{
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            color: 'var(--success)',
            fontFamily: 'var(--font-syne)',
            fontWeight: 600,
            fontSize: '0.78rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '0.35rem 1rem',
            borderRadius: '100px',
          }}>
            ✓ Free trial — no credit card needed
          </div>
        </div>

        <div className="card" style={{ padding: '2.25rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '0.4rem',
          }}>
            Create your account
          </h1>
          <p style={{ color: 'var(--ink-faint)', fontSize: '0.88rem', marginBottom: '2rem' }}>
            Start scanning inventory in minutes
          </p>

          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.4rem', fontFamily: 'var(--font-syne)' }}>
                Business name
              </label>
              <input
                className="input"
                type="text"
                placeholder="Acme Liquor Store"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.4rem', fontFamily: 'var(--font-syne)' }}>
                Work email
              </label>
              <input
                className="input"
                type="email"
                placeholder="you@business.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.4rem', fontFamily: 'var(--font-syne)' }}>
                Password
              </label>
              <input
                className="input"
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>

            {error && (
              <div style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                fontSize: '0.85rem',
                color: 'var(--danger)',
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-accent"
              disabled={loading}
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.8rem' }}
            >
              {loading ? 'Creating account…' : 'Start free trial →'}
            </button>
          </form>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--ink-faint)' }}>
          Already have an account?{' '}
          <Link href="/login" style={{ color: 'var(--accent)', fontWeight: 500, textDecoration: 'none' }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
