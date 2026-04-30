// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = '澜心医疗科技｜智慧医院与医疗数字化服务商'
export const SITE_DESCRIPTION =
  '澜心医疗科技提供智慧医院、区域医疗协同、数据治理和患者服务数字化解决方案。'

export const GITHUB_URL = 'https://example.com'
export const SITE_URL = 'https://example.com/'

export const SITE_METADATA = {
  title: {
    default: '澜心医疗科技｜智慧医院与医疗数字化服务商'
  },
  description:
    '澜心医疗科技提供智慧医院、区域医疗协同、数据治理和患者服务数字化解决方案。',
  keywords: [
    '智慧医院',
    '医疗数字化',
    '区域医疗协同',
    '患者服务',
    '医疗数据治理',
    '医院门户',
    '医疗信息化'
  ],
  authors: [{ name: '澜心医疗科技', url: SITE_URL }],
  creator: '澜心医疗科技',
  publisher: '澜心医疗科技',
  robots: {
    index: true,
    follow: true
  },
  language: 'zh-CN',
  locale: 'zh_CN',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '澜心医疗科技',
    title: '澜心医疗科技｜智慧医院与医疗数字化服务商',
    description:
      '澜心医疗科技提供智慧医院、区域医疗协同、数据治理和患者服务数字化解决方案。',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '澜心医疗科技企业门户',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lanxin-health',
    creator: '@lanxin-health',
    title: '澜心医疗科技｜智慧医院与医疗数字化服务商',
    description:
      '澜心医疗科技提供智慧医院、区域医疗协同、数据治理和患者服务数字化解决方案。',
    images: ['/images/og-image.png']
  },
  verification: {
    google: '', // Add your Google verification code
    yandex: '', // Add your Yandex verification code
    bing: '' // Add your Bing verification code
  }
}

// Social media links
export const SOCIAL_LINKS = {
  github: GITHUB_URL,
  twitter: '#',
  linkedin: '#',
  discord: '#'
}

// Company information for structured data
export const COMPANY_INFO = {
  name: '澜心医疗科技',
  legalName: '澜心医疗科技有限公司',
  url: SITE_URL,
  logo: `/images/site-logo.png`,
  foundingDate: '2018',
  address: {
    streetAddress: '医疗科技园区',
    addressLocality: '上海',
    addressRegion: '上海',
    postalCode: '200000',
    addressCountry: 'CN'
  },
  contactPoint: {
    telephone: '400-800-2026',
    contactType: 'business consulting',
    email: 'contact@example.com'
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
