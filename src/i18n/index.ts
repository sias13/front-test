import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      app: {
        title: 'My Application',
        menu: 'Menu',
        home: 'Home',
        about: 'About',
        language: 'Language',
      },
      landing: {
        welcome: 'Welcome',
        subtitle: 'Welcome to our application. Navigate using the menu on the left.',
        getStarted: 'Get Started',
        description: 'This is a modern web application built with internationalization support, RESTful API integration, and a responsive design.',
      },
      about: {
        title: 'About',
        description: 'This application demonstrates a frontend skeleton with the following features:',
        features: [
          'Internationalization (i18n) support',
          'RESTful API connection layer',
          'Hidden sidebar navigation',
          'Copyright footer on all pages',
          'Material Design UI components',
        ],
        version: 'Version',
        builtWith: 'Built with React, Material UI, and i18next',
      },
      footer: {
        copyright: '© {{year}} My Application. All rights reserved.',
      },
      api: {
        connected: 'API Connected',
        disconnected: 'API Disconnected',
        baseUrl: 'Base URL',
      },
    },
  },
  it: {
    translation: {
      app: {
        title: 'La Mia Applicazione',
        menu: 'Menu',
        home: 'Home',
        about: 'Informazioni',
        language: 'Lingua',
      },
      landing: {
        welcome: 'Benvenuto',
        subtitle: 'Benvenuto nella nostra applicazione. Naviga usando il menu a sinistra.',
        getStarted: 'Inizia',
        description: "Questa è un'applicazione web moderna con supporto per l'internazionalizzazione, integrazione API RESTful e un design responsive.",
      },
      about: {
        title: 'Informazioni',
        description: "Questa applicazione dimostra uno scheletro frontend con le seguenti funzionalità:",
        features: [
          'Supporto internazionalizzazione (i18n)',
          'Layer di connessione API RESTful',
          'Navigazione con barra laterale nascosta',
          'Footer con copyright su tutte le pagine',
          'Componenti UI Material Design',
        ],
        version: 'Versione',
        builtWith: 'Realizzato con React, Material UI e i18next',
      },
      footer: {
        copyright: '© {{year}} La Mia Applicazione. Tutti i diritti riservati.',
      },
      api: {
        connected: 'API Connessa',
        disconnected: 'API Disconnessa',
        baseUrl: 'URL Base',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'it',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
