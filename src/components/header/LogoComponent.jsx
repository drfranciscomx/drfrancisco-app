import React from 'react'
import Image from 'next/image'
import mainlogoimage from "../../images/DrFRodriguez-logo.webp"

const LogoComponent = () => {
  return (
    <Image 
          width={200} height={30} priority={true}
          className="relative md:absolute md:left-5 w-[178px] h-[69px] object-cover"
          alt="Dr Francisco Rodriguez"
          src={mainlogoimage}
        />
  )
}

export default LogoComponent