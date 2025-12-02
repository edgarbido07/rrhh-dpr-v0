import React from "react";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se implementa la lógica de login
    if (user === "admin" && password === "121030") {
      navigate("/Gestion");
    } else {
      alert("Credenciales incorrectas");
    }
    console.log("usuario:", user);
    console.log("contraseña:", password);
  };

  return (
    <>
      {/* Contenedor principal con gradiente moderno */}
      <div className="flex min-h-screen bg-gradient-to-br from-primary-900 via-gray-900 to-secondary-900 text-gray-100 font-sans p-4 sm:p-6 lg:p-8 justify-center items-center animate-fade-in">
        {/* Tarjeta del formulario con diseño mejorado */}
        <div className="flex w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-strong border border-white/20">
          {/* Panel izquierdo con diseño mejorado */}
          <div className="hidden lg:flex flex-1 items-center justify-center p-8 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-400/20 rounded-full blur-xl"></div>
            
            {/* Contenido principal del panel */}
            <div className="relative z-10 text-center space-y-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center shadow-strong animate-bounce-gentle">
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Bienvenido</h2>
                <p className="text-gray-300 max-w-sm">Accede a tu cuenta para gestionar todas las operaciones del sistema</p>
              </div>
            </div>
          </div>

          {/* Panel derecho para el formulario */}
          <div className="flex-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-white/5 backdrop-blur-sm">
            <div className="text-center lg:text-left mb-8 animate-slide-up">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-3">
                Iniciar Sesión
              </h1>
              <p className="text-gray-300 text-lg">
                Ingresa tus credenciales para continuar
              </p>
            </div>

            {/* Formulario de inicio de sesión */}
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
              {/* Campo de usuario */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Usuario
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-primary-400 transition-colors" />
                  </div>
                  <input
                    id="email"
                    type="text"
                    placeholder="Ingresa tu usuario"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="w-full px-4 py-4 pl-12 text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:bg-white/15"
                    required
                  />
                </div>
              </div>

              {/* Campo de contraseña */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Contraseña
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-primary-400 transition-colors" />
                  </div>
                  <input
                    id="password"
                    type={checkPass ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-4 pl-12 pr-12 text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:bg-white/15"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setCheckPass(!checkPass)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {checkPass ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
<br />
              {/* Botón de inicio de sesión */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-[1.02] transition-all duration-300 shadow-medium hover:shadow-strong"
              >
                Iniciar Sesión
              </button>
            </form>

            {/* Enlace para 'olvidaste tu contraseña' */}
            <div className="mt-8 text-center">
              <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
