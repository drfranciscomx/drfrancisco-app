'use client'
import styles from './style.module.scss'
import Navi from './Nav';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import HeaderContainerComponent from '../containers/HeaderContainerComponent';
import LogoComponent from './LogoComponent'
import MainMenuComponent from './MainMenuComponent';
import MobileMenuComponent from './MobileMenuComponent';


const HeaderComponent = () => {

  return (
    <div className=''>
        <HeaderContainerComponent>
            <MainMenuComponent/>
            
            <MobileMenuComponent/>
        </HeaderContainerComponent>
    </div>
  )

}

export default HeaderComponent