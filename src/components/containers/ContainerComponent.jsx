import React from 'react'

const ContainerComponent = ({children, className}) => {
  return (
    <div className={`${className} main-container-class max-w-screen-xl mx-auto px-4 xl:px-0 py-5 sticky `}>
        { children }
    </div>
  )
}

export default ContainerComponent