/**
 * Páginas por tipo de negocio (/soluciones/[slug]). Cada una responde a una
 * búsqueda concreta ("página web para clínicas"...). Son propuestas de lo que
 * Alex construiría: los clientes reales están en CASES. Precios coherentes con
 * PACKS y SERVICES; nada de cifras de resultados que no existan.
 */

export type Solution = {
  slug: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  price: string;
  priceNote: string;
  pains: string[];
  build: { title: string; text: string }[];
  example: string;
  services: string[];
  cases: string[];
  faq: { q: string; a: string }[];
  message: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "pagina-web-para-clinicas",
    short: "Clínicas y consultas",
    seoTitle: "Página web para clínicas y consultas con citas online",
    seoDescription:
      "Web para clínicas dentales, de fisioterapia, estética o psicología con reserva de citas y un WhatsApp que responde y agenda solo. Desde 250 €, precio cerrado.",
    h1: "Página web para clínicas y consultas, con citas que se reservan solas",
    intro:
      "Si en tu clínica el teléfono suena todo el día para preguntar horarios, precios o si queda hueco el jueves, ese tiempo sale de atender pacientes. Te hago una web clara y un WhatsApp que contesta esas preguntas y deja la cita en tu agenda.",
    price: "Desde 250 €",
    priceNote: "WhatsApp con IA desde 250 €. Web con citas y WhatsApp juntos, en el Sistema completo desde 500 €.",
    pains: [
      "Recepción pasa media mañana al teléfono con las mismas cinco preguntas.",
      "Los pacientes escriben por WhatsApp fuera de horario y nadie contesta hasta el día siguiente.",
      "Se olvidan de la cita y el hueco se pierde.",
      "La web la hizo alguien hace años y no se ve bien en el móvil.",
    ],
    build: [
      { title: "Web de la clínica", text: "Tratamientos, equipo, precios orientativos y cómo llegar, pensada primero para el móvil." },
      { title: "Citas online", text: "El paciente elige tratamiento y hueco libre. La cita entra en tu Google Calendar o en la agenda que ya uses, si se puede conectar." },
      { title: "WhatsApp que responde", text: "Un asistente con la información real de tu clínica contesta horarios, precios y preparación, y propone cita." },
      { title: "Paso a una persona", text: "Si la pregunta es delicada o clínica, el asistente no improvisa: avisa a recepción con un resumen de la conversación." },
      { title: "Recordatorios", text: "Aviso antes de la cita para que el hueco no se pierda." },
      { title: "Ficha de Google Maps", text: "Categorías, servicios, horarios y fotos revisados para que te encuentren en tu zona." },
    ],
    example:
      "Hola Alex, tengo una clínica dental en Oporto con dos sillones. Contestamos el WhatsApp a mano y perdemos citas. Esta es nuestra web: …",
    services: ["whatsapp-e-inteligencia-artificial", "diseno-web", "seo-tecnico-y-local"],
    cases: ["circulo-consciente"],
    faq: [
      { q: "¿El asistente puede dar consejos médicos?", a: "No. Lo configuro para que responda solo lo que tú le das (horarios, tratamientos, precios, preparación) y pase a una persona cualquier consulta clínica." },
      { q: "¿Se conecta con mi programa de gestión de la clínica?", a: "Depende del programa. Si tiene forma de conectarse, sí; si no, la cita entra en Google Calendar y recepción la ve al momento. Te lo digo en el diagnóstico antes de presupuestar." },
      { q: "¿Qué pasa con los datos de los pacientes?", a: "Se guarda solo lo necesario para la cita y se informa al paciente con una política de privacidad clara. Si tratas datos de salud, lo revisamos juntos antes de empezar." },
      { q: "¿Cuánto tarda?", a: "Una web con citas y WhatsApp suele estar en dos a cuatro semanas, según lo rápido que tengamos textos, fotos y respuestas." },
    ],
    message: "Hola Alex, tengo una clínica o consulta y quiero menos llamadas y más citas. Mi negocio es: ",
  },
  {
    slug: "pagina-web-para-restaurantes",
    short: "Restaurantes y bares",
    seoTitle: "Página web para restaurantes y bares con carta digital y reservas",
    seoDescription:
      "Web para restaurantes con carta digital por QR, reservas sin llamar y ficha de Google Maps cuidada. Desde 150 €, sin cuota mensual obligatoria.",
    h1: "Página web para restaurantes y bares: carta, reservas y Google Maps",
    intro:
      "La mayoría de la gente decide dónde comer mirando el móvil: Google Maps, la carta y si se puede reservar. Te hago una web rápida con tu carta siempre actualizada, reservas sin llamar y tu ficha de Google en orden.",
    price: "Desde 150 €",
    priceNote: "Web con carta desde 150 €. Reservas y WhatsApp con IA suben el precio; te lo cierro por escrito en el diagnóstico.",
    pains: [
      "La carta en PDF no se lee en el móvil y está desactualizada.",
      "Cada cambio de precio es pedir favores o reimprimir.",
      "En hora punta nadie puede coger el teléfono para reservas.",
      "En Google Maps salen fotos viejas y un horario que ya no es.",
    ],
    build: [
      { title: "Carta digital con QR", text: "Platos, alérgenos y precios que cambias tú en un minuto. El mismo QR sirve siempre." },
      { title: "Reservas sin llamar", text: "Formulario o WhatsApp con día, hora y personas, con aviso al momento." },
      { title: "Web del local", text: "Fotos, ambiente, cómo llegar y horario, rápida en el móvil." },
      { title: "Ficha de Google Maps", text: "Categorías, horario, carta enlazada y fotos actuales para aparecer cuando buscan dónde comer cerca." },
      { title: "Varios idiomas", text: "Carta en español, portugués o inglés si recibes turistas." },
      { title: "Pedidos para llevar", text: "Si te interesa, pedido montado desde la carta que llega por WhatsApp listo para preparar." },
    ],
    example: "Hola Alex, tenemos un bar de tapas en Vigo. La carta es un PDF y las reservas son por teléfono. Este es nuestro Instagram: …",
    services: ["diseno-web", "seo-tecnico-y-local", "whatsapp-e-inteligencia-artificial"],
    cases: ["mundo-de-papel"],
    faq: [
      { q: "¿Puedo cambiar la carta yo?", a: "Sí. Te dejo un panel sencillo para cambiar platos y precios sin tocar código, y te enseño a usarlo." },
      { q: "¿Pago una comisión por reserva?", a: "No. Las reservas llegan directamente a ti. Solo pagas el desarrollo y, si lo quieres, el mantenimiento." },
      { q: "¿Sirve para varios locales?", a: "Sí. Cada local puede tener su carta, horario y reservas dentro de la misma web." },
      { q: "¿Cuánto tarda?", a: "Una web con carta digital puede estar en pocos días si tienes la carta y fotos. Con reservas y varios idiomas, una a tres semanas." },
    ],
    message: "Hola Alex, tengo un restaurante o bar y me interesa la carta digital y las reservas. Mi negocio es: ",
  },
  {
    slug: "pagina-web-para-autonomos",
    short: "Autónomos, coaches y terapeutas",
    seoTitle: "Página web para autónomos, coaches y terapeutas con reservas",
    seoDescription:
      "Web profesional para autónomos, coaches, terapeutas y formadores con reserva y pago de sesiones. Desde 150 €, sin cuota mensual obligatoria y fácil de editar.",
    h1: "Página web para autónomos, coaches y terapeutas, con reserva y pago de sesiones",
    intro:
      "Instagram te da visibilidad, pero la gente que está a punto de contratarte busca tu nombre en Google y quiere ver qué haces, cuánto cuesta y cómo reservar. Te hago una web que explica tu trabajo con tus palabras y deja reservar y pagar sin mensajes de ida y vuelta.",
    price: "Desde 150 €",
    priceNote: "Web de lanzamiento desde 150 €. Con reservas y pago online sube; te digo el precio cerrado en 24 a 48 horas.",
    pains: [
      "Cada reserva son diez mensajes para cuadrar día y hora.",
      "Te pagan por transferencia y tienes que perseguir los pagos.",
      "Tu perfil de Instagram no aparece cuando te buscan en Google.",
      "No sabes si podrás cambiar la web tú sin pagar a alguien cada vez.",
    ],
    build: [
      { title: "Web con tu voz", text: "Quién eres, a quién ayudas, cómo trabajas y tus precios, escrito para que tu cliente se reconozca." },
      { title: "Reserva de sesiones", text: "Tu cliente elige hueco en tu calendario y le llega la confirmación." },
      { title: "Pago online", text: "Pago con tarjeta al reservar o bonos de varias sesiones, con Stripe." },
      { title: "Fácil de editar", text: "Cambias textos, precios y fotos tú, sin tocar código." },
      { title: "Google", text: "Indexada y preparada para que te encuentren por tu nombre y tu especialidad." },
      { title: "Sin cuota obligatoria", text: "La web es tuya. Solo pagas dominio y alojamiento a su proveedor." },
    ],
    example: "Hola Alex, soy terapeuta en Sevilla. Trabajo con Instagram y las reservas son por mensajes. Quiero una web con reservas y pago. Mi Instagram es: …",
    services: ["diseno-web", "aplicaciones-web", "automatizacion-de-procesos"],
    cases: ["circulo-consciente"],
    faq: [
      { q: "¿Puedo tener la web por menos de 400 €?", a: "Una web de presentación, sí, desde 150 €. Con reservas y pagos depende de cómo trabajes; te doy el precio cerrado antes de empezar y, según el importe, se puede pagar en dos cuotas." },
      { q: "¿Hay cuotas mensuales?", a: "No conmigo. El dominio y el alojamiento se pagan a su proveedor y te digo cuánto antes de empezar. El mantenimiento mensual es opcional." },
      { q: "¿Puedo vender bonos o cursos?", a: "Sí. Bonos de sesiones, talleres o cursos online con pago por Stripe y acceso para tus alumnos." },
      { q: "¿Me ayudas con los textos?", a: "Sí. Te hago preguntas, escribo los textos con tu forma de hablar y tú los corriges." },
    ],
    message: "Hola Alex, soy autónomo/a y quiero una web con reservas y pago de sesiones. Mi actividad es: ",
  },
  {
    slug: "pagina-web-para-inmobiliarias",
    short: "Inmobiliarias",
    seoTitle: "Página web para inmobiliarias con captación de contactos",
    seoDescription:
      "Web para inmobiliarias en España y Portugal con fichas de inmuebles, filtros y captación de contactos que avisa por WhatsApp. Desde 500 €, precio cerrado.",
    h1: "Página web para inmobiliarias que convierte visitas en contactos",
    intro:
      "Los portales te dan visitas, pero los contactos se reparten con todas las agencias. Una web propia con tus inmuebles bien presentados y un sistema que recoge cada contacto y te avisa al momento te da clientes que son solo tuyos.",
    price: "Desde 500 €",
    priceNote: "Sistema completo desde 500 €. Conectar con tu programa de gestión o un portal propio grande se presupuesta aparte.",
    pains: [
      "Los contactos de los portales llegan a la vez a tres agencias.",
      "Las fichas de tu web están desactualizadas respecto a los portales.",
      "Un interesado escribe un sábado y le contestas el lunes.",
      "No sabes de qué inmueble vino cada contacto.",
    ],
    build: [
      { title: "Fichas de inmuebles", text: "Fotos grandes, características, mapa y precio, con filtros por zona, tipo y presupuesto." },
      { title: "Captación de contactos", text: "Cada formulario o WhatsApp llega con el inmueble del que viene, sin perder ninguno." },
      { title: "Aviso al momento", text: "Te llega el contacto al WhatsApp y una respuesta automática atiende fuera de horario." },
      { title: "Panel de contactos", text: "Un CRM sencillo con el estado de cada interesado y recordatorios de seguimiento." },
      { title: "Español y portugués", text: "Web bilingüe si trabajas con compradores de los dos lados de la frontera." },
      { title: "SEO por zona", text: "Páginas por zona y tipo de inmueble para aparecer en búsquedas locales." },
    ],
    example: "Olá Alex, tenho uma imobiliária em Lisboa com 40 imóveis. Os contactos chegam pelos portais e quero uma web própria. O nosso site é: …",
    services: ["crm-y-paneles", "diseno-web", "whatsapp-e-inteligencia-artificial"],
    cases: ["banqa"],
    faq: [
      { q: "¿Tengo que subir los inmuebles dos veces?", a: "No debería. Si tu programa de gestión o portal permite exportar los inmuebles, se sincronizan. Si no, te dejo un panel sencillo para publicarlos." },
      { q: "¿La web está en portugués?", a: "Puede estar en español y portugués, y en inglés si tienes compradores extranjeros." },
      { q: "¿Es un portal tipo Idealista?", a: "Es la web de tu agencia con tus inmuebles y tu marca. Un portal con muchas agencias es un proyecto a medida que se presupuesta aparte." },
      { q: "¿Cuánto tarda?", a: "Una web con fichas y captación suele estar en tres a cinco semanas, según el número de inmuebles y si hay que conectar con tu programa." },
    ],
    message: "Olá Alex, tenho uma imobiliária e quero uma web com imóveis e captação de contactos. A minha empresa é: ",
  },
  {
    slug: "automatizacion-para-pymes",
    short: "Pymes con pedidos y Excel",
    seoTitle: "Automatizar pedidos, Excel y facturas en pymes",
    seoDescription:
      "Automatización de pedidos, presupuestos, facturas y Excel para pymes y autónomos: menos copiar y pegar, avisos de cobro y exportación para la gestoría. Desde 90 €.",
    h1: "Automatización para pymes: pedidos, Excel y facturas que se hacen solos",
    intro:
      "Si alguien en tu empresa pasa horas copiando pedidos de un correo a un Excel, preparando presupuestos a mano o mirando qué facturas están sin cobrar, eso se puede automatizar sin cambiar tu forma de trabajar de golpe.",
    price: "Desde 90 €",
    priceNote: "Facturas automáticas desde 90 €. Pedidos y presupuestos dependen de cuántos pasos y programas haya que conectar.",
    pains: [
      "Los pedidos llegan por correo, WhatsApp y teléfono y se copian a mano.",
      "El Excel de pedidos lo entiende una sola persona.",
      "Las facturas vencidas se descubren tarde.",
      "La gestoría pide cada mes los mismos datos en otro formato.",
    ],
    build: [
      { title: "Pedidos en un sitio", text: "Los pedidos de correo o formulario entran solos en una tabla o panel, sin copiar." },
      { title: "Presupuestos automáticos", text: "Rellenas cuatro datos y sale el presupuesto en PDF con tus precios." },
      { title: "Facturas y cobros", text: "Panel de cobrado y pendiente con aviso antes de cada vencimiento." },
      { title: "Excel ordenado", text: "Si el Excel se queda, lo dejamos limpio y conectado; si conviene, lo pasamos a un panel." },
      { title: "Exportación para la gestoría", text: "El archivo que te piden, en su formato, con un clic." },
      { title: "Pasos pequeños", text: "Empezamos por el proceso que más horas te quita y seguimos solo si compensa." },
    ],
    example: "Hola Alex, somos una distribuidora con 12 personas. Los pedidos llegan por correo y se pasan a un Excel a mano. Te mando un ejemplo de pedido: …",
    services: ["automatizacion-de-procesos", "crm-y-paneles", "aplicaciones-web"],
    cases: ["circulo-consciente"],
    faq: [
      { q: "¿Tengo que dejar de usar Excel?", a: "No. Muchas veces lo mejor es conectar el Excel que ya usáis. Solo propongo cambiarlo si os va a ahorrar trabajo de verdad." },
      { q: "¿Funciona con mi programa de facturación?", a: "Si el programa permite conectarse o exportar datos, sí. Lo compruebo en el diagnóstico antes de darte precio." },
      { q: "¿Me das factura?", a: "Sí. Facturo como Alexander Ruiz, NIF 320 675 670, y mis precios no llevan IVA." },
      { q: "¿Qué pasa si algo falla?", a: "Te dejo la automatización documentada y a tu nombre. Si falla, lo reviso; con el mantenimiento opcional, lo vigilo yo antes de que lo notes." },
    ],
    message: "Hola Alex, en mi empresa llevamos pedidos o facturas en Excel y quiero automatizarlo. Mi empresa es: ",
  },
  {
    slug: "crear-una-app",
    short: "Tienes una idea de app",
    seoTitle: "Crear una app: de la idea a la primera versión",
    seoDescription:
      "Desarrollo de apps y aplicaciones web para emprendedores: te ayudo a recortar la idea a una primera versión útil en web, iOS o Android. Desde 1.500 €, precio cerrado.",
    h1: "Crear una app: de tu idea a una primera versión que la gente pueda usar",
    intro:
      "Una idea de app suele empezar con veinte funciones. Te ayudo a quedarte con las tres que hacen falta para que alguien la use y pague, y construyo esa primera versión con precio cerrado, para que pruebes la idea sin gastar todos tus ahorros.",
    price: "Desde 1.500 €",
    priceNote: "Primera versión desde 1.500 €, en hasta 3 cuotas. Se amplía después, con lo que aprendas de los primeros usuarios.",
    pains: [
      "Te han pedido 10.000 € por la app entera y no sabes si la idea funciona.",
      "No sabes si hacerla web, iOS o Android.",
      "Te da miedo pagar y quedarte sin el código.",
      "No sabes por dónde empezar ni qué es imprescindible.",
    ],
    build: [
      { title: "Recorte de la idea", text: "Una sesión para decidir qué entra en la primera versión y qué espera." },
      { title: "Diseño de pantallas", text: "Las pantallas principales diseñadas antes de programar, para que veas la app antes de pagarla entera." },
      { title: "Web, iOS o Android", text: "Muchas veces una aplicación web que se instala en el móvil basta para empezar; si necesitas tienda de apps, también." },
      { title: "Usuarios y pagos", text: "Registro, perfiles y cobro con Stripe si tu idea lo necesita." },
      { title: "Panel para ti", text: "Para ver usuarios, reservas o pedidos sin tocar la base de datos." },
      { title: "El código es tuyo", text: "Repositorio y accesos a tu nombre desde el primer día." },
    ],
    example: "Hola Alex, tengo una idea de app para conectar entrenadores personales con clientes. Tengo unos 2.000 € para empezar. La idea es: …",
    services: ["aplicaciones-web", "apps-moviles-y-escritorio", "juegos-y-experiencias-interactivas"],
    cases: ["circulo-consciente"],
    faq: [
      { q: "¿Cuánto cuesta una app?", a: "La primera versión empieza en 1.500 €. El precio depende de cuántas pantallas, tipos de usuario y pagos tenga. Te lo cierro por escrito después de recortar la idea contigo." },
      { q: "¿Cuánto tarda?", a: "Una primera versión con usuarios, pagos y panel suele estar en torno a un mes si la comunicación es fluida." },
      { q: "¿Firmas un acuerdo de confidencialidad?", a: "Sí, si lo necesitas antes de contarme la idea." },
      { q: "¿Me ayudas a publicarla en las tiendas?", a: "Sí, te acompaño en la publicación en App Store y Google Play. Las cuentas de desarrollador están a tu nombre." },
    ],
    message: "Hola Alex, tengo una idea de app y quiero saber precio y plazo. La idea es: ",
  },
];

export function solutionBySlug(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
