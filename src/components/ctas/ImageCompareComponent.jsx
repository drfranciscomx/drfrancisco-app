"use client"
import ReactCompareImage from "react-compare-image"

const ImageCompareComponent = () => {
  return (
    <div>
        <ReactCompareImage leftImage="/Tummy-Tuck-Before.jpg" rightImage="/Tummy-Tuck-After.jpg" className="relative rounded-3xs w-full h-[493.42px] "/>
    </div>
  )
}

export default ImageCompareComponent