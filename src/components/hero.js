import React, { useEffect, useRef, useState } from 'react'
import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'
import useScrollPosition from '@react-hook/window-scroll'
import { useWindowWidth } from '@react-hook/window-size'

import HeroPattern from '../assets/images/hero-pattern.svg'
import HeroGrid from '../assets/images/hero-grid-large.svg'
import Triangles from '../assets/images/triangles.svg'
import Name from '../assets/images/name.svg'
import MountainBackLeft from '../assets/images/hero/mountain-back-left.svg'
import MountainBackRight from '../assets/images/hero/mountain-back-right.svg'
import MountainFrontLeft from '../assets/images/hero/mountain-front-left.svg'
import MountainFrontRight from '../assets/images/hero/mountain-front-right.svg'

import '../styles/hero.css'

const Hero = () => {
  const heroRef = useRef()
  const triangleRef = useRef()
  const scrollY = useScrollPosition(60)
  const windowWidth = useWindowWidth()
  const mountainBackLeftRef = useRef()
  const mountainBackRightRef = useRef()
  const mountainFrontLeftRef = useRef()
  const mountainFrontRightRef = useRef()

  const Triangle = React.forwardRef(({ style }, ref) => (
    <svg
      ref={ref}
      className="absolute top-28 left-1/2 -translate-x-1/2 z-[9]"
      width="274.01208"
      height="246.02499"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d="m2.7949 7.29 271.2172 7.708-142.284 231.027z" fill="#16003c" />
      <path
        d="M0 14.822 270.9211 0l-122.624 242.036Z"
        fill="url(#a)"
        style={{
          fill: `url(#a)`,
        }}
      />
      <defs>
        <linearGradient
          id="a"
          x1="277.94901"
          y1="82.166397"
          x2="127.029"
          y2="328.63101"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-37.5589 -120.552)"
        >
          <stop offset=".0906595" stopColor="#41DDF1" />
          <stop offset=".36173" stopColor="#7B8FCB" />
          <stop offset=".639692" stopColor="#A755AE" />
          <stop offset=".969143" stopColor="#DE0C8A" />
        </linearGradient>
      </defs>
    </svg>
  ))

  Triangle.displayName = 'Triangle'

  useEffect(() => {
    const mountainBackLeftWidth =
      mountainBackLeftRef.current.getBoundingClientRect().width
    const mountainBackRightWidth =
      mountainBackRightRef.current.getBoundingClientRect().width
    const mountainFrontLeftWidth =
      mountainFrontLeftRef.current.getBoundingClientRect().width
    const mountainFrontRightWidth =
      mountainFrontRightRef.current.getBoundingClientRect().width

    mountainBackLeftRef.current.style.marginLeft = `-${mountainBackLeftWidth}px`
    mountainBackRightRef.current.style.marginRight = `-${mountainBackRightWidth}px`
    mountainFrontLeftRef.current.style.marginLeft = `-${mountainFrontLeftWidth}px`
    mountainFrontRightRef.current.style.marginRight = `-${mountainFrontRightWidth}px`
  }, [windowWidth])

  return (
    <div
      ref={heroRef}
      className="relative pt-24 h-screen overflow-x-hidden hero"
    >
      <HeroPattern className="absolute top-0 left-1/2 -translate-x-1/2 z-[11]" />
      <motion.div
        ref={mountainBackLeftRef}
        className="absolute left-[60%] z-[10] bottom-[287px]"
        animate={{ translateX: (1 - scrollY) / 3 }}
      >
        <MountainBackLeft />
      </motion.div>
      <motion.div
        ref={mountainBackRightRef}
        className="absolute right-[60%] z-[10] bottom-[217px]"
        animate={{ translateX: scrollY / 6 }}
      >
        <MountainBackRight />
      </motion.div>
      <motion.div
        ref={mountainFrontLeftRef}
        className="absolute left-[60%] z-[10] bottom-[148px]"
        animate={{ translateX: (1 - scrollY) / 9 }}
      >
        <MountainFrontLeft />
      </motion.div>
      <motion.div
        ref={mountainFrontRightRef}
        className="absolute right-[60%] z-[10] bottom-[78px]"
        animate={{ translateX: scrollY / 12 }}
      >
        <MountainFrontRight />
      </motion.div>

      <Triangle ref={triangleRef} className="z-[12]" />
      <HeroGrid className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[9]" />
      <Name className="absolute top-40 left-1/2 -translate-x-1/2 z-10" />
      <h1 className="text-white top-72 px-8 absolute z-10 text-2xl font-bold uppercase text-center w-full">
        Web Developer
      </h1>
    </div>
  )
}

export default Hero
