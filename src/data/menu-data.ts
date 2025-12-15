import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: '主页',
    link: '/home-yeco',
  },
  {
    id: 2,
    title: '趋势报告',
    link: '/reportsList',
  },
  {
    id: 3,
    title: '关于YECO',
    link: '/about-yeco',
  }
];



export default menu_data;

// mobile menus - YECO 专用
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus?: {
      title: string;
      link: string;
  }[];
}[] = [
  {
    id: 1,
    title: '主页',
    link: '/home-yeco',
  },
  {
    id: 2,
    title: '趋势报告',
    link: '/reportsList',
  },
  {
    id: 3,
    title: '关于YECO',
    link: '/about-yeco',
  }
]