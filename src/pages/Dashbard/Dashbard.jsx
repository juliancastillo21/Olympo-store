import SectionHeader from '../../components/common/SectionHeader.jsx'
import ImageUploader from '../../components/common/ImageUploader.jsx'

function Dashbard() {
  return (
    <div className="space-y-12">
      <SectionHeader
        pretitle="Panel administrativo"
        title="Vista preliminar"
        children="Estructura visual preparada para el futuro panel de administración."
      />
      
      {/* SECCIÓN DE PRUEBA DE SUBIDA A CLOUDFLARE R2 */}
      <div className="rounded-[2.5rem] border border-[#D4AF37]/30 bg-black/70 p-8 sm:p-10 backdrop-blur-xl shadow-[0_40px_120px_-60px_rgba(212,175,55,0.3)]">
        <h3 className="mb-2 text-xl font-[TrajanPro] uppercase tracking-[0.14em] text-white">Prueba de Subida a R2</h3>
        <p className="mb-8 text-sm text-white/60">
          Sube una imagen para comprobar la conexión directa con Cloudflare R2 vía Supabase Edge Functions.
        </p>
        <div className="flex justify-center">
          <ImageUploader />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/70">Pedidos</p>
          <h3 className="mt-3 text-3xl font-[TrajanPro] uppercase tracking-[0.14em] text-white">24</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">Ordenes nuevas por revisar y procesar.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/70">Catálogo</p>
          <h3 className="mt-3 text-3xl font-[TrajanPro] uppercase tracking-[0.14em] text-white">6</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">Productos activos listos para destacar en la tienda.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/70">Usuarios</p>
          <h3 className="mt-3 text-3xl font-[TrajanPro] uppercase tracking-[0.14em] text-white">89</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">Suscriptores que recibieron la experiencia OLIMPO.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashbard
