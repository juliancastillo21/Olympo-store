function BrandChip({ label }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.22em] text-white/80 transition hover:border-[#D4AF37]/20 hover:text-[#D4AF37]">
      {label}
    </div>
  )
}

export default BrandChip
