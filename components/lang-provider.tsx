"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dict, t as translate, type Lang, DEFAULT_LANG } from "@/lib/i18n";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Traduce una entrada del diccionario al idioma actual. */
  tr: (entry: { es: string; en: string }) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

function detectLang(): Lang {
  if (typeof navigator === "undefined") return DEFAULT_LANG;
  const saved = localStorage.getItem("astronexo-lang");
  if (saved === "es" || saved === "en") return saved;
  // Detección por navegador: inglés → en, resto → es
  const nav = navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("en") ? "en" : "es";
}

export function LangProvider({ children }: { children: ReactNode }) {
  // Arranca en ES (SSR), corrige en cliente tras detectar — evita hydration mismatch.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const detected = detectLang();
    setLangState(detected);
    document.documentElement.lang = detected;
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem("astronexo-lang", l);
    } catch {
      /* almacenamiento no disponible: no es crítico */
    }
  };

  const tr = (entry: { es: string; en: string }) => translate(entry, lang);

  return (
    <LangContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    // Fallback seguro si algún componente queda fuera del provider.
    return {
      lang: DEFAULT_LANG,
      setLang: () => {},
      tr: (entry) => entry[DEFAULT_LANG],
    };
  }
  return ctx;
}

export { dict };
