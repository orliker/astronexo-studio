/**
 * Todo el contenido de la web en un solo archivo: servicios (cada uno genera
 * su página en /servicios/[slug]), casos reales, laboratorio, precios y FAQ.
 *
 * Regla de la casa: aquí solo va lo que se puede comprobar. Nada de métricas
 * inventadas ni testimonios que no hayan escrito los clientes.
 */

export type IconName =
  | "web"
  | "app"
  | "mobile"
  | "flow"
  | "bot"
  | "crm"
  | "seo"
  | "game";

export type Service = {
  slug: string;
  icon: IconName;
  name: string;
  /** Una línea: lo que gana el cliente. */
  pitch: string;
  /** Ejemplos concretos que se ven en la tarjeta de la home. */
  examples: string[];
  price: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  forWho: string[];
  includes: { title: string; text: string }[];
  stack: string[];
  /** slugs de CASES relacionados */
  related: string[];
  faq: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "diseno-web",
    icon: "web",
    name: "Diseño web premium",
    pitch: "Una web que da confianza en tres segundos y convierte visitas en mensajes.",
    examples: ["Webs corporativas", "Landings de campaña", "Catálogos y cartas", "Multiidioma"],
    price: "Desde 150 €",
    seoTitle: "Diseño web premium para negocios en Portugal y España",
    seoDescription:
      "Diseño y programo webs rápidas, a medida y preparadas para vender: corporativas, landings, catálogos y webs multiidioma. Estudio en Oporto, trato directo y precio cerrado.",
    h1: "Diseño web premium que explica, convence y vende",
    intro:
      "Tu web es la primera reunión con tu cliente, aunque tú no estés. Diseño y programo cada web a medida, sin plantillas recicladas: textos que explican lo que haces, fotos bien tratadas, carga instantánea en el móvil y un camino claro hasta el WhatsApp, la llamada o el formulario.",
    forWho: [
      "Negocios con buen servicio y una web (o un Instagram) que no está a su altura.",
      "Profesionales que necesitan justificar sus precios antes de la primera llamada.",
      "Marcas que lanzan una campaña y necesitan una landing que convierta.",
      "Negocios con clientes en varios países que necesitan la web en varios idiomas.",
    ],
    includes: [
      { title: "Diseño a medida", text: "Dirección visual propia para tu marca, pensada primero para el móvil y revisada en pantallas grandes." },
      { title: "Textos que venden", text: "Redacto la estructura y los textos contigo: qué haces, para quién, cuánto cuesta y cómo se contrata." },
      { title: "Velocidad real", text: "Código moderno, imágenes optimizadas y sin plugins de sobra. Lo mido con Lighthouse antes de entregar." },
      { title: "SEO desde el primer día", text: "Títulos, metadatos, datos estructurados, sitemap y Google Search Console configurados." },
      { title: "Contacto directo", text: "WhatsApp con mensaje preescrito, formularios que llegan a tu correo y botones de llamada." },
      { title: "Dominio y publicación", text: "Te ayudo con el dominio, lo publico y te quedas con el código y los accesos." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "WordPress (Divi, Breakdance)"],
    related: ["circulo-consciente", "banqa", "bright-infinity", "mundo-de-papel"],
    faq: [
      { q: "¿Cuánto tarda una web?", a: "Una landing de una página suele estar en pocos días. Una web corporativa con varias secciones, entre una y tres semanas según el contenido que tengas preparado." },
      { q: "¿Trabajas con WordPress?", a: "Sí. Si ya tienes WordPress o lo necesitas para editar tú mismo, trabajo con Divi y Breakdance. Si buscas máxima velocidad, recomiendo Next.js y te explico por qué." },
      { q: "¿La web es mía?", a: "Sí. El código, el dominio y los accesos son tuyos. Sin permanencias ni cuotas obligatorias." },
    ],
  },
  {
    slug: "aplicaciones-web",
    icon: "app",
    name: "Aplicaciones web y SaaS",
    pitch: "Software a medida en el navegador: reservas, pagos, áreas de cliente y paneles.",
    examples: ["Reservas y pagos", "Áreas de cliente con login", "Portales internos", "Software de pago por suscripción"],
    price: "Desde 1.500 €",
    seoTitle: "Desarrollo de aplicaciones web y SaaS a medida",
    seoDescription:
      "Aplicaciones web a medida con login, reservas, pagos con Stripe, bases de datos y paneles de gestión. Desarrollo completo, de la idea a producción.",
    h1: "Aplicaciones web a medida, de la idea a producción",
    intro:
      "Cuando una hoja de cálculo y cuatro herramientas sueltas ya no dan para más, toca un sistema propio. Construyo aplicaciones web completas: base de datos, usuarios con login, pagos, correos automáticos, facturas y un panel para que tú lo gestiones todo sin depender de nadie.",
    forWho: [
      "Escuelas, academias y gimnasios que gestionan alumnos, cuotas y horarios a mano.",
      "Negocios que cobran reservas o señales y quieren el pago online integrado.",
      "Emprendedores con una idea de producto SaaS que necesitan una primera versión real.",
      "Empresas que quieren un portal para sus clientes o su equipo.",
    ],
    includes: [
      { title: "Análisis y alcance cerrado", text: "Antes de escribir código definimos qué hace la primera versión y qué no. Precio cerrado sobre ese alcance." },
      { title: "Usuarios y permisos", text: "Registro, login y roles: lo que ve el alumno, el cliente, el empleado y el administrador." },
      { title: "Pagos online", text: "Cobros con Stripe, suscripciones, señales y recibos, conciliados con tu base de datos." },
      { title: "Datos bien guardados", text: "PostgreSQL o SQLite con copias de seguridad, y exportación a Excel para tu gestoría." },
      { title: "Panel de gestión", text: "Una pantalla clara para ver altas, cobros, pendientes y avisos sin tocar código." },
      { title: "Pruebas y entrega", text: "Pruebas automáticas de lo crítico (cobros, altas, permisos) y documentación de uso." },
    ],
    stack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Supabase", "Stripe", "Vercel Functions"],
    related: ["circulo-consciente", "banqa"],
    faq: [
      { q: "¿Por qué desde 1.500 €?", a: "Porque una aplicación con usuarios, pagos y datos necesita diseño, desarrollo, pruebas y seguridad. Si tu caso es más simple, a menudo una automatización resuelve lo mismo por mucho menos, y te lo digo." },
      { q: "¿Puedo empezar con algo pequeño?", a: "Es lo que recomiendo: una primera versión con lo imprescindible, en producción y usándose, y a partir de ahí se amplía con lo que pidan los usuarios reales." },
      { q: "¿Quién mantiene la aplicación después?", a: "Puedo mantenerla yo con una cuota mensual opcional, o entregarte el código documentado para que lo lleve otro equipo." },
    ],
  },
  {
    slug: "apps-moviles-y-escritorio",
    icon: "mobile",
    name: "Apps móviles y de escritorio",
    pitch: "Apps para iPhone, Android, Windows y Mac cuando el navegador se queda corto.",
    examples: ["Apps iOS y Android", "Apps de escritorio", "Herramientas internas", "IA que no saca tus datos fuera"],
    price: "Desde 1.500 €",
    seoTitle: "Desarrollo de apps móviles y de escritorio a medida",
    seoDescription:
      "Apps para iOS, Android, Windows y Mac: herramientas internas, apps con IA y aplicaciones de escritorio ligeras con Tauri y React. Desarrollo a medida desde Oporto.",
    h1: "Apps móviles y de escritorio para tu negocio",
    intro:
      "Hay trabajos que piden una app instalada: funcionar sin conexión, usar la cámara, avisar con notificaciones o trabajar con archivos del ordenador. Desarrollo apps ligeras y rápidas que comparten código con la web, para que no pagues dos veces por lo mismo.",
    forWho: [
      "Equipos de campo que necesitan registrar trabajos, fotos o firmas desde el móvil.",
      "Negocios que quieren una herramienta interna instalada en sus ordenadores.",
      "Proyectos que necesitan funcionar sin internet o con datos locales.",
      "Productos que quieren estar en la App Store y en Google Play.",
    ],
    includes: [
      { title: "Una base, varias plataformas", text: "Código compartido entre web, móvil y escritorio siempre que sea posible." },
      { title: "Escritorio ligero", text: "Apps de escritorio con Tauri: instaladores pequeños y consumo de memoria bajo." },
      { title: "Datos locales y sincronización", text: "SQLite en el dispositivo y sincronización con tu servidor cuando hay conexión." },
      { title: "IA integrada", text: "Asistentes y automatizaciones con modelos de IA dentro de la propia app." },
      { title: "Publicación", text: "Te acompaño en la publicación en las tiendas y en la distribución interna." },
      { title: "Soporte de versiones", text: "Actualizaciones y correcciones con un plan claro, sin sorpresas." },
    ],
    stack: ["Tauri", "React", "TypeScript", "SQLite", "Android", "APIs de IA"],
    related: [],
    faq: [
      { q: "¿App nativa o web?", a: "Si lo que necesitas funciona bien en el navegador, una aplicación web es más barata y no depende de las tiendas. Te recomiendo app instalada solo cuando aporta algo real." },
      { q: "¿Cuánto cuesta publicar en las tiendas?", a: "Apple cobra una cuota anual de desarrollador y Google una cuota única. Las cuentas van a tu nombre, así la app es tuya." },
    ],
  },
  {
    slug: "automatizacion-de-procesos",
    icon: "flow",
    name: "Automatización de procesos",
    pitch: "Facturas, presupuestos, citas y avisos que se hacen solos. Recuperas horas cada semana.",
    examples: ["Facturas y Excel", "Presupuestos automáticos", "Citas y recordatorios", "Tareas repetitivas que se hacen solas"],
    price: "Desde 90 €",
    seoTitle: "Automatización de facturas, presupuestos y procesos para pymes",
    seoDescription:
      "Automatizo facturas, presupuestos, citas, recordatorios y tareas repetitivas con n8n, Python y conexiones entre tus herramientas. Ahorra horas cada semana. Desde 90 €.",
    h1: "Automatización: lo repetitivo, que lo haga el sistema",
    intro:
      "Copiar datos de un correo a un Excel, preparar el mismo presupuesto veinte veces, recordar citas por WhatsApp uno a uno. Todo eso se puede automatizar. Conecto tus herramientas para que los datos viajen solos y tú solo revises lo importante.",
    forWho: [
      "Autónomos y pymes que llevan las facturas a mano en Excel o en papel.",
      "Negocios que preparan presupuestos parecidos una y otra vez.",
      "Clínicas, talleres y centros que pierden citas por falta de recordatorios.",
      "Equipos que copian datos entre programas que no se hablan.",
    ],
    includes: [
      { title: "Mapa del proceso", text: "Miramos juntos cómo trabajas hoy y dónde se va el tiempo. Solo se automatiza lo que compensa." },
      { title: "Facturación ordenada", text: "Registro de facturas, cobrado y pendiente, avisos de vencimiento y exportación para tu gestoría." },
      { title: "Presupuestos en un minuto", text: "Plantillas con tus precios que generan el PDF y lo envían al cliente." },
      { title: "Citas y recordatorios", text: "Reservas en tu calendario y avisos automáticos para reducir ausencias." },
      { title: "Conexiones entre herramientas", text: "Gmail, Google Sheets, Drive, Calendar, Stripe, WhatsApp y lo que uses, conectado con n8n o código propio." },
      { title: "Avisos si algo falla", text: "Si una automatización falla, te enteras al momento. Nada se rompe en silencio." },
    ],
    stack: ["n8n", "Python", "Node.js", "Google Workspace", "ExcelJS", "PDFKit", "Playwright"],
    related: ["circulo-consciente"],
    faq: [
      { q: "¿Necesito cambiar mis programas?", a: "Casi nunca. La idea es conectar lo que ya usas. Si una herramienta no lo permite, te propongo la alternativa más sencilla." },
      { q: "¿Y la ley de facturación (Verifactu)?", a: "Diseño la solución para que tu gestoría siga teniendo el control. Si tu caso necesita software de facturación homologado, te lo digo y lo integramos en lugar de inventarlo." },
      { q: "¿Tiene cuota mensual?", a: "Depende de dónde se ejecute. Muchas automatizaciones funcionan con coste mensual cero o de pocos euros, y te lo detallo antes de empezar." },
    ],
  },
  {
    slug: "whatsapp-e-inteligencia-artificial",
    icon: "bot",
    name: "WhatsApp e inteligencia artificial",
    pitch: "Asistentes que responden, filtran y agendan, entrenados con la información de tu negocio.",
    examples: ["Bots de WhatsApp", "Asistentes con tus documentos", "Agentes de voz", "Saber quién quiere comprar"],
    price: "Desde 250 €",
    seoTitle: "Automatización de WhatsApp con IA y asistentes inteligentes",
    seoDescription:
      "Bots de WhatsApp con IA, asistentes que responden con la información de tu negocio, agentes de voz y clasificación de clientes potenciales. Con supervisión humana y sin respuestas inventadas.",
    h1: "WhatsApp e IA que responden bien, no solo rápido",
    intro:
      "Responder las mismas diez preguntas cada día cansa y hace perder clientes. Construyo asistentes que contestan con la información real de tu negocio (precios, horarios, servicios), filtran a quien de verdad quiere comprar y te pasan la conversación cuando hace falta una persona.",
    forWho: [
      "Negocios que reciben muchos mensajes repetidos por WhatsApp o Instagram.",
      "Clínicas, academias y servicios que agendan citas por chat.",
      "Empresas con mucha documentación interna que nadie encuentra.",
      "Equipos comerciales que necesitan priorizar a quién llamar primero.",
    ],
    includes: [
      { title: "Respuestas con tu información", text: "El asistente consulta tus datos reales y no inventa. Si no sabe algo, lo dice y te avisa." },
      { title: "Reglas de seguridad", text: "Una capa de reglas revisa cada respuesta antes de enviarla y bloquea lo que no cumple." },
      { title: "Paso a humano", text: "Cuando la conversación lo pide, te llega a ti con el resumen hecho." },
      { title: "Citas en tu calendario", text: "Reserva directa en Google Calendar con confirmación y recordatorio." },
      { title: "Agentes de voz", text: "Asistentes que atienden por teléfono con voz natural, en español o portugués." },
      { title: "Panel y métricas reales", text: "Ves cuántas conversaciones entran, cuántas se resuelven y cuántas pasan a ti." },
    ],
    stack: ["Claude", "Gemini", "Groq", "n8n", "Deepgram", "ElevenLabs", "Python"],
    related: [],
    faq: [
      { q: "¿El bot puede decir algo que no debe?", a: "Por eso trabajo con reglas de rechazo y con tus datos como única fuente. Lo que el asistente no sabe con seguridad, no lo responde: te lo pasa." },
      { q: "¿Funciona con mi número de WhatsApp actual?", a: "Depende del volumen y del uso. Te explico las opciones oficiales de WhatsApp Business y sus costes antes de empezar." },
      { q: "¿Cuánto cuesta la IA al mes?", a: "Con volúmenes de un negocio local suele ser poco. Te doy una estimación con tus números reales de mensajes." },
    ],
  },
  {
    slug: "crm-y-paneles",
    icon: "crm",
    name: "CRM y paneles de gestión",
    pitch: "Todos tus clientes, ventas y tareas en un solo sitio, sin pagar licencias de gigante.",
    examples: ["CRM a medida", "CRM sin licencias que pagar", "Paneles de ventas", "Seguimiento de clientes"],
    price: "Desde 500 €",
    seoTitle: "CRM a medida y paneles de gestión para pymes",
    seoDescription:
      "CRM a medida o basado en software libre, paneles de ventas y seguimiento de clientes para pymes. Una alternativa sencilla y barata a las grandes plataformas.",
    h1: "Un CRM que tu equipo use de verdad",
    intro:
      "Los CRM grandes son potentes, pero caros y llenos de pantallas que nadie usa. Monto CRM a medida o basados en software libre, con solo lo que tu negocio necesita: clientes, oportunidades, tareas y avisos, conectados con tu web, tu correo y tu WhatsApp.",
    forWho: [
      "Equipos que llevan los clientes en hojas de cálculo, libretas o en la cabeza.",
      "Negocios que pagan licencias de CRM que casi no usan.",
      "Comerciales que pierden oportunidades por no hacer seguimiento a tiempo.",
      "Dueños que quieren ver ventas y pendientes de un vistazo.",
    ],
    includes: [
      { title: "Modelo de datos limpio", text: "Empresas, contactos, oportunidades y etapas, sin duplicados." },
      { title: "Entrada automática", text: "Los formularios de tu web y tus conversaciones entran solos en el CRM." },
      { title: "Seguimiento", text: "Tareas y recordatorios para que ninguna oportunidad se quede sin respuesta." },
      { title: "Panel de dirección", text: "Ventas, embudo y previsiones en una sola pantalla." },
      { title: "Importación", text: "Traigo tus datos actuales desde Excel o desde tu CRM anterior." },
      { title: "Sin licencias por usuario", text: "Cuando se puede, software libre o propio: pagas el trabajo, no cada asiento." },
    ],
    stack: ["PostgreSQL", "Supabase", "Next.js", "n8n", "Python"],
    related: [],
    faq: [
      { q: "¿Mejor a medida o uno existente?", a: "Si una herramienta existente encaja, te lo digo y la configuro. A medida tiene sentido cuando tu proceso es particular o las licencias se disparan." },
      { q: "¿Puedo migrar desde mi Excel?", a: "Sí. La importación y limpieza de datos forma parte del proyecto." },
    ],
  },
  {
    slug: "seo-tecnico-y-local",
    icon: "seo",
    name: "SEO técnico y local",
    pitch: "Que te encuentren en Google y en Maps quienes ya están buscando lo que haces.",
    examples: ["Tu ficha de Google Maps", "Posicionamiento en Google", "Que Google entienda tu negocio", "Web rápida en el móvil"],
    price: "Desde 120 €",
    seoTitle: "SEO técnico y SEO local en Google y Google Maps",
    seoDescription:
      "Posicionamiento local en Google Maps, ficha de Google Business Profile, SEO técnico, datos estructurados y velocidad web. Sin promesas imposibles: trabajo medible.",
    h1: "SEO técnico y local, sin promesas imposibles",
    intro:
      "Nadie serio puede garantizarte el primer puesto en Google. Lo que sí se puede hacer es que tu web esté técnicamente impecable, que Google entienda qué haces y dónde, y que tu ficha de Maps convenza más que la de la competencia. Eso es lo que hago, y lo mido.",
    forWho: [
      "Negocios locales que no aparecen en Google Maps cuando alguien busca su servicio en su zona.",
      "Webs lentas o mal estructuradas que Google no termina de entender.",
      "Negocios que van a lanzar web nueva y no quieren perder lo ganado.",
    ],
    includes: [
      { title: "Auditoría técnica", text: "Velocidad, indexación, errores, enlaces rotos y estructura de la web." },
      { title: "Ficha de Google", text: "Optimización de Google Business Profile: categorías, servicios, fotos y reseñas." },
      { title: "Datos estructurados", text: "Schema.org para que Google muestre tu negocio, servicios y preguntas frecuentes." },
      { title: "Contenido útil", text: "Páginas por servicio y zona que responden lo que tus clientes buscan." },
      { title: "Migraciones seguras", text: "Redirecciones y control para no perder posiciones al cambiar de web." },
      { title: "Informe claro", text: "Search Console y métricas reales, explicadas sin jerga." },
    ],
    stack: ["Google Search Console", "Google Business Profile", "Lighthouse", "Schema.org", "Next.js"],
    related: ["mundo-de-papel", "banqa"],
    faq: [
      { q: "¿En cuánto tiempo se notan resultados?", a: "Las mejoras técnicas se notan en semanas; el posicionamiento estable, en meses. Desconfía de quien te prometa el primer puesto en dos semanas." },
      { q: "¿Incluyes SEO en las webs que haces?", a: "Sí, todas mis webs salen con la base técnica de SEO hecha. El trabajo continuo de posicionamiento local es un servicio aparte." },
    ],
  },
  {
    slug: "juegos-y-experiencias-interactivas",
    icon: "game",
    name: "Juegos y experiencias interactivas",
    pitch: "Webs con 3D y scroll cinematográfico, minijuegos y configuradores que se recuerdan.",
    examples: ["Webs 3D y animadas", "Minijuegos de marca", "Configuradores", "Presentaciones interactivas"],
    price: "Desde 300 €",
    seoTitle: "Juegos web, experiencias 3D y configuradores interactivos",
    seoDescription:
      "Webs con animación 3D y scroll cinematográfico, minijuegos de marca, configuradores de producto y experiencias interactivas para lanzamientos y campañas.",
    h1: "Experiencias interactivas que la gente comparte",
    intro:
      "A veces la mejor forma de explicar un producto es dejar que la gente juegue con él. Diseño experiencias con animación avanzada, 3D y scroll cinematográfico, minijuegos para campañas y configuradores donde el cliente monta su pedido y ve el precio al momento.",
    forWho: [
      "Marcas que lanzan un producto y quieren una web que se recuerde.",
      "Tiendas con productos personalizables que necesitan un configurador.",
      "Campañas que buscan participación: concursos, minijuegos, retos.",
    ],
    includes: [
      { title: "Animación con criterio", text: "Movimiento fluido que respeta a quien prefiere menos movimiento y no castiga la velocidad." },
      { title: "3D en el navegador", text: "Escenas y productos en 3D que funcionan también en móviles modestos." },
      { title: "Minijuegos", text: "Juegos cortos de marca con ranking, premios o captación de contactos." },
      { title: "Configuradores", text: "El cliente elige opciones, ve el resultado y el precio, y envía el pedido." },
    ],
    stack: ["React", "GSAP", "Framer Motion", "Canvas", "WebGL", "TypeScript"],
    related: ["mundo-de-papel"],
    faq: [
      { q: "¿Una web animada no va lenta?", a: "Si se hace mal, sí. Cargo lo pesado solo cuando hace falta y mido el rendimiento en móvil antes de entregar." },
    ],
  },
];

export type Case = {
  slug: string;
  client: string;
  sector: string;
  place: string;
  url: string;
  image: string;
  status: "En producción" | "Producto propio";
  summary: string;
  built: string[];
  stack: string[];
};

export const CASES: Case[] = [
  {
    slug: "circulo-consciente",
    client: "Círculo Consciente",
    sector: "Escuela de artes marciales y Qi Gong",
    place: "Burgos, España",
    url: "https://www.circuloconsciente.es",
    image: "/work/circulo-consciente.jpg",
    status: "En producción",
    summary:
      "Una escuela con alumnos presenciales y online en varios países necesitaba dejar atrás un WordPress antiguo y gestionar inscripciones, pagos y facturas sin papeles.",
    built: [
      "Web a medida en cuatro idiomas (ES, EN, PT, FR)",
      "Horario semanal con clases presenciales, en directo y online",
      "Inscripciones y pagos online con Stripe",
      "Facturación exportable a Excel para la gestoría",
      "Panel de gestión privado para la escuela",
    ],
    stack: ["Vercel Functions", "PostgreSQL", "Supabase", "Stripe", "Google APIs", "ExcelJS"],
  },
  {
    slug: "banqa",
    client: "BANQA",
    sector: "Mobiliario de diseño e interiorismo",
    place: "Barcelona y Costa Brava",
    url: "https://banqa.es",
    image: "/work/banqa.jpg",
    status: "En producción",
    summary:
      "Una firma de mobiliario e interiorismo de gama alta necesitaba una web a la altura de sus proyectos y una vía directa para captar clientes con campañas.",
    built: [
      "Web corporativa bilingüe español e inglés",
      "Landing de campaña para captar clientes nuevos",
      "Formulario de cita que llega directo al equipo",
      "Gestión de consentimiento de cookies",
    ],
    stack: ["Next.js", "React", "Vercel", "Nodemailer"],
  },
  {
    slug: "bright-infinity",
    client: "Bright Infinity",
    sector: "Remodelación y limpieza profesional",
    place: "Portugal y Angola",
    url: "https://www.brightinfinitypt.com",
    image: "/work/bright-infinity.jpg",
    status: "En producción",
    summary:
      "Una empresa de obras y limpiezas que trabaja en dos países necesitaba presentarse con seriedad ante empresas y particulares.",
    built: [
      "Web corporativa en portugués con servicios y portafolio",
      "Presentación de operaciones en Portugal y Angola",
      "Petición de presupuesto por WhatsApp en un clic",
      "Animaciones suaves y carga rápida",
    ],
    stack: ["React", "Vite", "GSAP", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "mundo-de-papel",
    client: "Mundo de Papel Portugal",
    sector: "Topos de bolo personalizados",
    place: "Portugal",
    url: "https://mundodepapelportugal.com",
    image: "/work/mundo-de-papel.jpg",
    status: "En producción",
    summary:
      "Un taller artesano vendía por mensajes sin una web que explicara precios, plazos y cómo encargar.",
    built: [
      "Rediseño completo con identidad de papel y tinta",
      "Catálogo por categorías con precios de partida",
      "Asistente que monta el pedido y lo envía por WhatsApp",
      "Preguntas frecuentes, plazos y envíos claros",
    ],
    stack: ["Next.js", "React", "Vercel"],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  business: string;
  caseSlug: string;
};

/** Lo que han dicho los clientes a Alex (23-oct-2026), redactado sin añadir nada que no dijeran. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Da gusto trabajar con Alex. Es muy aplicado y siempre está disponible: si algo falla o queremos añadir algo nuevo, lo resuelve en el momento.",
    author: "Gaudencio",
    business: "Círculo Consciente, Burgos",
    caseSlug: "circulo-consciente",
  },
  {
    quote: "Quedamos encantados con el resultado. Para todo lo que tenga que ver con lo digital, contamos con él. Vale cada céntimo.",
    author: "Equipo de BANQA",
    business: "Mobiliario de diseño, Barcelona",
    caseSlug: "banqa",
  },
  {
    quote: "La web es exactamente como la imaginaba, y ya me están llegando más clientes.",
    author: "Mundo de Papel",
    business: "Topos de tarta personalizados, Portugal",
    caseSlug: "mundo-de-papel",
  },
  {
    quote: "Su disponibilidad es excelente. Me gustó mucho su forma de trabajar: fácil y muy rápido.",
    author: "Bright Infinity",
    business: "Limpiezas, Portugal y Angola",
    caseSlug: "bright-infinity",
  },
];

export type LabItem = {
  name: string;
  what: string;
  detail: string;
  stack: string[];
  href?: string;
};

/** Sistemas propios: demuestran hasta dónde llega el trabajo técnico. */
export const LAB: LabItem[] = [
  {
    name: "Agente de voz en portugués",
    what: "Conversa por voz en tiempo real y entiende el portugués de Portugal.",
    detail: "Reconocimiento de voz, razonamiento y voz sintética encadenados con baja latencia.",
    stack: ["Deepgram Nova-3", "LLM", "ElevenLabs"],
  },
  {
    name: "Motor de fechas en lenguaje natural",
    what: "Convierte «el jueves que viene a las cinco» en una cita exacta.",
    detail: "Español y portugués, zonas horarias y pruebas con reloj fijo para que nunca falle.",
    stack: ["TypeScript", "Tests"],
    href: "https://github.com/orliker/astro-calendar-core",
  },
  {
    name: "Núcleo de comercio electrónico",
    what: "Máquina de estados de pedidos y precios con control de margen.",
    detail: "Cada cambio de estado es transaccional y auditado, con pruebas aisladas en SQLite.",
    stack: ["TypeScript", "SQLite", "Tests"],
    href: "https://github.com/orliker/astro-commerce-core",
  },
  {
    name: "Asistente de escritorio con IA",
    what: "App de escritorio con memoria local que organiza tareas y notas.",
    detail: "Instalador ligero, datos guardados en el propio ordenador y respuestas en tiempo real.",
    stack: ["Tauri 2", "React 19", "Groq", "SQLite"],
    href: "https://github.com/orliker/nexos-os",
  },
  {
    name: "Fábrica de vídeo vertical",
    what: "Genera guion, voz y montaje de vídeos cortos en dos idiomas.",
    detail: "Un pipeline automático que produce y prepara vídeos para redes en paralelo.",
    stack: ["Python", "FFmpeg", "LLM", "TTS"],
  },
  {
    name: "Motor de prospección B2B",
    what: "Encuentra negocios, analiza su web y redacta mensajes personalizados.",
    detail: "Mensajes escritos por IA que pasan por una capa de reglas que rechaza lo genérico antes de enviar.",
    stack: ["Python", "Playwright", "Gemini", "OpenStreetMap"],
    href: "https://github.com/orliker/astronexo",
  },
];

export const STACK: { group: string; items: string[] }[] = [
  { group: "Web y producto", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vite", "GSAP", "Framer Motion"] },
  { group: "Servidor y datos", items: ["Node.js", "Python", "PostgreSQL", "Supabase", "SQLite", "Stripe", "APIs REST"] },
  { group: "Automatización e IA", items: ["n8n", "Playwright", "Claude", "Gemini", "Groq", "Deepgram", "ElevenLabs"] },
  { group: "Apps y plataformas", items: ["Tauri", "WordPress", "Divi", "Breakdance", "Decap CMS", "Vercel", "Cloudflare"] },
];

export const PROCESS = [
  { title: "Diagnóstico gratis", time: "24-48 h", text: "Me mandas tu web, tu Instagram o tu idea, y si quieres webs que te gusten como inspiración. Te digo qué cambiaría y qué no merece la pena, por escrito y sin compromiso." },
  { title: "Propuesta cerrada", time: "2-3 días", text: "Alcance, plazos y precio cerrado. Muchas veces con una vista previa real para que veas la dirección antes de pagar." },
  { title: "Construcción a la vista", time: "Días a 1 mes", text: "Trabajas con un enlace en vivo que se actualiza y opinas sobre algo real. Una web completa con pagos, panel e idiomas, como Círculo Consciente, está lista en torno a un mes si la comunicación es fluida." },
  { title: "Entrega y soporte", time: "Siempre", text: "Publico, te enseño a usarlo y te quedas con el código y los accesos. Soporte mensual solo si lo quieres." },
];

export const DO = [
  "Webs, aplicaciones y automatizaciones de principio a fin, construidas por mí.",
  "El diseño corre de mi cuenta: me das tu idea o webs que te gusten y lo convierto en algo propio.",
  "Precio cerrado antes de empezar, con el alcance por escrito.",
  "Vistas previas reales durante el proyecto, no solo maquetas.",
  "Código y accesos a tu nombre: la web es tuya.",
  "Trato directo en español, portugués o inglés.",
  "Decirte cuándo algo no te compensa, aunque eso sea vender menos.",
];

export const DONT = [
  "Plantillas recicladas con tu logo encima.",
  "Reseñas, cifras o casos de éxito inventados.",
  "Prometer el primer puesto de Google en dos semanas.",
  "Permanencias ni cuotas obligatorias para que tu web siga en pie.",
  "Gestión diaria de redes sociales ni sesiones de foto o vídeo presenciales.",
  "Bots que responden cualquier cosa sin control humano.",
];

export type Pack = {
  name: string;
  price: string;
  for: string;
  includes: string[];
  /** Qué hace subir el precio: evita que el "desde" parezca una trampa. */
  raises: string;
  highlight?: boolean;
  message: string;
};

export const PACKS: Pack[] = [
  {
    name: "Web de lanzamiento",
    price: "Desde 150 €",
    for: "Negocios y profesionales que necesitan una página seria para empezar a captar.",
    includes: ["Landing a medida y rápida", "Textos orientados a vender", "WhatsApp y contacto directo", "SEO básico e indexación", "Publicación incluida"],
    raises: "Sube si necesitas varias páginas, varios idiomas, reservas o pagos.",
    message: "Hola Alex, me interesa la Web de lanzamiento para mi negocio.",
  },
  {
    name: "WhatsApp con IA",
    price: "Desde 250 €",
    for: "Negocios que responden las mismas preguntas cada día y agendan por chat.",
    includes: ["Asistente con tu información real", "Filtro de clientes potenciales", "Citas en Google Calendar", "Paso a humano con resumen", "Reglas de seguridad"],
    raises: "Sube con el número de servicios, idiomas y conexiones con tu agenda.",
    highlight: true,
    message: "Hola Alex, me interesa el asistente de WhatsApp con IA para mi negocio.",
  },
  {
    name: "Facturas automáticas",
    price: "Desde 90 €",
    for: "Autónomos y pymes que aún llevan las facturas a mano.",
    includes: ["Panel de cobrado y pendiente", "Búsqueda por cliente y fecha", "Avisos de vencimiento", "Exportación para la gestoría"],
    raises: "Sube si hay que conectar tu programa de facturación o varias empresas.",
    message: "Hola Alex, me interesa automatizar las facturas de mi negocio.",
  },
  {
    name: "Sistema completo",
    price: "Desde 500 €",
    for: "Negocios que quieren web, captación y automatización trabajando juntos.",
    includes: ["Web completa de varias páginas", "WhatsApp con IA integrado", "SEO local y ficha de Google", "CRM o panel de seguimiento", "Revisión mensual opcional"],
    raises: "Sube con el número de páginas, sedes y conexiones.",
    message: "Hola Alex, me interesa el sistema completo (web + WhatsApp + automatización).",
  },
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: "¿Cuánto cuesta y cuánto tarda?",
    a: "Una automatización sencilla empieza en 90 €, una web de lanzamiento en 150 € y las aplicaciones a medida en 1.500 €. Una landing puede estar en pocos días, y un proyecto completo con pagos, panel e idiomas, como Círculo Consciente, en torno a un mes si la comunicación es fluida. Siempre con precio cerrado antes de empezar, y mis precios no llevan IVA.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Según el proyecto, puedes pagarlo de una vez o fraccionarlo: hasta 2 pagos en proyectos de 400 a 1.000 € y hasta 3 en los de más de 1.000 €. Por debajo de 400 €, un solo pago. Lo dejamos por escrito en la propuesta. Mis precios no llevan IVA y no hay costes ocultos: lo que no está en la propuesta, no se cobra.",
  },
  {
    q: "¿Y si no me gusta el resultado?",
    a: "Trabajas con una vista previa real desde el principio y cada proyecto incluye rondas de ajustes. Así las sorpresas se ven pronto, cuando todavía son baratas de corregir.",
  },
  {
    q: "¿Eres una agencia o una persona?",
    a: "Soy Alex y AstroNexo Studio es mi estudio, con base en Oporto. Diseño y programo yo mismo cada proyecto, así que hablas directamente con quien lo construye, sin comerciales ni intermediarios. Si algún proyecto necesitara a alguien más, te lo digo antes y por escrito.",
  },
  {
    q: "¿La web y el código son míos?",
    a: "Sí. Dominio, código y accesos quedan a tu nombre. Puedes seguir conmigo o llevártelo a otro proveedor cuando quieras. Sin permanencias.",
  },
  {
    q: "No tengo claro el diseño. ¿Me ayudas?",
    a: "Sí, el diseño es parte de mi trabajo. Puedes mandarme webs que te gusten como inspiración, contarme más o menos cómo lo imaginas o dejarlo en mis manos. Te enseño una primera dirección visual y la ajustamos juntos antes de construir.",
  },
  {
    q: "¿Y si te pasa algo o dejas de estar disponible?",
    a: "El dominio, el código y los accesos están a tu nombre desde el primer día, y te entrego documentación de cómo está hecho. Si yo no pudiera seguir, cualquier otro profesional puede continuar sin empezar de cero. No dependes de mí.",
  },
  {
    q: "Ya tengo web en WordPress o Wix. ¿Me sirve?",
    a: "Sí. Puedo mejorar lo que tienes, conectarle automatizaciones o migrarla a algo más rápido si te compensa. Te digo con honestidad cuál de las tres opciones te conviene.",
  },
  {
    q: "¿Trabajas fuera de Portugal?",
    a: "Sí. Trabajo en remoto con clientes de Portugal, España y otros países, en español, portugués o inglés. Las reuniones son por videollamada o por WhatsApp, como prefieras.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "Te enseño a usarlo y te dejo documentación. Si quieres que me encargue de actualizaciones, copias de seguridad y mejoras, hay un plan mensual opcional. Si no, no pagas nada más.",
  },
];

export function serviceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function caseBySlug(slug: string) {
  return CASES.find((c) => c.slug === slug);
}
