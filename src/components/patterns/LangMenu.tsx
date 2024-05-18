
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/patterns/Navbar'
import { useState } from 'react';
import enImg from '@/assets/images/en.webp'
import idnImg from '@/assets/images/idn.webp'
import Image from 'next/image';
import { Links } from '../atoms/Links';

export const Langmenu = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} image={enImg}>
        <div className="flex flex-col space-y-4 text-sm ">
          <Links href='' className='flex items-center gap-2'>
            <Image src={enImg} width={25} height={25} alt="en" />
            <p>English</p>
          </Links>
          <Links href='' className='flex items-center gap-2'>
            <Image src={idnImg} width={25} height={25} alt="id" />
            <p>Indonesia</p>
          </Links>
        </div>
      </MenuItem>
    </Menu>
  )
}