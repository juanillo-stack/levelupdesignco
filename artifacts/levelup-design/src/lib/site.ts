export const site = {
  name: "LevelUp Design Co.",
  owner: "Juan Leiva",
  legalName: "Juan Leiva / LevelUp Design Co.",
  vat: "[NIF/CIF pendiente de completar]",
  fiscalAddress: "[Dirección fiscal pendiente de completar]",
  location: "Málaga, España",
  email: "juanleiva@levelupdesign.es",
  phoneDisplay: "606 899 991",
  phoneHref: "+34606899991",
  url: (import.meta.env.VITE_SITE_URL ?? "https://levelupsolutions.es").replace(
    /\/$/,
    "",
  ),
  defaultTitle:
    "LevelUp Design Co. | Diseño web, branding, SEO y automatización en Málaga",
  defaultDescription:
    "Estudio de diseño web, branding, SEO y automatización para negocios que quieren una presencia digital premium y más contactos por WhatsApp.",
  ogImage:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/G6nj9mdDesTN3r7B2Yg2ZkxIREg1/social-images/social-1778342331583-logo-gris-levelupdesign.webp",
};

const encodedPhone = site.phoneHref.replace(/^\+/, "");

export const whatsappLinks = {
  budget: `https://wa.me/${encodedPhone}?text=Hola%2C%20quiero%20solicitar%20presupuesto%20para%20mi%20proyecto%20digital.`,
  call: `https://wa.me/${encodedPhone}?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20llamada%20para%20hablar%20de%20mi%20proyecto.`,
  contact: `https://wa.me/${encodedPhone}?text=Hola%2C%20me%20gustar%C3%ADa%20contactar%20con%20LevelUp%20Design%20Co.`,
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/levelupdesignco",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/juanleiva.levelupdesign",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/LevelUpDesignCo",
  },
];

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalizedPath}`;
}

/** Base path del router (ej. "" en Vercel, "/levelupdesignco" en GitHub Pages). */
export const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Ruta interna respetando el base path de GitHub Pages / Vercel. */
export function appPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return routerBase ? `${routerBase}${normalized}` : normalized;
}

/** Ancla en la home (/#servicios) con base path correcto. */
export function homeSection(hash: string) {
  const id = hash.replace(/^#/, "");
  return routerBase ? `${routerBase}/#${id}` : `/#${id}`;
}
