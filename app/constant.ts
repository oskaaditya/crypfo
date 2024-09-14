import { IMenu } from '@/interfaces/menu';
import { Home, LineChart } from 'lucide-react';

export const menuNavbar: IMenu[] = [
  {
    icons: Home,
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    icons: LineChart,
    title: 'Coin List',
    href: '/coin-list',
  },
];
