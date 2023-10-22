'use client'
import styles from './style.module.scss'
import Navi from './Nav';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import ContainerComponent from '../containers/ContainerComponent'
import LogoComponent from './LogoComponent'
import MainMenuComponent from './MainMenuComponent';
import MobileMenuComponent from './MobileMenuComponent';


const HeaderComponent = () => {

    const [isActive, SetIsActive] = useState(false);
    const pathname = usePathname();

  useEffect( () => {
    if(isActive) SetIsActive(false)
  }, [pathname])
  return (
    <div className='h-28 p-1 bg-black text-white font-bodyFont text-xl sticky top-0 z-[999]'>
        <ContainerComponent>
            <MainMenuComponent/>
            
            <MobileMenuComponent/>
        </ContainerComponent>
    </div>
  )

}

export default HeaderComponent