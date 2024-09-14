import { IMenu } from '@/interfaces/menu';
import Link from 'next/link';
import { FC } from 'react';

const MenuLink: FC<IMenu> = ({ href, icons: Icon, title }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <Icon className="h-4 w-4" />
      {title}
    </Link>
  );
};

export default MenuLink;
