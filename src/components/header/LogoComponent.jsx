import React from 'react'
import Image from 'next/image'
import mainlogoimage from "@/images/DrFRodriguez-logo.png"
import Link from 'next/link'

const LogoComponent = () => {
  return (
    <Link href={"/"} >
      <Image 
            width={150} height={30} priority={true}
            className=""
            alt="Dr Francisco Rodriguez"
            src={mainlogoimage}
          />
    </Link>
  )
}

export default LogoComponent