import SectionHeader from '../../components/common/SectionHeader.jsx'

function Settings() {
  return (
    <div className="space-y-12">
      <SectionHeader
        pretitle="Ajustes"
        title="Configuración de tienda"
        children="Pantalla de ajustes visual preparada para gestionar contenido y preferencias cuando la lógica esté integrada."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/70">Visual</p>
          <p className="mt-4 text-sm leading-7 text-white/70">Gestiona banners, secciones destacadas y mensajes de bienvenida sin tocar la arquitectura.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]/70">Inventario</p>
          <p className="mt-4 text-sm leading-7 text-white/70">Estructura lista para sincronizar productos y categorías cuando se conecte el backend.</p>
        </div>
      </div>
    </div>
  )
}

export default Settings
