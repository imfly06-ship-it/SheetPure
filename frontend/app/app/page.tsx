import InventoryTool from '../../components/InventoryTool'
import AppNav from '../../components/AppNav'
import { createClient } from '../../lib/supabase-server'

export const dynamic = 'force-dynamic'

export default async function AppPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const userEmail = user?.email ?? ''
  const userId = user?.id ?? 'demo-business'

  return (
    <main style={{ minHeight: '100vh', background: 'var(--surface)' }}>
      <AppNav userEmail={userEmail} />
      <InventoryTool userId={userId} />
    </main>
  )
}

