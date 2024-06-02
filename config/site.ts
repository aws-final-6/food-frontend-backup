export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "냠냠수첩",
  description: "6조 최종 프로젝트",
  navItems: [
    {
      label: "오늘의 레시피",
      href: "/today",
    },
    {
      label: "냉장고를 부탁해",
      href: "/myrefregirator",
    },
    {
      label: "레시피 자랑",
      href: "/community",
    },
    
  ],
  navMenuItems: [
    {
      label: "오늘의 레시피",
      href: "/today",
    },
    {
      label: "냉장고를 부탁해",
      href: "/myrefregirator",
    },
    {
      label: "레시피 자랑",
      href: "/community",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
