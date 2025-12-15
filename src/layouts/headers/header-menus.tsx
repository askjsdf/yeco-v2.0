'use client';
import Link from "next/link";
import { useTranslation } from "@/i18n/hooks/useTranslation";
import { Dictionary } from "@/i18n/dictionaries";

// 菜单数据结构 - 使用翻译
const getMenuData = (t: Dictionary) => [
  {
    id: 1,
    title: t.nav.home,
    link: '/home-yeco',
  },
  {
    id: 2,
    title: t.nav.reports,
    link: '/reportsList',
  },
  {
    id: 3,
    title: t.nav.about,
    link: '/about-yeco',
  },
];

const HeaderMenus = () => {
  const { t } = useTranslation();
  const menu_data = getMenuData(t);

  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id}>
          <Link href={menu.link}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;
