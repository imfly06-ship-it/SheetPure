'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (loginError) {
      setError(loginError.message)
      setLoading(false)
      return
    }

    router.push('/app')
    router.refresh()
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface)',
      padding: '2rem',
    }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.03em', color: 'var(--ink)' }}>
              Stock<span style={{ color: 'var(--accent)' }}>Scan</span>
            </span>
          </Link>
        </div>

        <div className="card" style={{ padding: '2.25rem' }}>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.4rem' }}>
            Welcome back
          </h1>
          <p style={{ color: 'var(--ink-faint)', fontSize: '0.88rem', marginBottom: '2rem' }}>
            Sign in to your account
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.4rem', fontFamily: 'var(--font-syne)' }}>
                Email
              </label>
              <input
                className="input"
                type="email"
                placeholder="you@business.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.4rem', fontFamily: 'var(--font-syne)' }}>
                Password
              </label>
              <input
                className="input"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--danger)' }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-accent"
              disabled={loading}
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.8rem' }}
            >
              {loading ? 'Signing in…' : 'Sign in →'}
            </button>
          </form>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--ink-faint)' }}>
          Don&apos;t have an account?
          <Link href="/app/signup" style={{ color: 'var(--accent)', fontWeight: 500, textDecoration: 'none' }}>
            Start free trial
          </Link>
        </p>
      </div>
    </div>
  )
}