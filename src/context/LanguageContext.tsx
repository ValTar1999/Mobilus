import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import translations from "../data/i18n";

type Language = "ro" | "ru";

type Translations = {
  [lang in Language]: {
    [section: string]: Record<string, string | string[]> | string | string[];
  };
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, subkey?: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ro");

  const t = (key: string, subkey?: string): string | string[] => {
    const dict = (translations as Translations)[language];
    const section = dict[key];
    if (subkey && typeof section === 'object' && !Array.isArray(section)) {
      return section[subkey] || key;
    }
    if (typeof section === 'string' || Array.isArray(section)) {
      return section;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}; 