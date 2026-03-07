import { createClient } from '../../lib/supabase-server'
import InventoryTool from '../../components/InventoryTool'

export default async function AppPage() {
const supabase = await createClient()
const { data: { user } } = await supabase.auth.getUser()

return (
<main style={{ minHeight: '100vh', background: 'var(--surface)' }}>
<InventoryTool userId={user?.id ?? 'demo-user'} />
</main>
)
}