import SectionHeader from '../../components/common/SectionHeader.jsx'
import { products } from '../../constants/mockData.jsx'

function Cart() {
  const subtotal = products.reduce((sum, product) => sum + product.price * (1 - product.discount / 100), 0)
  const totalItems = products.length

  return (
    <div className="space-y-14">
      <SectionHeader
        pretitle="Carrito de compras"
        title="Tu selección de fragancias"
        children="Prepara tu pedido premium antes de confirmar la experiencia OLIMPO."
      />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.8)]">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-black/40 p-5 sm:flex-row sm:items-center">
              <img src={product.image} alt={product.name} className="h-28 w-28 rounded-[1.5rem] object-cover" />
              <div className="flex-1">
                <h3 className="text-xl font-[TrajanPro] uppercase tracking-[0.12em] text-white">{product.name}</h3>
                <p className="text-sm leading-6 text-white/70">{product.size} · {product.notes.join(' · ')}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-white">${(product.price * (1 - product.discount / 100)).toFixed(0)}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Cantidad 1</p>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.8)]">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/70">Resumen</p>
              <h2 className="mt-3 text-3xl font-[TrajanPro] uppercase tracking-[0.14em] text-white">Orden premium</h2>
            </div>
            <div className="space-y-3 rounded-[2rem] border border-white/10 bg-black/40 p-6 text-white">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Productos</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(0)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Envío</span>
                <span>Premium</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-white">
              <span className="text-sm uppercase tracking-[0.3em] text-white/70">Total estimado</span>
              <span className="text-2xl font-semibold text-white">${subtotal.toFixed(0)}</span>
            </div>
            <button className="w-full rounded-full bg-[#D4AF37] px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-black transition hover:scale-[1.01]">
              Confirmar vía WhatsApp
            </button>
            <p className="text-xs leading-6 text-white/60">
              El botón está preparado para iniciar la orden por WhatsApp cuando integramos la lógica de envío.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Cart
