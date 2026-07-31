import SectionHeader from '../../components/common/SectionHeader.jsx'

function Dashbard() {
  return (
    <div className="space-y-12">
      <SectionHeader
        pretitle="Panel administrativo"
        title="Vista preliminar"
        children="Estructura visual preparada para el futuro panel de administración sin lógica de autenticación aún."
      />
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
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/70">Resumen</p>
          <p className="mt-4 text-sm leading-7 text-white/70">Panel diseñado para recibir gráficos, control de inventario y tareas administrativas con una estética premium y una interfaz refinada.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/70">Accesos</p>
          <p className="mt-4 text-sm leading-7 text-white/70">Secciones preparadas para pedidos, productos, usuarios y ajustes sin conexión a la lógica de backend todavía.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashbard
