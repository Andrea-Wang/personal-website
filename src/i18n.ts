// 中文在根路径，英文在 /en/ 下。
export type Lang = 'zh' | 'en';

// 有英文版的页面；其余（写作子页面）切换时回到英文「写作」页。
const translated = ['/', '/research/', '/about/', '/writing/'];

export function localize(path: string, lang: Lang): string {
  return lang === 'en' ? `/en${path}` : path;
}

/** 当前页面在另一种语言下的地址 */
export function alternate(pathname: string, lang: Lang): string {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (lang === 'en') return path.replace(/^\/en/, '') || '/';
  if (translated.includes(path)) return `/en${path}`;
  if (path.startsWith('/writing/')) return '/en/writing/';
  return '/en/';
}

export const ui = {
  zh: {
    siteTitle: '汪宸 | 个人主页',
    description: '汪宸的个人主页：质谱、光化学与生命信号研究，以及长篇幻想小说写作。',
    nav: { home: '主页', research: '研究', writing: '写作', about: '关于' },
    switchLabel: 'EN',
    switchTitle: 'Switch to English',
  },
  en: {
    siteTitle: 'Chen Wang',
    description: 'Chen Wang — PhD researcher in chemistry at Leipzig University: mass spectrometry, photochemistry and biosignature detection.',
    nav: { home: 'Home', research: 'Research', writing: 'Writing', about: 'About' },
    switchLabel: '中文',
    switchTitle: '切换到中文',
  },
} as const;
