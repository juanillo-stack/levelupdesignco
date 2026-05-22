import { useEffect } from "react";

export const SITE_TITLE = "LevelUp Design Co.";
export const SITE_DESCRIPTION =
  "LevelUp Design Co. | Diseño web y branding en Málaga, SEO y automatización para negocios que necesitan una presencia digital profesional.";
export const SITE_KEYWORDS =
  "LevelUp Design Co., diseño web y branding en Málaga, SEO, automatización, diseño web Málaga, branding Málaga";

interface SEOProps {
  title?: string;
  description?: string;
}

function upsertMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    const pageTitle = title ?? SITE_TITLE;
    const pageDescription = description ?? SITE_DESCRIPTION;

    document.title = SITE_TITLE;
    upsertMeta('meta[name="description"]', "name", "description", pageDescription);
    upsertMeta('meta[name="keywords"]', "name", "keywords", SITE_KEYWORDS);
    upsertMeta('meta[property="og:title"]', "property", "og:title", pageTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", pageDescription);
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_TITLE);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", pageTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", pageDescription);
  }, [description, title]);

  return null;
}
