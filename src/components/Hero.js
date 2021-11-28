import React, { useEffect, useRef, useState } from 'react'
import useMouse from '@react-hook/mouse-position'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import useScrollPosition from '@react-hook/window-scroll'
import { useWindowWidth, useWindowHeight } from '@react-hook/window-size'

import HeroPattern from '../assets/images/hero-pattern.svg'
import HeroGrid from '../assets/images/hero-grid-large.svg'
import Triangles from '../assets/images/triangles.svg'
import Name from '../assets/images/name.svg'
import MountainBackLeft from '../assets/images/hero/mountain-back-left.svg'
import MountainBackRight from '../assets/images/hero/mountain-back-right.svg'
import MountainFrontLeft from '../assets/images/hero/mountain-front-left.svg'
import MountainFrontRight from '../assets/images/hero/mountain-front-right.svg'

import '../styles/hero.css'

function setViewportProperty(doc) {
  let prevClientHeight
  const customVar = `--${'vh'}`
  function handleResize() {
    const { clientHeight } = doc
    if (clientHeight === prevClientHeight) return
    requestAnimationFrame(function updateViewportHeight() {
      doc.style.setProperty(customVar, `${clientHeight * 0.01}px`)
      prevClientHeight = clientHeight
    })
  }
  handleResize()
  return handleResize
}

const Hero = () => {
  const heroRef = useRef()
  const triangleRef = useRef()
  const triangleRefs = useRef([])
  const miniTriangles = [...Array(288).keys()]
  const scrollY = useScrollPosition(60)
  const windowWidth = useWindowWidth()

  /**
   * Mountains refs
   */
  const mountainBackLeftRef = useRef()
  const mountainBackRightRef = useRef()
  const mountainFrontLeftRef = useRef()
  const mountainFrontRightRef = useRef()

  /**
   * Get the center of an element
   * @param {*} element
   * @returns
   */
  function getCenter(element) {
    const { left, top, width, height } = element.getBoundingClientRect()
    return { x: left + width / 2, y: top + height / 2 }
  }

  // After each window width change, reposition the mountains
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

  /**
   * Main triangle SVG. Forward ref so we can interact later with it
   */
  const Triangle = React.forwardRef(({ style }, ref) => (
    <svg
      ref={ref}
      className="absolute top-28 left-1/2 -translate-x-1/2 z-[12] origin-center lg:scale-[2] lg:top-[300px]"
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

  /**
   * Mini triangle component.
   */
  const MiniTriangle = React.forwardRef((props, ref) => (
    <svg
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      className="origin-center"
    >
      <path
        d="M5.49639 9.12451L0.342366 0.197471L10.6504 0.197472L5.49639 9.12451Z"
        fill="#641C94"
      />
    </svg>
  ))

  MiniTriangle.displayName = 'Mini'

  // angle for
  const angle = useMotionValue(0)

  // onMouseMove rotate the small triangles
  function handleMouse(event) {
    miniTriangles.forEach((element, index) => {
      angle.set(
        Math.atan2(
          event.clientY - getCenter(triangleRefs.current[index]).y,
          event.clientX - getCenter(triangleRefs.current[index]).x
        )
      )
      triangleRefs.current[
        index
      ].style.transform = `rotate(${angle.current}rad) translateX(-50%)`
    })
  }

  // Get window height
  const windowHeight = useWindowHeight()

  // Whenever window height changes, set the --vh css var to the window height
  useEffect(() => {
    setViewportProperty(document.documentElement)
  }, [windowHeight])

  return (
    <motion.div
      ref={heroRef}
      className="relative h-screen pt-24 overflow-x-hidden hero"
      // onMouseMove={handleMouse}
    >
      <HeroPattern className="absolute top-0 left-1/2 -translate-x-1/2 z-[11]" />
      <motion.div
        ref={mountainBackLeftRef}
        className="absolute left-[60%] md:left-[50%] z-[10] bottom-[287px]"
        animate={{ translateX: (1 - scrollY) / 10 }}
      >
        <MountainBackLeft />
      </motion.div>
      <motion.div
        ref={mountainBackRightRef}
        className="absolute right-[60%] md:right-[50%] z-[10] bottom-[254px]"
        animate={{ translateX: scrollY / 5 }}
      >
        <MountainBackRight />
      </motion.div>
      <motion.div
        ref={mountainFrontLeftRef}
        className="absolute left-[65%] md:left-[45%] z-[10] bottom-[149px]"
        animate={{ translateX: (1 - scrollY) / 2 }}
      >
        <MountainFrontLeft />
      </motion.div>
      <motion.div
        ref={mountainFrontRightRef}
        className="absolute right-[65%] md:right-[45%] z-[10] bottom-[77px]"
        animate={{ translateX: scrollY / 1.5 }}
      >
        <MountainFrontRight />
      </motion.div>
      <motion.div>
        <Triangle ref={triangleRef} />
      </motion.div>

      <HeroGrid className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[9]" />
      <Name className="absolute top-40 left-1/2 -translate-x-1/2 z-[12] lg:scale-[2] lg:top-[350px]" />
      {/* <h1 className="absolute z-10 w-full px-8 text-2xl font-bold text-center text-white uppercase top-72">
        Web Developer
      </h1> */}

      {/* <div className="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-4 absolute left-1/2 -translate-x-1/2 top-[400px]">
        {miniTriangles &&
          miniTriangles.map((triangle, index) => (
            <MiniTriangle
              key={triangle}
              ref={element => (triangleRefs.current[index] = element)}
            />
          ))}
      </div> */}
    </motion.div>
  )
}

export default Hero
