'use client';
import HeaderContainerComponent from '../containers/HeaderContainerComponent';
import MainMenuComponent from './MainMenuComponent';
import MobileMenuComponent from './MobileMenuComponent';

const HeaderComponent = () => {
  return (
    <>
      <HeaderContainerComponent>
        <MainMenuComponent />

        <MobileMenuComponent />
      </HeaderContainerComponent>
    </>
  );
};

export default HeaderComponent;
