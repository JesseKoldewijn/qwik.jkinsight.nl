/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react"

import { useMotionAnimate } from "@glitchtech-dev/react-motion"
import { useEffect, useRef } from "react"

const MotionDemo = () => {
  const firstElem = useRef(null)
  const secondElem = useRef(null)

  useEffect(() => {
    if (firstElem.current !== null) {
      useMotionAnimate(
        firstElem.current,
        {
          opacity: ["0", "1"],
        },
        { duration: 5 }
      )
    }
    if (secondElem.current !== null) {
      useMotionAnimate(
        secondElem.current,
        {
          opacity: ["1", "0"],
        },
        { duration: 5 }
      )
    }
  }, [])

  return (
    <div className="relative w-32 select-none pb-6">
      <span ref={firstElem} className="absolute" style={{ opacity: 0 }}>
        {"I'm disapearing!"}
      </span>
      <span ref={secondElem} className="absolute">
        {"I've appeared!"}
      </span>
    </div>
  )
}
export default qwikify$(MotionDemo, { eagerness: "load" })
