"use client";
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';

export default function LanguageProvider({ children, messages, locale }) {
  return (
    <NextIntlClientProvider 
      messages={messages} 
      locale={locale}
      defaultTranslationValues={{
        br: "\n",
        span: (chunks) => React.createElement('span', null, chunks),
        span1: (chunks) => React.createElement('span', { className: "theme-bg-2" }, chunks),
        b: (chunks) => React.createElement('b', null, chunks),
        i: (chunks) => React.createElement('i', null, chunks),
        strong: (chunks) => React.createElement('strong', null, chunks),
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}
