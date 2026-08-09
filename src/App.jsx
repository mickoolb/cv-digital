import { motion } from "motion/react"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { TextReveal } from "@/components/magicui/text-reveal"
import { Marquee } from "@/components/magicui/marquee"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid"
import { DotPattern } from "@/components/magicui/dot-pattern"

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logocv.png" alt="CV Digital" className="h-10 w-auto" />
            <span className="font-display text-xl font-bold text-text">CV Digital</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#formatos" className="text-sm font-medium text-text-muted hover:text-text transition-colors">Formatos</a>
            <a href="#precios" className="text-sm font-medium text-text-muted hover:text-text transition-colors">Precios</a>
            <a href="#contacto" className="text-sm font-medium text-text-muted hover:text-text transition-colors">Contacto</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <DotPattern width={24} height={24} cx={2} cy={2} cr={1} glow className="opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-accent mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Oferta válida solo este mes
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-text mb-6 leading-tight"
          >
            <AnimatedGradientText colorFrom="#F59E0B" colorTo="#8B5CF6" speed={1.2}>
              Currículums que abren puertas
            </AnimatedGradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto mb-10"
          >
            Diseñamos tu CV en 4 formatos premium listos para cada situación.
            Paleta personalizada según tu carrera. Mejoramos el que tienes o lo creamos desde cero.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <ShimmerButton
              shimmerColor="#F59E0B"
              background="#8B5CF6"
              className="px-8 py-4 text-lg font-semibold"
            >
              Ver muestras reales
            </ShimmerButton>
            <a
              href="#contacto"
              className="px-8 py-4 text-lg font-semibold text-text hover:text-accent transition-colors border border-border rounded-lg hover:border-accent/50"
            >
              Contactar por WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { img: "/templates/demo-ats.png", label: "ATS", color: "border-emerald-500" },
              { img: "/templates/demo-moderno.png", label: "Moderno", color: "border-blue-500" },
              { img: "/templates/demo-creativo.png", label: "Creativo", color: "border-violet-500" },
              { img: "/templates/demo-harvard.png", label: "Ejecutivo", color: "border-amber-500" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className={`relative aspect-[4/5] rounded-xl overflow-hidden bg-card border-2 ${item.color} shadow-2xl`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.img}
                  alt={`Plantilla ${item.label}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg/90 to-transparent">
                  <span className="font-display font-bold text-text">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Formatos() {
  const formatos = [
    {
      id: "ats",
      nombre: "MODELO ATS",
      descripcion: "Optimizado para filtros automáticos y portales de empleo. Diseño limpio, sin gráficos complejos que confundan a los bots.",
      icon: "📋",
      color: "from-emerald-500 to-emerald-600",
      features: ["Compatible 100% ATS", "Keywords optimizadas", "Estructura estándar", "Exportable a Word/PDF"]
    },
    {
      id: "moderno",
      nombre: "MODELO MODERNO",
      descripcion: "Visual y actual, ideal para LinkedIn y networking. Con toques de color que transmiten profesionalismo moderno.",
      icon: "💼",
      color: "from-blue-500 to-cyan-500",
      features: ["Diseño visual equilibrado", "Barras de habilidades", "Perfil destacado", "Listo para LinkedIn"]
    },
    {
      id: "creativo",
      nombre: "MODELO CREATIVO",
      descripcion: "Diseño visual, innovador y audaz. Ideal para diseñadores, artistas, marketing y perfiles que necesitan destacar.",
      icon: "🎨",
      color: "from-violet-500 to-purple-600",
      features: ["Layout único", "Elementos gráficos", "Personalidad visual", "Portafolio integrado"]
    },
    {
      id: "ejecutivo",
      nombre: "MODELO EJECUTIVO (HARVARD)",
      descripcion: "Elegante y sobrio, para cargos altos y clientes exigentes. Formato clásico Harvard con banda lateral y acentos dorados.",
      icon: "🏛️",
      color: "from-amber-500 to-orange-500",
      features: ["Formato Harvard clásico", "Banda lateral premium", "Acentos dorados", "Ejec. C-level ready"]
    }
  ]

  return (
    <section id="formatos" className="relative py-24 sm:py-32 bg-card">
      <DotPattern width={24} height={24} cx={2} cy={2} cr={1} glow className="opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent mb-2 block">NUESTROS FORMATOS</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text mb-4">
            4 formatos, <AnimatedGradientText colorFrom="#F59E0B" colorTo="#8B5CF6">un objetivo</AnimatedGradientText>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Cada formato está diseñado para un escenario específico. Tú eliges cuál usar según a dónde postulas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formatos.map((formato, i) => (
            <motion.div
              key={formato.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 bg-bg rounded-2xl border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`relative p-4 rounded-xl bg-gradient-to-br ${formato.color} text-white shrink-0`}>
                  <span className="text-3xl">{formato.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-text">{formato.nombre}</h3>
                  <p className="text-text-muted mt-1">{formato.descripcion}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {formato.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-text-muted group-hover:text-text transition-colors">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary text-xs">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Proceso() {
  const pasos = [
    { numero: "01", titulo: "Nos escribes", desc: "DM o WhatsApp. Nos pasas tu CV actual o nos cuentas tu perfil si no tienes." },
    { numero: "02", titulo: "Elegimos paleta", desc: "Según tu carrera y rubro, diseñamos la paleta profesional perfecta (nunca neón)." },
    { numero: "03", titulo: "Creamos los 4", desc: "En 24-48h tienes los 4 formatos listos: ATS, Moderno, Creativo, Ejecutivo." },
    { numero: "04", titulo: "Revisión y entrega", desc: "Una ronda de ajustes incluida. Te entregamos PDFs + editables si necesitas." }
  ]

  return (
    <section className="relative py-24 sm:py-32 bg-bg">
      <DotPattern width={24} height={24} cx={2} cy={2} cr={1} glow className="opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent mb-2 block">CÓMO FUNCIONA</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            Listo en <AnimatedGradientText colorFrom="#F59E0B" colorTo="#8B5CF6">3 pasos</AnimatedGradientText>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-6 bg-card rounded-2xl border border-border"
            >
              <span className="font-display text-4xl font-bold text-primary/30 mb-4 block">{paso.numero}</span>
              <h3 className="font-display text-xl font-bold text-text mb-2">{paso.titulo}</h3>
              <p className="text-text-muted">{paso.desc}</p>
              {i < 3 && (
                <div className="absolute top-1/2 right-[-24px] hidden md:block w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Precios() {
  return (
    <section id="precios" className="relative py-24 sm:py-32 bg-card">
      <DotPattern width={24} height={24} cx={2} cy={2} cr={1} glow className="opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent mb-2 block">PRECIOS TRANSPARENTES</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text mb-4">
            Sin sorpresas, <AnimatedGradientText colorFrom="#F59E0B" colorTo="#8B5CF6">claros</AnimatedGradientText>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Oferta válida solo por el mes en curso. Pagas al recibir y aprobar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 bg-bg rounded-2xl border border-border"
          >
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-text mb-2">Mejora tu CV</h3>
              <p className="text-text-muted">Tomamos lo que tienes y lo transformamos en 4 formatos premium.</p>
            </div>
            <div className="mb-6">
              <span className="font-display text-5xl font-bold text-text">$2.500</span>
              <span className="text-text-muted"> CLP</span>
            </div>
            <ul className="space-y-3 mb-8">
              {["4 formatos (ATS, Moderno, Creativo, Ejecutivo)", "Paleta personalizada por carrera", "Optimización ATS + keywords", "1 ronda de ajustes incluida", "PDFs listos para enviar", "Entrega 24-48 horas"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-muted">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/20 text-success text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <ShimmerButton
              shimmerColor="#F59E0B"
              background="#8B5CF6"
              className="w-full py-3"
            >
              Quiero este pack
            </ShimmerButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-8 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/30"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-bg text-sm font-bold rounded-full">
              MÁS POPULAR
            </div>
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-text mb-2">Creación desde cero</h3>
              <p className="text-text-muted">No tienes CV o quieres uno totalmente nuevo. Entrevista breve + 4 formatos.</p>
            </div>
            <div className="mb-6">
              <span className="font-display text-5xl font-bold text-text">$3.500</span>
              <span className="text-text-muted"> CLP</span>
            </div>
            <ul className="space-y-3 mb-8">
              {["Todo lo del pack Mejora", "Entrevista guiada (15-20 min)", "Redacción profesional completa", "Storytelling de logros", "2 rondas de ajustes", "Entrega 24-48 horas"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-accent text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <ShimmerButton
              shimmerColor="#8B5CF6"
              background="#F59E0B"
              className="w-full py-3"
            >
              Quiero este pack
            </ShimmerButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-bg rounded-xl border border-border">
            <span className="text-accent">+</span>
            <span className="text-text">Foto profesional generada por IA: <span className="font-bold text-accent">+$1.000</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Contacto() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-bg">
      <DotPattern width={24} height={24} cx={2} cy={2} cr={1} glow className="opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent mb-2 block">EMPECEMOS</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text mb-4">
            Tu próximo CV <AnimatedGradientText colorFrom="#F59E0B" colorTo="#8B5CF6">empieza aquí</AnimatedGradientText>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Solo WhatsApp. Sin formularios, sin spam, sin vueltas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="bg-card rounded-2xl border border-border p-8 sm:p-12">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <svg className="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-1.378-5.031h-.003a9.879 9.879 0 013.821-9.313 9.874 9.874 0 019.313 3.821c1.872 1.873 2.995 4.415 3.073 7.205.057 1.976-.712 3.756-2.326 4.665-.84.475-1.85.754-2.95.754-.983 0-1.86-.182-2.61-.543" />
                </svg>
                <span className="font-display text-xl font-bold text-green-500">WhatsApp</span>
              </div>
              <p className="text-text-muted mb-4">Escríbenos directo. Respondemos en minutos (horario Chile).</p>
              <a
                href="https://wa.me/56950617042"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-1.378-5.031h-.003a9.879 9.879 0 013.821-9.313 9.874 9.874 0 019.313 3.821c1.872 1.873 2.995 4.415 3.073 7.205.057 1.976-.712 3.756-2.326 4.665-.84.475-1.85.754-2.95.754-.983 0-1.86-.182-2.61-.543" />
                </svg>
                Abrir WhatsApp
              </a>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-text-muted mb-2">O escríbenos por DM en Facebook/Instagram</p>
              <p className="text-text font-medium">@cv.digital.cl</p>
            </div>
          </div>

          <p className="mt-6 text-sm text-text-muted">
            <strong>Oferta válida solo este mes.</strong> Precios en CLP. Pago contra entrega.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logocv.png" alt="CV Digital" className="h-8 w-auto" />
            <span className="font-display text-lg font-bold text-text">CV Digital</span>
          </div>
          <p className="text-sm text-text-muted">
            Currículums premium para Chile. Diseñados por Orus + George.
          </p>
          <div className="flex items-center gap-6">
            <a href="#formatos" className="text-sm text-text-muted hover:text-text transition-colors">Formatos</a>
            <a href="#precios" className="text-sm text-text-muted hover:text-text transition-colors">Precios</a>
            <a href="#contacto" className="text-sm text-text-muted hover:text-text transition-colors">Contacto</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-text-muted">
          <p>Hecho con React + framer-motion + Tailwind + Magic UI. Deploy en GitHub Pages.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Formatos />
        <Proceso />
        <Precios />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}