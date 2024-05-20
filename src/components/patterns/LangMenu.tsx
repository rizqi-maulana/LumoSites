import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/patterns/Navbar'
import { useEffect, useState } from 'react';
import enImg from '@/assets/images/en.webp'
import idnImg from '@/assets/images/idn.webp'
import Image from 'next/image';
import { Links } from '../atoms/Links';

import { usePathname } from 'next/navigation'

export const Langmenu = () => {

  const pathname = usePathname()
  const [path, setPath] = useState<string>()

  useEffect(() => {
    const arr = pathname?.split("/").filter(Boolean);
    const newArr = arr?.filter(item => item !== "id");
    const path = newArr?.join("/");

    setPath(path)
  }, [pathname])

  const [active, setActive] = useState<string | null>(null);
  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} href='' active={active} image={usePathname()?.includes('id') ? idnImg : enImg}>
        <div className="flex flex-col space-y-4 text-sm ">
          <Links href={`/${path}`} className='flex items-center gap-2'>
            <Image src={enImg} width={25} height={25} alt="en" />
            <p>English</p>
          </Links>
          <Links href={`/id/${path}`} className='flex items-center gap-2'>
            <Image src={idnImg} width={25} height={25} alt="id" />
            <p>Indonesia</p>
          </Links>
        </div>
      </MenuItem>
    </Menu>
  )
}