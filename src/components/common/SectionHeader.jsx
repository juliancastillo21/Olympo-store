function SectionHeader({ pretitle, title, children }) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/70">{pretitle}</p>
      <h2 className="text-4xl font-[TrajanPro] uppercase tracking-[0.16em] text-white sm:text-5xl">
        {title}
      </h2>
      {children && <p className="text-sm leading-7 text-white/70">{children}</p>}
    </div>
  )
}

export default SectionHeader
