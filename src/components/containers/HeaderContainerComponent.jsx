import React from 'react'

const HeaderContainerComponent = ({children, className}) => {
  return (
    <div className={`main-container-class h-28 p-1 bg-black text-white font-bodyFont text-xl sticky top-0 z-[999] w-full px-4 xl:px-0 py-5 `}>
        { children }
    </div>
  )
}

export default HeaderContainerComponent