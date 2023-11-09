import React from 'react';

const ContainerComponent = ({ children, className }) => {
  return (
    <div className={`${className} main-container-class mx-auto `}>
      {children}
    </div>
  );
};

export default ContainerComponent;
