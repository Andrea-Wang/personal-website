// 首页右侧「常用链接」。增删条目只需改这里。
// note：右侧显示的出版方/简称，可留空。

export interface QuickLink { label: string; href: string; note?: string; }
export interface LinkGroup { title: string; titleEn: string; links: QuickLink[]; }

export const linkGroups: LinkGroup[] = [
  {
    title: '期刊',
    titleEn: 'Journals',
    links: [
      { label: 'Nature', href: 'https://www.nature.com/nature', note: 'NPG' },
      { label: 'Science', href: 'https://www.science.org/journal/science', note: 'AAAS' },
      { label: 'Nature Astronomy', href: 'https://www.nature.com/natastron/', note: 'NPG' },
      { label: 'Nature Chemistry', href: 'https://www.nature.com/nchem/', note: 'NPG' },
      { label: 'Science Advances', href: 'https://www.science.org/journal/sciadv', note: 'AAAS' },
      { label: 'ACS Earth Space Chem.', href: 'https://pubs.acs.org/journal/aesccq', note: 'ACS' },
      { label: 'J. Am. Chem. Soc.', href: 'https://pubs.acs.org/journal/jacsat', note: 'ACS' },
      { label: 'Anal. Chem.', href: 'https://pubs.acs.org/journal/ancham', note: 'ACS' },
      { label: 'JASMS', href: 'https://pubs.acs.org/journal/jamsef', note: 'ACS' },
      { label: 'Astrobiology', href: 'https://journals.sagepub.com/home/ast', note: 'Sage' },
      { label: 'Planet. Sci. J.', href: 'https://iopscience.iop.org/journal/2632-3338', note: 'AAS' },
      { label: 'Icarus', href: 'https://www.sciencedirect.com/journal/icarus', note: 'Elsevier' },
      { label: 'Angew. Chem.', href: 'https://onlinelibrary.wiley.com/journal/15213773', note: 'Wiley' },
    ],
  },
  {
    title: '检索与数据',
    titleEn: 'Search & data',
    links: [
      { label: 'Google Scholar', href: 'https://scholar.google.com/' },
      { label: 'Web of Science', href: 'https://www.webofscience.com/' },
      { label: 'NASA ADS', href: 'https://ui.adsabs.harvard.edu/' },
      { label: 'arXiv · astro-ph.EP', href: 'https://arxiv.org/list/astro-ph.EP/new' },
      { label: 'PubChem', href: 'https://pubchem.ncbi.nlm.nih.gov/' },
      { label: 'NIST WebBook', href: 'https://webbook.nist.gov/chemistry/' },
    ],
  },
];
