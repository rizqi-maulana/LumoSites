
import { HoveredLink, Menu, MenuItem } from '@/components/patterns/Navbar'
import { useState } from 'react';
import { ServicesData } from '@/data/ServicesData';

import { usePathname } from 'next/navigation';

interface NavbarType {
  toggle?: any,
}

export const NavbarMenu = ({ toggle }: NavbarType) => {
  const pathname = usePathname()

  const [active, setActive] = useState<string | null>(null);
  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} href='/services' active={active} item={pathname?.includes('id') ? 'Layanan' : 'Services'}>
        <div className="flex flex-col space-y-4 text-sm ">
          {
            ServicesData.map((data: any, index: number) =>
              <HoveredLink setMenu={toggle} href={pathname?.includes('id') ? data.hrefID : data.href} key={index} setActive={setActive}>{data.title}</HoveredLink>
            )
          }
        </div>
      </MenuItem>
    </Menu>
  )
}