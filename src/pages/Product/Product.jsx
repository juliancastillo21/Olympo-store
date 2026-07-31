import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { FiShoppingBag } from 'react-icons/fi'
import SectionHeader from '../../components/common/SectionHeader.jsx'
import { products } from '../../constants/mockData.jsx'

function Product() {
  const { id } = useParams()
  const product = useMemo(
    () => products.find((item) => item.id === id) || products[0],
    [id],
  )
  const related = products.filter((item) => item.category === product.category && item.id !== product.id)

  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price

  return (
    <div className="space-y-14">
      <SectionHeader
        pretitle="Detalle del perfume"
        title={product.name}
        children={product.description}
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.8)]">
          <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="rounded-[2rem]">
            {product.gallery.map((image, index) => (
              <SwiperSlide key={`${product.id}-${index}`}>
                <img src={image} alt={`${product.name} ${index + 1}`} className="h-[420px] w-full rounded-[2rem] object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="space-y-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.8)]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#D4AF37]/90">
              {product.size}
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]/70">Notas principales</p>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note) => (
                  <span key={note} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                    {note}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]/70">Precio</p>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-semibold text-white">${discountedPrice.toFixed(0)}</span>
                {product.discount > 0 && (
                  <span className="text-sm line-through text-white/40">${product.price}</span>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-sm leading-7 text-white/70">
              Perfume diseñado para quienes valoran la sofisticación en cada instante. Un equilibrio entre fuerza, elegancia y vigencia.
            </p>
            <button className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-black transition hover:scale-[1.01]">
              <FiShoppingBag size={18} /> Agregar al carrito
            </button>
            <Link to="/catalog" className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-[#D4AF37]">
              Volver al catálogo
            </Link>
          </div>
        </div>
      </div>

      <section className="space-y-8">
        <SectionHeader
          pretitle="También te puede interesar"
          title="Perfumes relacionados"
          children="Sugerencias cuidadas basadas en la intensidad y el carácter de tu elección."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {related.slice(0, 3).map((item) => (
            <div key={item.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white">
              <img src={item.image} alt={item.name} className="mb-5 h-64 w-full rounded-[1.75rem] object-cover" />
              <h3 className="mb-3 text-2xl font-[TrajanPro] uppercase tracking-[0.14em] text-white">{item.name}</h3>
              <p className="text-sm leading-7 text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Product
