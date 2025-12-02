import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, Users, BarChart3, Shield, Zap, Globe } from 'lucide-react';

function Start() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Building2,
      title: "Gestión de Gerencias",
      description: "Administra todas las gerencias regionales desde un solo lugar",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Control de Personal",
      description: "Gestiona el personal y recursos humanos de manera eficiente",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Reportes y Analytics",
      description: "Visualiza datos y métricas importantes en tiempo real (proximamente)",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Sistema seguro con autenticación y control de acceso",
      color: "from-red-500 to-rose-600"
    },
    {
      icon: Zap,
      title: "Alto Rendimiento",
      description: "Interfaz rápida y responsive para una mejor experiencia",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "Acceso Global",
      description: "Accede al sistema desde cualquier lugar y dispositivo (proximamente)",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 animate-fade-in">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-md">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">DPR SYSTEM-0</h1>
            </div>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Elementos decorativos mejorados */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-40 blur-xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-200 to-blue-300 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-indigo-200 to-cyan-300 rounded-full opacity-35 blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            {/* Logo principal */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Building2 className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Título principal */}
            <div className="space-y-4 animate-slide-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                  Sistema de Gestión de Recursos Humanos
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">DPR-CEA</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Plataforma integral para la gestión eficiente de gerencias regionales y recursos empresariales
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={() => navigate('/login')}
                className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span>Comenzar Ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/gestion')}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-blue-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre todas las funcionalidades que hacen de nuestro sistema la mejor opción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 hover:bg-white transition-all duration-500 animate-slide-up transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Fondo decorativo mejorado */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-25 blur-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full opacity-15 blur-xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Únete a miles de usuarios que ya confían en nuestro sistema para gestionar sus operaciones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => navigate('/login')}
                className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span>Acceder al Sistema</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-12 relative overflow-hidden">
        {/* Elementos decorativos del footer */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-2xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">CEA Sistema</span>
            </div>
            <p className="text-gray-300">
              © 2024 CEA Sistema de Gestión. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Start;