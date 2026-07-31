import { motion } from 'framer-motion'

function TestimonialCard({ quote, name, role }) {
  return (
    <motion.blockquote
      whileHover={{ y: -4 }}
      className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white shadow-[0_40px_120px_-80px_rgba(0,0,0,0.85)]"
    >
      <p className="mb-6 text-base leading-8 text-white/75">“{quote}”</p>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{name}</p>
        <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/70">{role}</p>
      </div>
    </motion.blockquote>
  )
}

export default TestimonialCard
