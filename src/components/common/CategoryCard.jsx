import { motion } from 'framer-motion'

function CategoryCard({ title, subtitle, description, accent }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 160, damping: 16 }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.8)]"
    >
      <div className="mb-5 inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs uppercase tracking-[0.33em] text-[#D4AF37]/90">
        {subtitle}
      </div>
      <h3 className="mb-4 text-2xl font-[TrajanPro] uppercase tracking-[0.18em] text-white">
        {title}
      </h3>
      <p className="mb-6 text-sm leading-7 text-white/70">{description}</p>
      <p className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]/80">Acordes: {accent}</p>
    </motion.article>
  )
}

export default CategoryCard
