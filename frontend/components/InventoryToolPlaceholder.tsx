'use client'

export default function InventoryToolPlaceholder({ userId }) {
  return (
    <div style={{ padding: '3rem 0', textAlign: 'center' }}>
      <div style={{
        display: 'inline-block',
        background: 'white',
        border: '2px dashed #e5e5e7',
        borderRadius: '16px',
        padding: '3rem 2.5rem',
        maxWidth: 560,
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔧</div>
        <h2 style={{ fontWeight: 700, marginBottom: '0.75rem' }}>
          Your Inventory Tool Goes Here
        </h2>
        <p style={{ color: '#6e6e73', fontSize: '0.9rem', lineHeight: 1.7 }}>
          Replace this component in app/app/page.tsx with your existing inventory tool.
          User ID: {userId}
        </p>
      </div>
    </div>
  )
}
