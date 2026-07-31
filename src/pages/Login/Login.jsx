import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import SectionHeader from '../../components/common/SectionHeader.jsx'
import { signIn } from '../../services/authService.js'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (!email || !password) {
      toast.error('Completa todos los campos')
      return
    }

    setLoading(true)
    const { user, error } = await signIn(email, password)
    setLoading(false)

    if (error) {
      toast.error(error.message || 'Error al iniciar sesión')
      return
    }

    if (user) {
      toast.success('Bienvenido a OLIMPO')
      navigate('/dashboard')
    }
  }

  return (
    <div className="space-y-12">
      <SectionHeader
        pretitle="Acceso"
        title="Ingreso administrativo"
        children="Ingresa tus credenciales para acceder al panel de administración."
      />
      <div className="mx-auto max-w-xl rounded-[3rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.8)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="login-email" className="mb-2 block text-sm uppercase tracking-[0.25em] text-[#D4AF37]/70">Correo</label>
            <input
              id="login-email"
              type="email"
              placeholder="admin@olimpo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]/40 focus:ring-2 focus:ring-[#D4AF37]/10"
            />
          </div>
          <div>
            <label htmlFor="login-password" className="mb-2 block text-sm uppercase tracking-[0.25em] text-[#D4AF37]/70">Contraseña</label>
            <input
              id="login-password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]/40 focus:ring-2 focus:ring-[#D4AF37]/10"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#D4AF37] px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-black transition hover:scale-[1.01] disabled:opacity-50"
          >
            {loading ? 'Ingresando...' : 'Iniciar sesión'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
