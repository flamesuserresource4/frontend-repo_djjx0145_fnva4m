import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
            AI-powered event planning
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Wishbloom
            <span className="block text-white/80">Plan, collaborate, and celebrate</span>
          </h1>

          <p className="mt-4 text-white/70 text-lg">
            Create beautiful events, smart invitations, collaborative gift registries, and memory albums — all in one place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#create" className="inline-flex justify-center rounded-lg bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 font-medium transition">
              Start an event
            </a>
            <a href="/test" className="inline-flex justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium transition">
              Check backend
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
