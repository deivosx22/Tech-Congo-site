import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale || 'en');

  useEffect(() => {
    setLocale(router.locale || 'en');
  }, [router.locale]);

  const changeLanguage = (newLocale) => {
    const path = router.asPath;
    router.push(path, path, { locale: newLocale });
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
