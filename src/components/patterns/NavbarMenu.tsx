
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/patterns/Navbar'
import { useState } from 'react';
import { ServicesData } from '@/data/ServicesData';

interface NavbarType {
  toggle?: any,
}

export const NavbarMenu = ({ toggle }: NavbarType) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Services">
        <div className="flex flex-col space-y-4 text-sm ">
          {
            ServicesData.map((data: any, index: number) =>
              <HoveredLink setMenu={toggle} href={data.href} key={index} setActive={setActive}>{data.title}</HoveredLink>
            )
          }
        </div>
      </MenuItem>
    </Menu>
  )
}