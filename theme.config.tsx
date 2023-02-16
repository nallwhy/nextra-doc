import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="https://storage.googleapis.com/typed-assets-bucket-prd/landingpage/logos/fullTypedLogo.svg"/>,
  project: {
    link: 'https://github.com/nallwhy/nextra-doc',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/nallwhy/nextra-doc/tree/main',
  footer: {
    text: 'Nextra Docs Template',
  },
  i18n: [
    { locale: 'en', text: "English" },
    { locale: 'ko', text: "한글"}
  ]
}

export default config
