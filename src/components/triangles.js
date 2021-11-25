import React, { useRef } from 'react'
import TrianglesSVG from '../assets/images/triangles.svg'

const Triangles = ({ mousePosition }) => {
  const trianglesRef = node => {
    console.log(node)
  }

  return (
    <TrianglesSVG
      ref={trianglesRef}
      className="absolute top-28 left-1/2 -translate-x-1/2 z-[9]"
    />
  )
}

export default Triangles
