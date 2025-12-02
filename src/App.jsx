import { Link, Routes, Route, Navigate } from 'react-router-dom'
import Start from './components/Start.jsx'
import Login from './components/Login.jsx'
import Gestion from './components/Gestion.jsx'
import LasAmericas from './components/gerencias/LasAmericas.jsx'
import OzamaSanLuis from './components/gerencias/OzamaSanLuis.jsx'
import BocaChica from './components/gerencias/BocaChica.jsx'
import SantaFe from './components/gerencias/SantaFe.jsx'
import Quisqueya from './components/gerencias/Quisqueya.jsx'
import Consuelo from './components/gerencias/Consuelo.jsx'
import Cumayasa from './components/gerencias/Cumayasa.jsx'
import SantoDomingoNorte from './components/gerencias/SantoDomingoNorte.jsx'
import MontePlata from './components/gerencias/MontePlata.jsx'
import MontellanoAmistad from './components/gerencias/MontellanoAmistad.jsx'
import Haina from './components/gerencias/Haina.jsx'
import HatoNuevo from './components/gerencias/HatoNuevo.jsx'
import VillaAltagracia from './components/gerencias/VillaAltagracia.jsx'
import Barahona from './components/gerencias/Barahona.jsx'
import HatoMayorElSeybo from './components/gerencias/HatoMayorElSeybo.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white/90 backdrop-blur border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">DPR-CEA</span>
          <div className="flex items-center gap-2">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50">Inicio</Link>
            <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50">Login</Link>
            <Link to="/gestion" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50">Gestión</Link>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/start" element={<Navigate to="/" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gestion" element={<Gestion />} />
          <Route path="/Gestion" element={<Gestion />} />
          {/* Rutas estáticas por gerencia */}
          <Route path="/Gestion/LasAmericas" element={<LasAmericas />} />
          <Route path="/Gestion/OzamaSanLuis" element={<OzamaSanLuis />} />
          <Route path="/Gestion/BocaChica" element={<BocaChica />} />
          <Route path="/Gestion/SantaFe" element={<SantaFe />} />
          <Route path="/Gestion/Quisqueya" element={<Quisqueya />} />
          <Route path="/Gestion/Consuelo" element={<Consuelo />} />
          <Route path="/Gestion/Cumayasa" element={<Cumayasa />} />
          <Route path="/Gestion/SantoDomingoNorte" element={<SantoDomingoNorte />} />
          <Route path="/Gestion/MontePlata" element={<MontePlata />} />
          <Route path="/Gestion/MontellanoAmistad" element={<MontellanoAmistad />} />
          <Route path="/Gestion/Haina" element={<Haina />} />
          <Route path="/Gestion/HatoNuevo" element={<HatoNuevo />} />
          <Route path="/Gestion/VillaAltagracia" element={<VillaAltagracia />} />
          <Route path="/Gestion/Barahona" element={<Barahona />} />
          <Route path="/Gestion/HatoMayorElSeybo" element={<HatoMayorElSeybo />} />
          {/* Rutas dinámicas por gerencia */}
          <Route path="/gestion/:slug" element={<Gestion />} />
          <Route path="/Gestion/:slug" element={<Gestion />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
