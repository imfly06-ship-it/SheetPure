'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '../lib/supabase'

export default function AppNav({ userEmail }: { userEmail: string }) {
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.9rem 1.5rem',
      background: 'white',
      borderBottom: '1.5px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <Link href="/app" style={{ textDecoration: 'none' }}>
        <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.03em', color: 'var(--ink)' }}>
          Stock<span style={{ color: 'var(--accent)' }}>Scan</span>
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontSize: '0.82rem', color: 'var(--ink-faint)', display: 'none' }} className="sm-show">
          {userEmail}
        </span>
        <button
          onClick={handleSignOut}
          className="btn btn-secondary"
          style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
        >
          Sign out
        </button>
      </div>
    </nav>
  )
}
