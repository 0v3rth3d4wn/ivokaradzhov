import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import useScrollPosition from '@react-hook/window-scroll'
import { useWindowWidth, useWindowHeight } from '@react-hook/window-size'

import { HeroPattern } from './hero/HeroPattern'
import { HeroGrid } from './hero/HeroGrid'
import { BigTriangle } from './hero/BigTriangle'
import { HeroName } from './hero/HeroName'
import { MiniTriangle } from './hero/MiniTriangle'
import { MountainFrontRight } from './hero/MountainFrontRight'
import { MountainFrontLeft } from './hero/MountainFrontLeft'
import { MountainBackRight } from './hero/MountainBackRight'
import { MountainBackLeft } from './hero/MountainBackLeft'

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

/**
 * Get the center of an element
 * @param {*} element
 * @returns
 */
function getCenter(element) {
  const { left, top, width, height } = element.getBoundingClientRect()
  return { x: left + width / 2, y: top + height / 2 }
}

const Hero = () => {
  const heroRef = useRef()
  const miniTrianglesRefs = useRef([])
  const miniTriangles = useMemo(() => [...Array(288).keys()], [])
  const scrollY = useScrollPosition(60)
  const windowWidth = useWindowWidth({
    wait: 200,
  })

  /**
   * Mountains refs
   */
  const mountainBackLeftRef = useRef()
  const mountainBackRightRef = useRef()
  const mountainFrontLeftRef = useRef()
  const mountainFrontRightRef = useRef()

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

  // angle for the mini triangles
  const angle = useMotionValue(0)

  // onMouseMove rotate the small triangles
  const handleMouse = useCallback(
    event => {
      miniTriangles.forEach((element, index) => {
        angle.set(
          Math.atan2(
            event.clientY - getCenter(miniTrianglesRefs.current[index]).y,
            event.clientX - getCenter(miniTrianglesRefs.current[index]).x
          )
        )
        miniTrianglesRefs.current[
          index
        ].style.transform = `rotate(${angle.current}rad) translateX(-50%)`
      })
    },
    [angle, miniTriangles]
  )

  // Get window height
  const windowHeight = useWindowHeight()

  // Whenever window height changes, set the --vh css var to the window height
  useEffect(() => {
    setViewportProperty(document.documentElement)
  }, [windowHeight])

  return (
    <div
      ref={heroRef}
      className="overflow-x-hidden relative pt-24 h-screen hero"
      onMouseMove={handleMouse}
    >
      <HeroPattern className="absolute top-0 left-1/2 z-[11] w-full -translate-x-1/2" />
      <motion.div
        ref={mountainBackLeftRef}
        className="absolute bottom-[287px] left-[60%] md:left-[50%] z-[10]"
        animate={{ translateX: (1 - scrollY) / 10 }}
      >
        <MountainBackLeft />
      </motion.div>
      <motion.div
        ref={mountainBackRightRef}
        className="absolute right-[60%] md:right-[50%] bottom-[254px] z-[10]"
        animate={{ translateX: scrollY / 5 }}
      >
        <MountainBackRight />
      </motion.div>
      <motion.div
        ref={mountainFrontLeftRef}
        className="absolute bottom-[149px] left-[65%] md:left-[45%] z-[10]"
        animate={{ translateX: (1 - scrollY) / 2 }}
      >
        <MountainFrontLeft />
      </motion.div>
      <motion.div
        ref={mountainFrontRightRef}
        className="absolute right-[65%] md:right-[45%] bottom-[77px] z-[10]"
        animate={{ translateX: scrollY / 1.5 }}
      >
        <MountainFrontRight />
      </motion.div>
      <BigTriangle className="absolute top-24 md:top-[300px] left-1/2 z-[12] origin-center md:scale-[2] -translate-x-1/2" />

      <HeroGrid className="absolute bottom-0 left-1/2 z-[9] -translate-x-1/2" />
      <HeroName className="absolute top-40 md:top-[350px] left-1/2 z-[12] md:scale-[2] -translate-x-1/2" />
      {/* <h1 className="absolute z-10 w-full px-8 text-2xl font-bold text-center text-white uppercase top-72">
        Web Developer
      </h1> */}

      <div className="hidden xl:grid absolute top-[300px] left-1/2 grid-cols-[repeat(24,minmax(0,1fr))] gap-4 -translate-x-1/2">
        {miniTriangles &&
          miniTriangles.map((triangle, index) => (
            <div
              className="origin-center"
              key={triangle}
              ref={element => (miniTrianglesRefs.current[index] = element)}
            >
              <MiniTriangle />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Hero
