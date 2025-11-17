import Hero from './components/Hero'
import Features from './components/Features'
import Planner from './components/Planner'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <Planner />
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Wishbloom. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
