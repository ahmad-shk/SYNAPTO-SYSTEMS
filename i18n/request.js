import React from 'react';
import { getRequestConfig } from 'next-intl/server';
import { routing } from '../navigation';

export default getRequestConfig(async ({ requestLocale }) => {
  // Extract and await the correct locale passed by next-intl
  let locale = await requestLocale;

  // Validate the locale or fallback to the default locale from routing config
  const activeLocale = (locale && routing.locales.includes(locale)) ? locale : routing.defaultLocale;

  return {
    locale: activeLocale,
    messages: (await import(`./${activeLocale}.json`)).default,
    defaultTranslationValues: {
      br: "\n",
      span: (chunks) => React.createElement('span', null, chunks),
      span1: (chunks) => React.createElement('span', { className: "theme-bg-2" }, chunks),
      b: (chunks) => React.createElement('b', null, chunks),
      i: (chunks) => React.createElement('i', null, chunks),
      strong: (chunks) => React.createElement('strong', null, chunks),
    },
    timeZone: 'Europe/Vienna'
  };
});
