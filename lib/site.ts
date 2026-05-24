/**
 * Datos del estudio en un solo sitio. Cambia el número y el mensaje aquí
 * y se propaga a todos los CTAs de WhatsApp de la web.
 */
export const SITE = {
  name: "AstroNexo Studio",
  // Sustituye por tu número real en formato internacional sin "+" ni espacios.
  whatsappNumber: "351931056365",
  whatsappMessage:
    "Hola AstroNexo. Quiero una auditoría gratuita de mi presencia digital. Mi Instagram/web es: ",
  email: "hola@astronexostudio.com",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;
