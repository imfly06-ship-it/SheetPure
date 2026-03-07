import InventoryTool from '../components/InventoryTool'

export default function AppPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--surface)' }}>
      <InventoryTool userId="demo-user" />
    </main>
  )
}