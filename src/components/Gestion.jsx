import React, { useMemo, useState, useEffect } from "react";
import { ArrowLeft, Building2, Users, Settings, Home, Search, Plus, Pencil, Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

function Gestion({ initialSlug }) {
  const navigate = useNavigate();
  const params = useParams();
  const slug = initialSlug ?? params.slug;
  const [activeTab, setActiveTab] = useState("direccion");
  const [searchQuery, setSearchQuery] = useState("");

  const gerencias = [
"LAS AMERICAS",
"OZAMA-SAN LUIS",
"BOCA CHICA",
"SANTA FE (SPM)",
"QUISQUEYA",
"CONSUELO ",
"CUMAYASA",
"SANTO DOMINGO NORTE",
"MONTE PLATA",
"MONTELLANO-AMISTAD (ZONA NORTE)",
"HAINA",
"HATO NUEVO (DUQUESA)",
"VILLA ALTAGRACIA",
"BARAHONA",
"HATO MAYOR / EL SEYBO"
  ];

  const nombreAGestionRuta = useMemo(() => ({
    "LAS AMERICAS": "/Gestion/LasAmericas",
    "OZAMA-SAN LUIS": "/Gestion/OzamaSanLuis",
    "BOCA CHICA": "/Gestion/BocaChica",
    "SANTA FE (SPM)": "/Gestion/SantaFe",
    "QUISQUEYA": "/Gestion/Quisqueya",
    "CONSUELO ": "/Gestion/Consuelo",
    "CUMAYASA": "/Gestion/Cumayasa",
    "SANTO DOMINGO NORTE": "/Gestion/SantoDomingoNorte",
    "MONTE PLATA": "/Gestion/MontePlata",
    "MONTELLANO-AMISTAD (ZONA NORTE)": "/Gestion/MontellanoAmistad",
    "HAINA": "/Gestion/Haina",
    "HATO NUEVO (DUQUESA)": "/Gestion/HatoNuevo",
    "VILLA ALTAGRACIA": "/Gestion/VillaAltagracia",
    "BARAHONA": "/Gestion/Barahona",
    "HATO MAYOR / EL SEYBO": "/Gestion/HatoMayorElSeybo",
  }), []);

  const handleNavigation = (gerenciaId) => {
    const ruta = nombreAGestionRuta[gerenciaId];
    if (ruta) { 
      navigate(ruta);
    }
  };

  const personal = useMemo(() => ([
    { id: "P-0001", nombre: "Juan Pérez", cargo: "Director de Área", gerencia: "LAS AMERICAS" },
    { id: "P-0002", nombre: "María Gómez", cargo: "Analista RH", gerencia: "SANTO DOMINGO NORTE" },
    { id: "P-0003", nombre: "Carlos López", cargo: "Técnico", gerencia: "HAINA" },
    { id: "P-0004", nombre: "Ana Rodríguez", cargo: "Coordinadora", gerencia: "MONTE PLATA" },
    { id: "P-0005", nombre: "Luis Martínez", cargo: "Auxiliar", gerencia: "BOCA CHICA" },
    { id: "P-0006", nombre: "Laura Fernández", cargo: "Gestora", gerencia: "OZAMA-SAN LUIS" },
    { id: "P-0007", nombre: "Pedro Sánchez", cargo: "Supervisor", gerencia: "VILLA ALTAGRACIA" },
    { id: "P-0008", nombre: "Sofía Castillo", cargo: "Analista", gerencia: "BARAHONA" },
  ]), []);

  const personalFiltrado = useMemo(() => {
    if (!searchQuery.trim()) return personal;
    const q = searchQuery.toLowerCase();
    return personal.filter(
      (p) => p.nombre.toLowerCase().includes(q) || p.cargo.toLowerCase().includes(q) || p.gerencia.toLowerCase().includes(q) || p.id.toLowerCase().includes(q)
    );
  }, [personal, searchQuery]);

  // ====== Página por gerencia con CRUD local ======
  const getGerenciaNameFromSlug = (slugParam) => {
    if (!slugParam) return null;
    const entry = Object.entries(nombreAGestionRuta).find(([, ruta]) => {
      const parts = ruta.split("/");
      const last = parts[parts.length - 1];
      return last.toLowerCase() === slugParam.toLowerCase();
    });
    return entry ? entry[0] : null;
  };

  const gerenciaActual = getGerenciaNameFromSlug(slug);
  const isDetalle = Boolean(gerenciaActual);

  const storageKey = (entity) => (slug ? `gerencia:${slug}:${entity}` : `gerencia:default:${entity}`);

  const [mobiliarios, setMobiliarios] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);
  const [personalRegistros, setPersonalRegistros] = useState([]);

  const [editMobiliario, setEditMobiliario] = useState(null);
  const [editEquipo, setEditEquipo] = useState(null);
  const [editVehiculo, setEditVehiculo] = useState(null);
  const [editPersonal, setEditPersonal] = useState(null);

  useEffect(() => {
    // Datos de ejemplo para seeding inicial
    const seedMobiliarios = [
      { descripcion: "Escritorio madera", idSticker: "MOB-ESCR-001", marca: "IKEA", modelo: "Linnmon", numeroSerie: "SN-ES-1001", color: "Marrón" },
      { descripcion: "Silla ergonómica", idSticker: "MOB-SILL-002", marca: "X-Comfort", modelo: "ProSeat", numeroSerie: "SN-SI-1002", color: "Negro" },
      { descripcion: "Archivador metálico", idSticker: "MOB-ARCH-003", marca: "SteelCase", modelo: "FilingMax", numeroSerie: "SN-AR-1003", color: "Gris" },
      { descripcion: "Mesa de reuniones", idSticker: "MOB-MESA-004", marca: "OfficePro", modelo: "RoundXL", numeroSerie: "SN-ME-1004", color: "Blanco" },
      { descripcion: "Estante de pared", idSticker: "MOB-ESTA-005", marca: "HomeLine", modelo: "WallFit", numeroSerie: "SN-ES-1005", color: "Beige" },
    ];
    const seedEquipos = [
      { descripcion: "Laptop", idSticker: "EQP-LAP-001", marca: "Dell", modelo: "Latitude 5420", numeroSerie: "SN-LA-2001", color: "Gris" },
      { descripcion: "Impresora", idSticker: "EQP-IMP-002", marca: "HP", modelo: "LaserJet 400", numeroSerie: "SN-IM-2002", color: "Blanco" },
      { descripcion: "Monitor", idSticker: "EQP-MON-003", marca: "Samsung", modelo: "Odyssey", numeroSerie: "SN-MO-2003", color: "Negro" },
      { descripcion: "Teléfono IP", idSticker: "EQP-TEL-004", marca: "Cisco", modelo: "7841", numeroSerie: "SN-TE-2004", color: "Negro" },
      { descripcion: "Switch", idSticker: "EQP-SWI-005", marca: "TP-Link", modelo: "TL-SG108", numeroSerie: "SN-SW-2005", color: "Negro" },
    ];
    const seedVehiculos = [
      { tipoVehiculo: "Camioneta", chasis: "CH-VEH-3001", marca: "Toyota", modelo: "Hilux", color: "Blanco", anio: "2020", asignacion: "Operaciones", dependencia: "Logística", estado: "Activo" },
      { tipoVehiculo: "Automóvil", chasis: "CH-VEH-3002", marca: "Hyundai", modelo: "Accent", color: "Rojo", anio: "2019", asignacion: "Administración", dependencia: "RRHH", estado: "Activo" },
      { tipoVehiculo: "Motocicleta", chasis: "CH-VEH-3003", marca: "Bajaj", modelo: "Boxer", color: "Negro", anio: "2021", asignacion: "Campo", dependencia: "Operaciones", estado: "Mantenimiento" },
      { tipoVehiculo: "Camión", chasis: "CH-VEH-3004", marca: "Isuzu", modelo: "NPR", color: "Azul", anio: "2018", asignacion: "Recolección", dependencia: "Servicios", estado: "Activo" },
      { tipoVehiculo: "SUV", chasis: "CH-VEH-3005", marca: "Kia", modelo: "Sportage", color: "Gris", anio: "2022", asignacion: "Supervisión", dependencia: "Dirección", estado: "Activo" },
    ];
    const seedPersonal = [
      { nombre: "Juan Pérez", cedula: "001-1234567-8", telefono: "809-123-4567", email: "juan.perez@empresa.com", direccion: "Av. Principal 123", cargo: "Técnico", salario: "35000", tipoEmpleado: "Fijo", estado: "Activo", dependencia: "Operaciones" },
      { nombre: "María Gómez", cedula: "002-2345678-9", telefono: "809-234-5678", email: "maria.gomez@empresa.com", direccion: "C/ Secundaria 45", cargo: "Analista", salario: "42000", tipoEmpleado: "Fijo", estado: "Activo", dependencia: "RRHH" },
      { nombre: "Carlos López", cedula: "003-3456789-0", telefono: "809-345-6789", email: "carlos.lopez@empresa.com", direccion: "Av. Central 789", cargo: "Chofer", salario: "30000", tipoEmpleado: "Temporal", estado: "Activo", dependencia: "Logística" },
      { nombre: "Ana Rodríguez", cedula: "004-4567890-1", telefono: "809-456-7890", email: "ana.rodriguez@empresa.com", direccion: "C/ Norte 12", cargo: "Coordinadora", salario: "50000", tipoEmpleado: "Fijo", estado: "Activo", dependencia: "Dirección" },
      { nombre: "Luis Martínez", cedula: "005-5678901-2", telefono: "809-567-8901", email: "luis.martinez@empresa.com", direccion: "C/ Sur 56", cargo: "Auxiliar", salario: "28000", tipoEmpleado: "Temporal", estado: "Activo", dependencia: "Servicios" },
    ];

    const load = (entity, setter, seed, prefix) => {
      try {
        const raw = localStorage.getItem(storageKey(entity));
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setter(parsed);
            return;
          }
        }
        // Si no hay datos, sembrar 5 registros de ejemplo con IDs
        setter(seed.map((x) => ({ ...x, id: genId(prefix) })));
      } catch {
        // En caso de error, también sembrar ejemplo
        setter(seed.map((x) => ({ ...x, id: genId(prefix) })));
      }
    };

    load("mobiliarios", setMobiliarios, seedMobiliarios, "MOB");
    load("equipos", setEquipos, seedEquipos, "EQP");
    load("vehiculos", setVehiculos, seedVehiculos, "VEH");
    load("personal", setPersonalRegistros, seedPersonal, "PER");
  }, [slug]);

  useEffect(() => { localStorage.setItem(storageKey("mobiliarios"), JSON.stringify(mobiliarios)); }, [mobiliarios]);
  useEffect(() => { localStorage.setItem(storageKey("equipos"), JSON.stringify(equipos)); }, [equipos]);
  useEffect(() => { localStorage.setItem(storageKey("vehiculos"), JSON.stringify(vehiculos)); }, [vehiculos]);
  useEffect(() => { localStorage.setItem(storageKey("personal"), JSON.stringify(personalRegistros)); }, [personalRegistros]);

  const genId = (prefix) => `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
  const upsert = (list, setter, item, prefix) => {
    if (!item.id) item.id = genId(prefix);
    const exists = list.find((x) => x.id === item.id);
    if (exists) setter(list.map((x) => (x.id === item.id ? item : x)));
    else setter([...list, item]);
  };
  const removeById = (list, setter, id) => setter(list.filter((x) => x.id !== id));

  const initialMobForm = { descripcion: "", idSticker: "", marca: "", modelo: "", numeroSerie: "", color: "" };
  const initialEqpForm = { descripcion: "", idSticker: "", marca: "", modelo: "", numeroSerie: "", color: "" };
  const initialVehForm = { tipoVehiculo: "", chasis: "", marca: "", modelo: "", color: "", anio: "", asignacion: "", dependencia: "", estado: "" };
  const initialPerForm = { nombre: "", cedula: "", telefono: "", email: "", direccion: "", cargo: "", salario: "", tipoEmpleado: "", estado: "", dependencia: "" };

  // Campos estables por tipo (evitan remounts al teclear)
  const mobFields = ["descripcion","idSticker","marca","modelo","numeroSerie","color"];
  const eqpFields = ["descripcion","idSticker","marca","modelo","numeroSerie","color"];
  const vehFields = ["tipoVehiculo","chasis","marca","modelo","color","anio","asignacion","dependencia","estado"];
  const perPersonalFields = ["nombre","cedula","telefono","email","direccion"];
  const perLaboralFields = ["cargo","salario","tipoEmpleado","estado","dependencia"];

  const [mobForm, setMobForm] = useState(initialMobForm);
  const [eqpForm, setEqpForm] = useState(initialEqpForm);
  const [vehForm, setVehForm] = useState(initialVehForm);
  const [perForm, setPerForm] = useState(initialPerForm);

  // Modales por tipo
  const [showMobModal, setShowMobModal] = useState(false);
const [showEqpModal, setShowEqpModal] = useState(false);
const [showVehModal, setShowVehModal] = useState(false);
const [showPerModal, setShowPerModal] = useState(false);

// Gestión de foco por campo en cada modal
const [mobFocused, setMobFocused] = useState(null);
const [eqpFocused, setEqpFocused] = useState(null);
const [vehFocused, setVehFocused] = useState(null);
const [perFocused, setPerFocused] = useState(null);

const mobRefs = React.useRef({});
const eqpRefs = React.useRef({});
const vehRefs = React.useRef({});
const perRefs = React.useRef({});

React.useEffect(() => { if (showMobModal && mobFocused) mobRefs.current[mobFocused]?.focus(); }, [showMobModal, mobFocused, mobForm]);
React.useEffect(() => { if (showEqpModal && eqpFocused) eqpRefs.current[eqpFocused]?.focus(); }, [showEqpModal, eqpFocused, eqpForm]);
React.useEffect(() => { if (showVehModal && vehFocused) vehRefs.current[vehFocused]?.focus(); }, [showVehModal, vehFocused, vehForm]);
React.useEffect(() => { if (showPerModal && perFocused) perRefs.current[perFocused]?.focus(); }, [showPerModal, perFocused, perForm]);

// Pestañas tipo Chrome por categoría
const tabs = [
  { key: 'mob', label: 'Mobiliarios' },
  { key: 'eqp', label: 'Equipos' },
  { key: 'veh', label: 'Vehículos' },
  { key: 'per', label: 'Personal' },
];
const [activeCatTab, setActiveCatTab] = useState('mob');
// Búsqueda por categoría (detalle de gerencia)
const [catSearch, setCatSearch] = useState('');
const filterList = (list, q) => {
  if (!q.trim()) return list;
  const s = q.toLowerCase();
  return list.filter((item) => Object.values(item).some((v) => String(v ?? '').toLowerCase().includes(s)));
};
const mobiliariosFiltrados = useMemo(() => filterList(mobiliarios, catSearch), [mobiliarios, catSearch]);
const equiposFiltrados = useMemo(() => filterList(equipos, catSearch), [equipos, catSearch]);
const vehiculosFiltrados = useMemo(() => filterList(vehiculos, catSearch), [vehiculos, catSearch]);
const personalFiltradoGerencia = useMemo(() => filterList(personalRegistros, catSearch), [personalRegistros, catSearch]);

  // Componente modal reutilizable
  const Modal = React.memo(({ title, children, onClose, onSave }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl w-full max-w-3xl shadow-xl">
        <div className="px-4 py-3 border-b flex justify-between items-center">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose} className="px-2 py-1 rounded-md hover:bg-gray-100">Cerrar</button>
        </div>
        <div className="p-4">{children}</div>
        <div className="px-4 py-3 border-t flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200">Cancelar</button>
          <button onClick={onSave} className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Guardar</button>
        </div>
      </div>
    </div>
  ));

  const resetForms = () => {
    setMobForm(initialMobForm);
    setEqpForm(initialEqpForm);
    setVehForm(initialVehForm);
    setPerForm(initialPerForm);
    setEditMobiliario(null);
    setEditEquipo(null);
    setEditVehiculo(null);
    setEditPersonal(null);
  };

  if (isDetalle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800">
        <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <button onClick={() => navigate('/gestion')} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                  <ArrowLeft className="w-4 h-4" /> Volver
                </button>
                <span className="text-xl font-bold">Gerencia: {gerenciaActual}</span>
              </div>
              <button onClick={resetForms} className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 border">Limpiar formularios</button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-6 lg:p-8 space-y-8">
          {/* Pestañas tipo Chrome */}
          <div className="flex items-center gap-2 border-b mb-6 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveCatTab(t.key)}
                className={`px-4 py-2 -mb-px border-b-2 ${activeCatTab === t.key ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          {/* Mobiliarios */}
          {activeCatTab === 'mob' && (
          <section className="bg-white/80 border rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Mobiliarios</h2>
              <button onClick={() => { setMobForm(initialMobForm); setEditMobiliario(null); setShowMobModal(true); }} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                <Plus className="w-4 h-4" /> Agregar
              </button>
            </div>
            {/* Formularios ahora se muestran en modal */}
            {false && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {Object.keys(initialMobForm).map((key) => (
                  <input key={key} value={mobForm[key]} onChange={(e) => setMobForm({ ...mobForm, [key]: e.target.value })} className="w-full rounded-lg border px-3 py-2" placeholder={key} />
                ))}
              </div>
            )}
            {/* Modal de Mobiliarios */}
            {showMobModal && (
              <Modal title="Mobiliario" onClose={() => setShowMobModal(false)} onSave={() => { upsert(mobiliarios, setMobiliarios, { ...mobForm }, 'MOB'); setShowMobModal(false); setMobForm(initialMobForm); setEditMobiliario(null); }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mobFields.map((key) => (
                    <input key={key} ref={(el) => (mobRefs.current[key] = el)} onFocus={() => setMobFocused(key)} value={mobForm[key] ?? ''} onChange={(e) => setMobForm(prev => ({ ...prev, [key]: e.target.value }))} className="w-full rounded-lg border px-3 py-2" placeholder={key} />
                  ))}
                </div>
              </Modal>
            )}
            <div className="mb-4">
              <input value={catSearch} onChange={(e)=>setCatSearch(e.target.value)} placeholder="Filtrar..." className="w-full rounded-lg border px-3 py-2" />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="p-2">Descripción</th><th className="p-2">ID Sticker</th><th className="p-2">Marca</th><th className="p-2">Modelo</th><th className="p-2">N° Serie</th><th className="p-2">Color</th><th className="p-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {mobiliariosFiltrados.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-2">{item.descripcion}</td><td className="p-2">{item.idSticker}</td><td className="p-2">{item.marca}</td><td className="p-2">{item.modelo}</td><td className="p-2">{item.numeroSerie}</td><td className="p-2">{item.color}</td>
                      <td className="p-2 flex gap-2">
                        <button className="px-2 py-1 rounded-md bg-amber-500 text-white hover:bg-amber-600" onClick={() => { setMobForm(item); setEditMobiliario(item.id); setShowMobModal(true); }}><Pencil className="w-4 h-4" /></button>
                        <button className="px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-700" onClick={() => removeById(mobiliarios, setMobiliarios, item.id)}><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          )}

          {/* Equipos */}
          {activeCatTab === 'eqp' && (
          <section className="bg-white/80 border rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Equipos</h2>
              <button onClick={() => { setEqpForm(initialEqpForm); setEditEquipo(null); setShowEqpModal(true); }} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                <Plus className="w-4 h-4" /> Agregar
              </button>
            </div>
            {false && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {Object.keys(initialEqpForm).map((key) => (
                  <input key={key} value={eqpForm[key]} onChange={(e) => setEqpForm({ ...eqpForm, [key]: e.target.value })} className="w-full rounded-lg border px-3 py-2" placeholder={key} />
                ))}
              </div>
            )}
            {showEqpModal && (
              <Modal title="Equipo" onClose={() => setShowEqpModal(false)} onSave={() => { upsert(equipos, setEquipos, { ...eqpForm }, 'EQP'); setShowEqpModal(false); setEqpForm(initialEqpForm); setEditEquipo(null); }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {eqpFields.map((key) => (
                    <input key={key} ref={(el) => (eqpRefs.current[key] = el)} onFocus={() => setEqpFocused(key)} value={eqpForm[key] ?? ''} onChange={(e) => setEqpForm(prev => ({ ...prev, [key]: e.target.value }))} className="w-full rounded-lg border px-3 py-2" placeholder={key} />
                  ))}
                </div>
              </Modal>
            )}
            <div className="mb-4">
              <input value={catSearch} onChange={(e)=>setCatSearch(e.target.value)} placeholder="Filtrar..." className="w-full rounded-lg border px-3 py-2" />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="p-2">Descripción</th><th className="p-2">ID Sticker</th><th className="p-2">Marca</th><th className="p-2">Modelo</th><th className="p-2">N° Serie</th><th className="p-2">Color</th><th className="p-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {equiposFiltrados.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-2">{item.descripcion}</td><td className="p-2">{item.idSticker}</td><td className="p-2">{item.marca}</td><td className="p-2">{item.modelo}</td><td className="p-2">{item.numeroSerie}</td><td className="p-2">{item.color}</td>
                      <td className="p-2 flex gap-2">
                        <button className="px-2 py-1 rounded-md bg-amber-500 text-white hover:bg-amber-600" onClick={() => { setEqpForm(item); setEditEquipo(item.id); setShowEqpModal(true); }}><Pencil className="w-4 h-4" /></button>
                        <button className="px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-700" onClick={() => removeById(equipos, setEquipos, item.id)}><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          )}

          {/* Vehículos */}
          {activeCatTab === 'veh' && (
          <section className="bg-white/80 border rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Vehículos</h2>
              <button onClick={() => { setVehForm(initialVehForm); setEditVehiculo(null); setShowVehModal(true); }} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                <Plus className="w-4 h-4" /> Agregar
              </button>
            </div>
            {false && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {Object.keys(initialVehForm).map((key) => (
                  <input key={key} value={vehForm[key]} onChange={(e) => setVehForm({ ...vehForm, [key]: e.target.value })} className="w-full rounded-lg border px-3 py-2" placeholder={key} />
                ))}
              </div>
            )}
            {showVehModal && (
              <Modal title="Vehículo" onClose={() => setShowVehModal(false)} onSave={() => { upsert(vehiculos, setVehiculos, { ...vehForm }, 'VEH'); setShowVehModal(false); setVehForm(initialVehForm); setEditVehiculo(null); }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {vehFields.map((key) => (
                    <input key={key} ref={(el) => (vehRefs.current[key] = el)} onFocus={() => setVehFocused(key)} value={vehForm[key] ?? ''} onChange={(e) => setVehForm(prev => ({ ...prev, [key]: e.target.value }))} className="w-full rounded-lg border px-3 py-2" placeholder={key} />
                  ))}
                </div>
              </Modal>
            )}
            <div className="mb-4">
              <input value={catSearch} onChange={(e)=>setCatSearch(e.target.value)} placeholder="Filtrar..." className="w-full rounded-lg border px-3 py-2" />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="p-2">Tipo</th><th className="p-2">Chasis</th><th className="p-2">Marca</th><th className="p-2">Modelo</th><th className="p-2">Color</th><th className="p-2">Año</th><th className="p-2">Asignación</th><th className="p-2">Dependencia</th><th className="p-2">Estado</th><th className="p-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {vehiculosFiltrados.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-2">{item.tipoVehiculo}</td><td className="p-2">{item.chasis}</td><td className="p-2">{item.marca}</td><td className="p-2">{item.modelo}</td><td className="p-2">{item.color}</td><td className="p-2">{item.anio}</td><td className="p-2">{item.asignacion}</td><td className="p-2">{item.dependencia}</td><td className="p-2">{item.estado}</td>
                      <td className="p-2 flex gap-2">
                        <button className="px-2 py-1 rounded-md bg-amber-500 text-white hover:bg-amber-600" onClick={() => { setVehForm(item); setEditVehiculo(item.id); setShowVehModal(true); }}><Pencil className="w-4 h-4" /></button>
                        <button className="px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-700" onClick={() => removeById(vehiculos, setVehiculos, item.id)}><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          )}

          {/* Personal */}
          {activeCatTab === 'per' && (
          <section className="bg-white/80 border rounded-2xl p-6 shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Personal</h2>
              <button onClick={() => { setPerForm(initialPerForm); setEditPersonal(null); setShowPerModal(true); }} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                <Plus className="w-4 h-4" /> Agregar
              </button>
            </div>
            {false && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h3 className="font-semibold mb-2">Información Personal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(["nombre","cedula","telefono","email","direccion"]).map((key) => (
                      <input key={key} value={perForm[key]} onChange={(e) => setPerForm({ ...perForm, [key]: e.target.value })} className="w-full rounded-lg border px-3 py-2" placeholder={key} />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Información Laboral</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(["cargo","salario","tipoEmpleado","estado","dependencia"]).map((key) => (
                      <input key={key} value={perForm[key]} onChange={(e) => setPerForm({ ...perForm, [key]: e.target.value })} className="w-full rounded-lg border px-3 py-2" placeholder={key} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            {showPerModal && (
              <Modal title="Personal" onClose={() => setShowPerModal(false)} onSave={() => { upsert(personalRegistros, setPersonalRegistros, { ...perForm }, 'PER'); setShowPerModal(false); setPerForm(initialPerForm); setEditPersonal(null); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Información Personal</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {perPersonalFields.map((key) => (
                        <input key={key} ref={(el) => (perRefs.current[key] = el)} onFocus={() => setPerFocused(key)} value={perForm[key] ?? ''} onChange={(e) => setPerForm(prev => ({ ...prev, [key]: e.target.value }))} className="w-full rounded-lg border px-3 py-2" placeholder={key} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Información Laboral</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {perLaboralFields.map((key) => (
                        key === 'tipoEmpleado' ? (
                          <select key={key} value={perForm[key] ?? ''} onChange={(e) => setPerForm(prev => ({ ...prev, [key]: e.target.value }))} className="w-full rounded-lg border px-3 py-2">
                            <option value="">Tipo</option>
                            <option value="Fijo">Fijo</option>
                            <option value="Temporal">Temporal</option>
                          </select>
                        ) : (
                          <input key={key} ref={(el) => (perRefs.current[key] = el)} onFocus={() => setPerFocused(key)} value={perForm[key] ?? ''} onChange={(e) => setPerForm(prev => ({ ...prev, [key]: e.target.value }))} className="w-full rounded-lg border px-3 py-2" placeholder={key} />
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </Modal>
            )}
            <div className="mb-4">
              <input value={catSearch} onChange={(e)=>setCatSearch(e.target.value)} placeholder="Filtrar..." className="w-full rounded-lg border px-3 py-2" />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="p-2">Nombre</th><th className="p-2">Cédula</th><th className="p-2">Teléfono</th><th className="p-2">Email</th><th className="p-2">Dirección</th><th className="p-2">Cargo</th><th className="p-2">Salario</th><th className="p-2">Tipo</th><th className="p-2">Estado</th><th className="p-2">Dependencia</th><th className="p-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {personalFiltradoGerencia.map((p) => (
                    <tr key={p.id} className="border-t">
                      <td className="p-2">{p.nombre}</td><td className="p-2">{p.cedula}</td><td className="p-2">{p.telefono}</td><td className="p-2">{p.email}</td><td className="p-2">{p.direccion}</td><td className="p-2">{p.cargo}</td><td className="p-2">{p.salario}</td><td className="p-2">{p.tipoEmpleado}</td><td className="p-2">{p.estado}</td><td className="p-2">{p.dependencia}</td>
                      <td className="p-2 flex gap-2">
                        <button className="px-2 py-1 rounded-md bg-amber-500 text-white hover:bg-amber-600" onClick={() => { setPerForm(p); setEditPersonal(p.id); setShowPerModal(true); }}><Pencil className="w-4 h-4" /></button>
                        <button className="px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-700" onClick={() => removeById(personalRegistros, setPersonalRegistros, p.id)}><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 animate-fade-in relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header moderno */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-soft sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/login")}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium text-sm">Volver</span>
              </button>
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Sistema de Gestión</h1>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center space-x-3">
                <button className="p-2 rounded-xl bg-white/80 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200/50 group">
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                </button>
                <button className="p-2 rounded-xl bg-white/80 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200/50 group">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform"></div>
                </button>
                <button className="p-2 rounded-xl bg-white/80 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200/50 group">
                  <div className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-125 transition-transform"></div>
                </button>
              </div>
              <div className="hidden md:flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 font-medium">Sistema activo</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="flex-1 flex max-w-7xl mx-auto">
        {/* Sidebar moderno */}
        <aside className="w-64 bg-white/90 backdrop-blur-xl border-r border-gray-200/50 p-6 hidden lg:block shadow-2xl relative overflow-hidden">
          {/* Gradiente decorativo en el sidebar */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-purple-50/50 pointer-events-none"></div>
          
          <div className="space-y-6 relative z-10">
            {/* Logo y perfil */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group">
                <img
                  src="/src/media/CEA-Logo.jpg"
                  alt="Logo CEA"
                  className="w-16 h-16 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 hover:text-blue-700 transition-colors">CEA</h3>
                <p className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Sistema de Gestión</p>
              </div>
            </div>

            {/* Navegación */}
            <nav className="space-y-3">
              <button
                onClick={() => setActiveTab("direccion")}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeTab === "direccion" 
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105" 
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md"
                }`}
              >
                <Home className={`w-5 h-5 group-hover:scale-110 transition-transform duration-300 ${activeTab === "direccion" ? "text-white" : ""}`} />
                <span className="font-medium relative z-10">Dirección</span>
                {activeTab === "direccion" && <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
              </button>
              <button
                onClick={() => setActiveTab("gerencias")}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeTab === "gerencias" 
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105" 
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md"
                }`}
              >
                <Building2 className={`w-5 h-5 group-hover:scale-110 transition-transform duration-300 ${activeTab === "gerencias" ? "text-white" : ""}`} />
                <span className="font-medium relative z-10">Gerencias</span>
                {activeTab === "gerencias" && <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
              </button>
              <button
                onClick={() => setActiveTab("personal")}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeTab === "personal" 
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105" 
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md"
                }`}
              >
                <Users className={`w-5 h-5 group-hover:scale-110 transition-transform duration-300 ${activeTab === "personal" ? "text-white" : ""}`} />
                <span className="font-medium relative z-10">Personal</span>
                {activeTab === "personal" && <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
              </button>
              <button
                onClick={() => setActiveTab("config")}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  activeTab === "config" 
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105" 
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md"
                }`}
              >
                <Settings className={`w-5 h-5 group-hover:scale-110 transition-transform duration-300 ${activeTab === "config" ? "text-white" : ""}`} />
                <span className="font-medium relative z-10">Configuración</span>
                {activeTab === "config" && <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
              </button>
            </nav>
          </div>
        </aside>

        {/* Área de contenido principal */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Breadcrumb y título dinámico */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Sistema</span>
              <span>/</span>
              <span className="text-primary-600 font-medium">{activeTab === "direccion" ? "Dirección" : activeTab === "personal" ? "Personal" : activeTab === "config" ? "Configuración" : "Gerencias"}</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                {activeTab === "direccion" && (
                  <>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Mi Dirección</h1>
                    <p className="text-gray-600">Resumen general de tu departamento y datos de contacto</p>
                  </>
                )}
                {activeTab === "gerencias" && (
                  <>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Gerencias Regionales</h1>
                    <p className="text-gray-600">Selecciona una gerencia para acceder a su información</p>
                  </>
                )}
                {activeTab === "personal" && (
                  <>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Registro de Personal</h1>
                    <p className="text-gray-600">Consulta el personal general y filtra por nombre, cargo o gerencia</p>
                  </>
                )}
                {activeTab === "config" && (
                  <>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Configuración</h1>
                    <p className="text-gray-600">Preferencias del sistema</p>
                  </>
                )}
              </div>
              {activeTab === "gerencias" && (
                <div className="hidden sm:flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200/50">
                  <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">{gerencias.length} gerencias activas</span>
                </div>
              )}
            </div>
          </div>

          {/* Contenido por pestaña */}
          {activeTab === "direccion" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up">
              <div className="lg:col-span-2 bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors">Información del Departamento</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-md transition-all duration-300">
                    <span className="text-blue-600 font-semibold min-w-[80px]">Nombre:</span> 
                    <span className="text-gray-800">Dirección de Gestión de Personal - DPR</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 hover:shadow-md transition-all duration-300">
                    <span className="text-green-600 font-semibold min-w-[80px]">Encargado:</span> 
                    <span className="text-gray-800">Fulano de pingue</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100 hover:shadow-md transition-all duration-300">
                    <span className="text-purple-600 font-semibold min-w-[80px]">Correo:</span> 
                    <span className="text-gray-800">PreservacionyReperacion@cea.gob.do</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 hover:shadow-md transition-all duration-300">
                    <span className="text-orange-600 font-semibold min-w-[80px]">Teléfono:</span> 
                    <span className="text-gray-800">(809) 000-0000</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-100 hover:shadow-md transition-all duration-300">
                    <span className="text-cyan-600 font-semibold min-w-[80px]">Ubicación:</span> 
                    <span className="text-gray-800">Sede Central, Santo Domingo</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Estadísticas</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <p className="text-sm text-blue-100 group-hover:text-white transition-colors">Personal</p>
                    <p className="text-3xl font-bold">14</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <p className="text-sm text-green-100 group-hover:text-white transition-colors">Proyectos</p>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <p className="text-sm text-purple-100 group-hover:text-white transition-colors">Gerencias</p>
                    <p className="text-3xl font-bold">{gerencias.length}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "gerencias" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-slide-up">
              {gerencias.map((item, index) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className="group relative bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-6 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left space-y-3 relative z-10">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors text-lg">Gerencia</h3>
                    <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors leading-relaxed font-medium">{item}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 shadow-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          )}

          {activeTab === "personal" && (
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-xl px-5 py-4 w-full sm:w-96 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Search className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por nombre, cargo, gerencia o ID"
                  className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                />
              </div>
              <div className="overflow-x-auto bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-xl">
                <table className="min-w-full divide-y divide-gray-200/70">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Nombre</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Cargo</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Gerencia</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/60 divide-y divide-gray-200/70">
                    {personalFiltrado.map((p, index) => (
                      <tr key={p.id} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group" style={{ animationDelay: `${index * 0.05}s` }}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium group-hover:text-blue-700 transition-colors">{p.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold group-hover:text-blue-800 transition-colors">{p.nombre}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 group-hover:text-blue-700 transition-colors">{p.cargo}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">{p.gerencia}</span>
                        </td>
                      </tr>
                    ))}
                    {personalFiltrado.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-gray-500 font-medium">
                          <div className="flex flex-col items-center space-y-2">
                            <Search className="w-8 h-8 text-gray-300" />
                            <span>Sin resultados encontrados</span>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Gestion;
