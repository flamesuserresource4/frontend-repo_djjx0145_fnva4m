import { useState } from 'react'

const EVENT_TYPES = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'birthday', label: 'Birthday' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'other', label: 'Other' },
]

function Suggested({ title, items, onPick }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-700 mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((x) => (
          <button key={x} onClick={() => onPick(x)} className="rounded-full border border-gray-200 px-3 py-1 text-sm hover:bg-gray-50">
            {x}
          </button>
        ))}
      </div>
    </div>
  )
}

function Planner() {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('wedding')
  const [theme, setTheme] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const suggestionsByType = {
    wedding: ['Minimal chic', 'Rustic garden', 'Black & gold', 'Beach sunset'],
    birthday: ['Neon arcade', 'Pastel picnic', 'Space odyssey', 'Retro disco'],
    corporate: ['Innovation summit', 'Monochrome modern', 'Blue & silver', 'Futurist'],
    other: ['Cozy brunch', 'Nature vibes', 'Boho evening', 'White party'],
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    setStatus('Creating...')
    try {
      const payload = {
        host_id: 'demo-host',
        title,
        type,
        theme: theme || null,
        date: new Date(date).toISOString(),
        location: location || null,
      }
      const res = await fetch(`${backend}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to create')
      const data = await res.json()
      setStatus(`✅ Event created: ${data.id}`)
      setTitle('')
      setTheme('')
      setDate('')
      setLocation('')
    } catch (e) {
      setStatus(`❌ ${e.message}`)
    }
  }

  return (
    <section id="create" className="py-14 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl font-semibold text-gray-900">Create an event</h2>
        <p className="text-gray-600 mt-1">Give us a few details and we’ll suggest themes and layouts.</p>

        <form onSubmit={handleCreate} className="mt-6 grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="e.g., Emma & Noah Wedding" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                {EVENT_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Theme</label>
            <input value={theme} onChange={(e) => setTheme(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Describe a vibe or palette" />
            <div className="mt-3">
              <Suggested title="Ideas" items={suggestionsByType[type]} onPick={setTheme} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="City or venue" />
          </div>

          <button type="submit" className="mt-2 inline-flex justify-center rounded-lg bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 font-medium transition">
            Create event
          </button>
        </form>

        {status && (
          <p className="mt-4 text-sm font-mono text-gray-700">{status}</p>
        )}
      </div>
    </section>
  )
}

export default Planner
