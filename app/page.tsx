export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal &amp; Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never miss contractor tax form deadlines again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Track 1099 contractor payments, get automatic threshold alerts, and receive pre-filled PDF forms before every IRS deadline — all in one place.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Auto 1099 threshold tracking", "Email reminders before deadlines", "Pre-filled PDF forms", "Unlimited contractors"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay compliant</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Track unlimited contractors",
              "Automatic $600 threshold alerts",
              "Email reminders 30, 14 & 7 days before deadlines",
              "Pre-filled 1099-NEC & 1099-MISC PDFs",
              "Annual filing summary export",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">When do I need to file a 1099?</h3>
            <p className="text-[#8b949e] text-sm">You must file a 1099-NEC for any contractor you paid $600 or more during the tax year. The deadline is January 31st. Our tracker alerts you automatically as you approach that threshold.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the pre-filled PDF feature work?</h3>
            <p className="text-[#8b949e] text-sm">Once you enter contractor details and payment amounts, we generate a ready-to-file 1099-NEC or 1099-MISC PDF with all fields pre-populated. Just review, sign, and send.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your account dashboard with no penalties or hidden fees. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} 1099 Deadline Tracker. Not a substitute for professional tax advice.
      </footer>
    </main>
  );
}
