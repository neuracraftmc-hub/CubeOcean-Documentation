export const navigation = {
  en: [
    {
      title: 'Products & Services',
      items: [
        { label: 'Product', href: '/en/product' },
        { label: 'Feutures', href: '/en/feutures' },
        { label: 'Pricing', href: '/en/pricing' },
      ]
    },
    {
      title: 'Documentation',
      items: [
        { label: 'Getting Started', href: '/en/getting-started' },
        { label: 'Installation', href: '/en/installation' },
        { label: 'API Reference', href: '/en/api' },
        { label: 'Guides & Tutorials', href: '/en/guides' },
      ]
    },
    {
      title: 'About us',
      items: [
        { label: 'About', href: '/en/about' },
        { label: 'Blog', href: '/en/blog' },
        { label: 'Contact', href: '/en/contact' },
        { label: 'Careers', href: '/en/careers' },
      ]
    },
    {
      title: 'Support',
      items: [
        { label: 'Help Center', href: '/en/help-center' },
        { label: 'Community Forums', href: '/en/community' },
        { label: 'Status', href: '/en/status' },
        { label: 'Contact Support', href: '/en/contact' },
      ]
    },
    {
      title: 'Legal',
      items: [
        { label: 'Privacy Policy', href: '/en/privacy-policy' },
        { label: 'Terms of Service', href: '/en/terms-of-service' },
        { label: 'Refund Policy', href: '/en/refund-policy' },
        { label: 'Cookie Policy', href: '/en/cookie-policy' },
      ]
    }
  ],
  id: [
    {
      title: 'Produk & Layanan',
      items: [
        { label: 'Produk', href: '/id/produk' },
        { label: 'Fitur', href: '/id/fitur' },
        { label: 'Harga', href: '/id/harga' },
      ]
    },
    {
      title: 'Dokumentasi',
      items: [
        { label: 'Memulai', href: '/id/memulai' },
        { label: 'Instalasi', href: '/id/instalasi' },
        { label: 'Referensi API', href: '/id/api' },
        { label: 'Panduan & Tutorial', href: '/id/panduan' },
      ]
    },
    {
      title: 'Tentang Kami',
      items: [
        { label: 'Tentang', href: '/id/tentang' },
        { label: 'Blog', href: '/id/blog' },
        { label: 'Kontak', href: '/id/kontak' },
        { label: 'Karir', href: '/id/karir' },
      ]
    },
    {
      title: 'Dukungan',
      items: [
        { label: 'Pusat Bantuan', href: '/id/pusat-bantuan' },
        { label: 'Forum Komunitas', href: '/id/community' },
        { label: 'Status', href: '/id/status' },
        { label: 'Hubungi Dukungan', href: '/id/contact' },
      ]
    },
    {
      title: 'Legal',
      items: [
        { label: 'Privacy Policy', href: '/id/privacy-policy' },
        { label: 'Terms of Service', href: '/id/terms-of-service' },
        { label: 'Refund Policy', href: '/id/refund-policy' },
        { label: 'Cookie Policy', href: '/id/cookie-policy' },
      ]
    }
  ]
};

export const languageSlugMap = {
  en: {
    'product': 'produk',
    'feutures': 'fitur',
    'pricing': 'harga',
    'getting-started': 'memulai',
    'installation': 'instalasi',
    'guides': 'panduan',
    'about': 'tentang',
    'blog': 'blog',
    'contact': 'kontak',
    'careers': 'karir',
    'help-center': 'pusat-bantuan',
    'community': 'community',
    'status': 'status',
    'privacy-policy': 'privacy-policy',
    'terms-of-service': 'terms-of-service',
    'refund-policy': 'refund-policy',
    'cookie-policy': 'cookie-policy',
  },
  id: {
    'produk': 'product',
    'fitur': 'feutures',
    'harga': 'pricing',
    'memulai': 'getting-started',
    'instalasi': 'installation',
    'api': 'api',
    'panduan': 'guides',
    'tentang': 'about',
    'blog': 'blog',
    'kontak': 'contact',
    'karir': 'careers',
    'pusat-bantuan': 'help-center',
    'community': 'community',
    'status': 'status',
    'contact': 'contact',
    'privacy-policy': 'privacy-policy',
    'terms-of-service': 'terms-of-service',
    'refund-policy': 'refund-policy',
    'cookie-policy': 'cookie-policy',
  },
};

export const defaultRouteByLang = {
  en: '/en/product',
  id: '/id/produk',
};

export type LanguageKey = 'en' | 'id';

export function getSwitchLanguageUrl(currentLang: LanguageKey, currentSlug: string) {
  const otherLang: LanguageKey = currentLang === 'en' ? 'id' : 'en';
  const currentMap = languageSlugMap[currentLang] as Record<string, string>;
  const translatedSlug = currentMap[currentSlug];

  if (translatedSlug) {
    return `/${otherLang}/${translatedSlug}`;
  }

  return defaultRouteByLang[otherLang];
}

