import { useMemo } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../../components/common/ProductCard.jsx'
import SectionHeader from '../../components/common/SectionHeader.jsx'
import { products } from '../../constants/mockData.jsx'

function Catalog() {
  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    [],
  )

  return (
    <div className="space-y-16">
      <SectionHeader
        pretitle="Catálogo completo"
        title="Explora fragancias"
        children="Descubre todas nuestras creaciones premium con presencia impecable y notas definidas."
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {categories.map((category) => (
          <div key={category} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/70">Categoría</p>
            <h3 className="mt-3 text-2xl font-[TrajanPro] uppercase tracking-[0.16em] text-white">{category.replace(/-/g, ' ')}</h3>
          </div>
        ))}
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Catalog
