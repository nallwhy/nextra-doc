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
  ],
  useNextSeoProps: () => {
    return {
      titleTemplate: '%s - Typed',
    }
  },
  // head: () => {
  //   const { asPath } = useRouter()
  //   const { frontMatter } = useConfig()

  //   const description = frontMatter.description || 'The document site of Typed'
    
  //   return <>
  //     <meta name="description" content={description} />
  //     <meta property="og:title" content={frontMatter.title || 'Typed'} />
  //     <meta property="og:description" content={description} />
  //   </>
  // },
}

export default config
