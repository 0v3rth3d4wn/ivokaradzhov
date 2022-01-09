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
import { HeroPos } from './hero/HeroPos'

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
  const [miniTrianglesCount, setMiniTrianglesCount] = useState(330)
  const miniTriangles = useMemo(() => [...Array(miniTrianglesCount).keys()], [miniTrianglesCount])
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
    if(windowWidth <= 1366) {
      setMiniTrianglesCount(192)
       
    } else {
      setMiniTrianglesCount(330)
    }

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
        className="sm:hidden md:block absolute bottom-[287px] left-[60%] md:left-[50%] z-[10] hero-mountain-back-left"
        animate={{ translateX: (1 - scrollY) / 10 }}
      >
        <MountainBackLeft />
      </motion.div>
      <motion.div
        ref={mountainBackRightRef}
        className="sm:hidden md:block absolute right-[60%] md:right-[50%] bottom-[254px] z-[10] hero-mountain-back-right"
        animate={{ translateX: scrollY / 5 }}
      >
        <MountainBackRight />
      </motion.div>
      <motion.div
        ref={mountainFrontLeftRef}
        className="sm:hidden md:block absolute bottom-[149px] left-[65%] md:left-[45%] z-[10] hero-mountain-front-left"
        animate={{ translateX: (1 - scrollY) / 2 }}
      >
        <MountainFrontLeft />
      </motion.div>
      <motion.div
        ref={mountainFrontRightRef}
        className="sm:hidden md:block absolute right-[65%] md:right-[45%] bottom-[77px] z-[10] hero-mountain-front-right"
        animate={{ translateX: scrollY / 1.5 }}
      >
        <MountainFrontRight />
      </motion.div>
      <BigTriangle className="absolute top-24 left-1/2 z-[12] md:w-[330px] xl:w-[400px] md:h-auto origin-center -translate-x-1/2 hero-big-triangle" />

      <HeroGrid className="absolute bottom-0 left-1/2 z-[9] sm:opacity-70 md:opacity-100 -translate-x-1/2 hero-grid" />
      <HeroName className="absolute top-26 left-1/2 z-[12] w-[320px] xl:w-[500px] h-auto -translate-x-1/2 hero-name" />
      <HeroPos className="absolute top-60 xl:top-80 left-1/2 z-[12] w-[300px] xl:w-[400px] h-auto -translate-x-1/2 hero-pos" />
      <h1 className="absolute left-1/2 text-primary text-opacity-0 selection:bg-transparent -translate-x-1/2">
        Ivo Karadzhov, Full-stack Web Developer
      </h1>

      <div className="hidden xl:grid absolute top-[144px] left-1/2 z-[11] grid-cols-[repeat(30,minmax(0,1fr))] gap-4 -translate-x-1/2 hero-mini-triangles">
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
