/**
 * Guías (/guias/[slug]) escritas para las dudas que la gente busca en Google
 * antes de contratar. Solo hechos que Alex puede sostener: sus propios precios
 * y forma de trabajar, nada de estadísticas sin fuente.
 */

export type GuideSection = { h2: string; body: string[]; list?: string[] };

export type Guide = {
  slug: string;
  short: string;
  title: string;
  seoTitle: string;
  description: string;
  published: string;
  updated: string;
  minutes: number;
  intro: string;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
  services: string[];
  solutions: string[];
  message: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "cuanto-cuesta-una-pagina-web",
    short: "Cuánto cuesta una página web",
    title: "Cuánto cuesta una página web: precios reales y qué los hace subir",
    seoTitle: "Cuánto cuesta una página web en 2026: precios reales",
    description:
      "Precios reales de una página web para negocios: desde 150 € una web de lanzamiento, qué hace subir el precio, qué pagas aparte (dominio, alojamiento) y qué preguntar antes de contratar.",
    published: "2026-10-23",
    updated: "2026-10-23",
    minutes: 6,
    intro:
      "Si buscas cuánto cuesta una web, encontrarás de todo: desde 0 € con una plantilla hasta presupuestos de varios miles. Aquí tienes mis precios reales, lo que hace que suban y lo que se paga aparte, para que puedas comparar cualquier presupuesto, sea mío o de otro.",
    sections: [
      {
        h2: "La respuesta corta: mis precios",
        body: [
          "Son precios de partida. El precio final te lo doy cerrado y por escrito antes de empezar, después de ver tu caso. Mis precios no llevan IVA.",
        ],
        list: [
          "Web de lanzamiento (una página bien hecha, rápida y con contacto por WhatsApp): desde 150 €.",
          "Web completa con varias páginas, WhatsApp con IA, SEO local y panel de seguimiento: desde 500 €.",
          "Tienda online o web con reservas y pagos: depende de cuántos productos, servicios y conexiones haya.",
          "Aplicación web a medida, con usuarios, pagos y panel: desde 1.500 €.",
        ],
      },
      {
        h2: "Qué hace subir el precio",
        body: [
          "El número que más pesa no es el diseño, es lo que la web tiene que hacer. Una página que explica tu negocio y lleva a WhatsApp es sencilla. Una que cobra, reserva o se conecta con tu agenda tiene más piezas que probar.",
        ],
        list: [
          "Número de páginas y de idiomas.",
          "Reservas, pagos online o área de clientes.",
          "Conexiones con otros programas (agenda, facturación, CRM).",
          "Textos y fotos: si los tienes listos o hay que crearlos.",
          "Prisa: una fecha de entrega muy ajustada obliga a dejar otros proyectos.",
        ],
      },
      {
        h2: "Lo que se paga aparte",
        body: [
          "Hay dos costes que no son del desarrollador y conviene conocer antes. El dominio (tunegocio.com o .es) se paga cada año al registrador y suele costar entre 10 y 20 €. El alojamiento depende de la web: una web sencilla puede alojarse gratis o por pocos euros al mes; una aplicación con base de datos y mucho uso cuesta más.",
          "Conmigo, el dominio y el alojamiento quedan a tu nombre y los pagas directamente a su proveedor. Te digo cuánto antes de empezar.",
        ],
      },
      {
        h2: "¿Hay cuota mensual?",
        body: [
          "No es obligatoria. Muchas agencias cobran una cuota mensual que incluye alojamiento, cambios y mantenimiento, y si dejas de pagar te quedas sin web. Yo cobro el desarrollo una vez. Si quieres que me encargue de actualizaciones, copias de seguridad y mejoras, hay un plan mensual opcional; si no, no pagas nada más.",
        ],
      },
      {
        h2: "Plantilla, WordPress o web a medida",
        body: [
          "Una plantilla de Wix o Squarespace es la opción más barata para empezar y está bien si solo necesitas presencia. WordPress da más libertad, pero hay que mantener actualizados los plugins. Una web a medida cuesta algo más al principio, carga más rápido y hace exactamente lo que tu negocio necesita, sin pagar por funciones que no usas.",
          "Si ya tienes una web en WordPress o Wix, no siempre hay que tirarla: a veces basta con mejorarla o conectarle una automatización. Te digo cuál de las opciones te compensa.",
        ],
      },
      {
        h2: "Cómo se paga",
        body: [
          "Según el proyecto, puedes pagarlo de una vez o fraccionarlo: un solo pago por debajo de 400 €, hasta 2 pagos entre 400 y 1.000 € y hasta 3 pagos por encima de 1.000 €. Lo dejamos por escrito en la propuesta.",
        ],
      },
      {
        h2: "Cinco preguntas antes de contratar a cualquiera",
        body: ["Sirven para comparar presupuestos, también el mío."],
        list: [
          "¿El dominio, el código y los accesos quedan a mi nombre?",
          "¿Qué pasa si dejo de pagar la cuota mensual?",
          "¿Cuántas rondas de cambios incluye el precio?",
          "¿Puedo cambiar textos y fotos yo sin pagar cada vez?",
          "¿Puedo ver webs que tengas en producción y hablar con esos clientes?",
        ],
      },
    ],
    faq: [
      { q: "¿Se puede tener una web profesional por menos de 200 €?", a: "Sí, una web de una página con tu información, contacto por WhatsApp y SEO básico. Mi web de lanzamiento empieza en 150 €." },
      { q: "¿Cuánto tarda en estar lista?", a: "Una web de lanzamiento puede estar en pocos días si tienes textos y fotos. Un proyecto completo con pagos, panel e idiomas, en torno a un mes si la comunicación es fluida." },
      { q: "¿El precio incluye IVA?", a: "Mis precios no llevan IVA. Facturo como Alexander Ruiz, NIF 320 675 670." },
      { q: "¿Y si después quiero añadir cosas?", a: "Se presupuesta cada ampliación aparte, con precio cerrado. La web está hecha para crecer sin rehacerla." },
    ],
    services: ["diseno-web", "seo-tecnico-y-local", "aplicaciones-web"],
    solutions: ["pagina-web-para-autonomos", "pagina-web-para-restaurantes", "pagina-web-para-clinicas"],
    message: "Hola Alex, he leído tu guía de precios y quiero saber cuánto costaría mi web. Mi negocio es: ",
  },
  {
    slug: "automatizar-whatsapp-negocio",
    short: "Automatizar el WhatsApp de tu negocio",
    title: "Cómo automatizar el WhatsApp de tu negocio con IA sin perder el trato humano",
    seoTitle: "Automatizar WhatsApp en tu negocio con IA: guía práctica",
    description:
      "Qué se puede automatizar en el WhatsApp de un negocio, qué no debe hacer nunca un asistente con IA, la diferencia entre WhatsApp Business y la API, y cuánto cuesta. Desde 250 €.",
    published: "2026-10-23",
    updated: "2026-10-23",
    minutes: 7,
    intro:
      "Si tu negocio recibe cada día las mismas preguntas por WhatsApp (horario, precio, si hay hueco), una parte de ese trabajo se puede automatizar. La clave es elegir bien qué contesta el asistente y en qué momento pasa la conversación a una persona.",
    sections: [
      {
        h2: "Qué se puede automatizar",
        body: ["Lo que se repite y tiene una respuesta clara es lo primero que conviene automatizar."],
        list: [
          "Horarios, dirección, precios orientativos y preparación de una cita.",
          "Preguntar lo necesario para filtrar (qué necesita, cuándo, dónde) antes de que lo veas tú.",
          "Proponer huecos libres y dejar la cita en tu calendario.",
          "Recordar la cita el día antes.",
          "Responder fuera de horario con información útil en lugar de silencio.",
        ],
      },
      {
        h2: "Lo que un asistente no debe hacer",
        body: [
          "Un asistente mal configurado es peor que no tenerlo. Los que construyo siguen tres reglas: solo responden con la información que tú le das, no inventan precios ni plazos, y pasan a una persona cualquier tema delicado (una queja, una consulta médica, un presupuesto especial) con un resumen de lo hablado.",
          "El cliente debe saber que está hablando con un asistente y poder pedir una persona en cualquier momento.",
        ],
      },
      {
        h2: "WhatsApp Business o la API de WhatsApp",
        body: [
          "La aplicación gratuita WhatsApp Business permite mensajes de bienvenida, de ausencia y respuestas rápidas. Para muchos negocios pequeños es suficiente y conviene empezar por ahí.",
          "Para que un asistente con IA conteste y agende solo hace falta la plataforma oficial de WhatsApp para empresas (la API de Meta). Meta cobra por algunos mensajes que inicia la empresa, como campañas o recordatorios; responder a un cliente que te ha escrito, dentro de las 24 horas siguientes, no tiene coste de Meta. Te explico qué te tocaría pagar a ti según tu volumen antes de empezar.",
        ],
      },
      {
        h2: "Los pasos, en orden",
        body: [],
        list: [
          "Recoger las preguntas reales que recibes: con veinte o treinta conversaciones basta.",
          "Escribir las respuestas buenas, con tus precios y tu tono.",
          "Decidir qué pasa a una persona y cómo te avisa.",
          "Conectar la agenda si quieres que reserve.",
          "Probarlo con conversaciones de verdad antes de activarlo para todos.",
          "Revisar las primeras semanas qué preguntó la gente y ajustar.",
        ],
      },
      {
        h2: "Cuánto cuesta",
        body: [
          "El asistente de WhatsApp con IA empieza en 250 €. Sube con el número de servicios, de idiomas y las conexiones con tu agenda. Aparte están los costes de Meta y del modelo de IA, que dependen de cuántas conversaciones tengas; te doy una estimación antes de empezar.",
        ],
      },
    ],
    faq: [
      { q: "¿Mis clientes van a notar que es un bot?", a: "Sí, y deben saberlo. Un buen asistente lo dice desde el principio, contesta bien lo que sabe y ofrece pasar con una persona cuando hace falta." },
      { q: "¿Puedo seguir usando mi número de siempre?", a: "Normalmente sí, aunque hay que pasarlo a la plataforma de empresa de WhatsApp. Lo revisamos antes para no perder conversaciones." },
      { q: "¿Qué pasa si el asistente no sabe la respuesta?", a: "No improvisa: te avisa a ti o a tu equipo con un resumen y el cliente sabe que le contestará una persona." },
      { q: "¿Funciona en español y portugués?", a: "Sí. Puede responder en el idioma en que le escriban, con la información que tú le des en cada idioma." },
    ],
    services: ["whatsapp-e-inteligencia-artificial", "automatizacion-de-procesos"],
    solutions: ["pagina-web-para-clinicas", "pagina-web-para-inmobiliarias", "pagina-web-para-restaurantes"],
    message: "Hola Alex, he leído tu guía de WhatsApp y quiero automatizar el de mi negocio. Mi negocio es: ",
  },
  {
    slug: "pagina-web-o-instagram",
    short: "¿Web o solo Instagram?",
    title: "¿Necesito una página web si ya tengo Instagram?",
    seoTitle: "¿Necesito página web si ya tengo Instagram? Respuesta honesta",
    description:
      "Cuándo basta con Instagram y cuándo una página web te trae clientes que Instagram no: búsquedas en Google, reservas, pagos y confianza. Con precios desde 150 €.",
    published: "2026-10-23",
    updated: "2026-10-23",
    minutes: 5,
    intro:
      "Muchos negocios empiezan en Instagram y les va bien. La pregunta no es cuál es mejor, sino qué te falta: Instagram sirve para que te descubran y te sigan, y una web sirve para que te encuentre quien ya está buscando lo que haces.",
    sections: [
      {
        h2: "Cuándo te basta con Instagram",
        body: [],
        list: [
          "Vendes sobre todo a gente que ya te sigue.",
          "Tu trabajo se entiende con fotos y no necesitas explicar precios ni condiciones.",
          "Gestionas pocos pedidos o citas y no te importa cerrarlos por mensaje.",
        ],
      },
      {
        h2: "Cuándo te hace falta una web",
        body: ["Estas son las situaciones en las que veo que una web cambia algo de verdad."],
        list: [
          "La gente te busca en Google por lo que haces y tu zona, y no apareces.",
          "Repites a diario las mismas explicaciones de precios, plazos y cómo funciona.",
          "Quieres reservas o pagos sin diez mensajes de ida y vuelta.",
          "Trabajas con empresas o clientes que buscan tu nombre antes de contratarte.",
          "No quieres depender de una sola red: si cambia el algoritmo o te bloquean la cuenta, tu web sigue ahí.",
        ],
      },
      {
        h2: "Lo mejor: que trabajen juntas",
        body: [
          "No hay que elegir. Instagram trae a la gente y el enlace de tu perfil la lleva a una web que explica, reserva y cobra. Una web sencilla con tus servicios, precios y un botón de WhatsApp ya hace ese trabajo.",
        ],
      },
      {
        h2: "Cuánto cuesta dar el paso",
        body: [
          "Una web de lanzamiento empieza en 150 € y puede estar en pocos días si tienes textos y fotos. Sin cuota mensual obligatoria: solo pagas el dominio y el alojamiento a su proveedor. Si más adelante quieres reservas o pagos, se añaden sin rehacer la web.",
        ],
      },
    ],
    faq: [
      { q: "¿Puedo usar las fotos de mi Instagram en la web?", a: "Sí, si son tuyas. Las elegimos juntos y las optimizo para que carguen rápido." },
      { q: "¿Una web me trae clientes sola?", a: "Una web bien hecha te pone en Google y convierte mejor a quien llega, pero tarda semanas o meses en posicionar. Lo más rápido es enlazarla desde Instagram y tu ficha de Google Maps desde el primer día." },
      { q: "¿Y la ficha de Google Maps?", a: "Es gratuita y para un negocio local es de lo primero que hay que cuidar. La reviso y la enlazo con la web." },
    ],
    services: ["diseno-web", "seo-tecnico-y-local"],
    solutions: ["pagina-web-para-autonomos", "pagina-web-para-restaurantes"],
    message: "Hola Alex, tengo Instagram y estoy pensando en tener web. Mi perfil es: ",
  },
];

export function guideBySlug(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}
