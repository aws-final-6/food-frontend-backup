export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "마이리틀레시피북",
  description: "6조 최종 프로젝트",
  webuserItems: [
    {
      label: "홈",
      href: "/",
    },
    {
      label: "냉장고를 부탁해",
      href: "/myrefregirator",
    },
    {
      label: "마이페이지",
      href: "/mypage",
    },
  ],
  webbasicItems: [
    {
      label: "홈",
      href: "/",
    },
  ],
  mobileuserItems: [
    {
      label: "홈",
      href: "/",
    },
    {
      label: "냉장고를 부탁해",
      href: "/myrefregirator",
    },
    {
      label: "마이페이지",
      href: "/mypage",
    },
    {
      label: "로그아웃",
      href: "/logout",
    },
  ],
  mobilebasicItems: [
    {
      label: "홈",
      href: "/",
    },
    {
      label: "로그인",
      href: "/login",
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
