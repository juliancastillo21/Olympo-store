import SectionHeader from '../../components/common/SectionHeader.jsx'

function Login() {
  return (
    <div className="space-y-12">
      <SectionHeader
        pretitle="Acceso" 
        title="Ingreso administrativo"
        children="Pantalla de entrada preparada para la futura autenticación del panel administrativo."
      />
      <div className="mx-auto max-w-xl rounded-[3rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.8)]">
        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm uppercase tracking-[0.25em] text-[#D4AF37]/70">Correo</label>
            <input type="email" placeholder="admin@olimpo.com" className="w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]/40 focus:ring-2 focus:ring-[#D4AF37]/10" />
          </div>
          <div>
            <label className="mb-2 block text-sm uppercase tracking-[0.25em] text-[#D4AF37]/70">Contraseña</label>
            <input type="password" placeholder="********" className="w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]/40 focus:ring-2 focus:ring-[#D4AF37]/10" />
          </div>
          <button type="button" className="w-full rounded-full bg-[#D4AF37] px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-black transition hover:scale-[1.01]">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
