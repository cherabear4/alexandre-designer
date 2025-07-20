'use client'
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Play, ExternalLink } from 'lucide-react';
import main from '@/public/main.png'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const collaborations = [
    { name: 'Invideo', icon: '▶' },
    { name: 'Huion', icon: '👑' },
    { name: 'Envato', icon: 'e' },
    { name: 'XD Pen', icon: 'XD' },
    { name: 'Adobe', icon: 'Ai' },
    { name: 'DHL', icon: 'DHL' }
  ];

  function scrollToContact(): void {
    const contacto = document.getElementById('contacto');
    if (contacto) {
      contacto.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-4 h-4 bg-blue-500/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Background elements */}
      <div className="fixed inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-pink-500/15 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Navigation */}
      <nav className="relative z-40 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800/50 rounded-full px-8 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold tracking-wider">Alexandre Designer</div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-blue-400 font-medium">Inicio</a>
              <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre mí</a>
              <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
            </div>

            <button onClick={() => scrollToContact()} className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full px-6 py-2 font-medium">
              Contacto
            </button>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-gray-900/90 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
              <div className="flex flex-col space-y-4">
                <a href="#inicio" className="text-blue-400 font-medium">Inicio</a>
                <a href="#sobre" className="text-gray-300">Sobre mí</a>
                <a href="#contacto" className="text-gray-300">Contacto</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative z-30 px-6 pt-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-400 tracking-[0.2em] text-sm font-medium uppercase">
                  DISEÑADOR GRÁFICO
                </p>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none upppercase">
                  ALEXANDRE<br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                    DESIGNER
                  </span>
                </h1>
              </div>
              
              <div className="border-l-2 border-gray-700 pl-8 space-y-6 max-w-lg">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Actualmente lidero una comunidad de más de <span className="text-white font-semibold">200+</span> creativos en busca de lograr un cambio en su carrera.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  <span className="text-white font-semibold">CEO de Alexandre Academy</span> | Academia internacional para diseñadores y creativos
                </p>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              {/* Decorative crosses */}

              
              {/* Main image container */}
              <div className="relative">
                <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for actual image */}
                    <div className="w-80 h-80 rounded-full bg-gray-800/50 flex items-center justify-center">
                      <img src={main.src} alt="Alexandre Designer"/>
                    </div>
                  
                    
                    {/* Floating orb */}
                    <div className="absolute bottom-1/3 right-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-sm opacity-80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="relative z-30 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            Colaboraciones
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {collaborations.map((company, index) => (
              <div 
                key={index}
                className="group bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 hover:bg-gray-800/60"
              >
                <div className="text-center space-y-3">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {company.icon}
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {company.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative z-30 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="w-full max-w-md mx-auto h-96 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-6">
                  <div className="w-full h-full rounded-2xl bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for actual image */}
                    <img src={main.src} alt="Alexandre Designer" className="w-[300px]"/>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/40 rounded-full blur-sm"></div>
                    <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full blur-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-6xl md:text-7xl font-bold leading-tight">
                Sobre<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Alexandre Designer
                </span>
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed max-w-xl">
                <p>
                  Soy <span className="text-white font-semibold">Alexandre Designer</span>, diseñador gráfico y fundador y CEO de Alexandre Estudio, donde lidero proyectos orientados a la estrategia y el posicionamiento de marcas en el mercado.
                </p>
                <p>
                  Con una pasión profunda por la educación en diseño, también fundé <span className="text-blue-400 font-semibold">Kreatrix</span>, una prestigiosa academia internacional que se dedica a capacitar a futuras generaciones de diseñadores gráficos.
                </p>
                <p>
                  Mi compromiso con la educación me ha permitido formar una gran comunidad global de más de <span className="text-white font-semibold">200+ creativos</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full px-8 py-4 font-medium flex items-center justify-center gap-3">
                  Contacto
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border border-gray-600 hover:border-gray-500 hover:bg-gray-800/30 transition-all duration-300 rounded-full px-8 py-4 font-medium flex items-center justify-center gap-3">
                  <ExternalLink size={18} />
                  Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Call to Action Section */}
<section id="contacto" className="relative z-30 px-6 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="relative bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-800/10 rounded-3xl border border-blue-500/20 p-12 md:p-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-2xl"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          Únete a más de 200+ creativos
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Transforma tu carrera creativa con
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Alexandre Academy
          </span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Regístrate gratis y obtén acceso a una clase exclusiva + recursos premium.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/5 backdrop-blur-md border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/5 backdrop-blur-md border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full px-8 py-1 text-lg font-semibold text-white shadow-lg shadow-blue-600/25 w-[300px]"
          >
            Acceder Gratis
          </button>
        </form>

        <div className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            Acceso inmediato
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            Certificación incluida
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            Soporte 24/7
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      

      {/* Footer */}
      <footer className="relative z-30 border-t border-gray-800/30 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>&copy; 2024 Alexandre Designer. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
