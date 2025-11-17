import { Sparkles, Gift, Users, Camera, Bot, ShoppingCart } from 'lucide-react'

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-orange-100 p-2 text-orange-600">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function Features() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Everything you need for unforgettable moments</h2>
          <p className="text-gray-600 mt-2">Create, invite, collaborate, gift, and remember — with AI helping at every step.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={Sparkles} title="Smart event templates" description="AI-recommended themes for weddings, birthdays, and corporate events." />
          <Feature icon={Users} title="Invitations & sharing" description="Personalized designs with quick sharing on WhatsApp, email, and socials." />
          <Feature icon={Gift} title="Gift registry" description="Create wish lists, enable group gifting, and track contributions." />
          <Feature icon={ShoppingCart} title="Affiliate gifting" description="Link items from stores to earn affiliate revenue on purchases." />
          <Feature icon={Bot} title="AI assistant" description="Get instant suggestions for décor, captions, and invitations." />
          <Feature icon={Camera} title="Memory album" description="Collect photos, videos, and engagement analytics post-event." />
        </div>
      </div>
    </section>
  )
}

export default Features
