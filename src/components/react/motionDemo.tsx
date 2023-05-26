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
          color: ["purple", "cyan"],
        },
        { duration: 5 }
      )
    }
    if (secondElem.current !== null) {
      useMotionAnimate(
        secondElem.current,
        {
          opacity: ["1", "0"],
          color: ["cyan", "purple"],
        },
        { duration: 5 }
      )
    }
  }, [])

  return (
    <div className="relative w-32 select-none pb-6">
      <span ref={firstElem} className="absolute" style={{ opacity: 0 }}>
        {"Now you see me!"}
      </span>
      <span ref={secondElem} className="absolute">
        {"Now you don't!"}
      </span>
    </div>
  )
}
export default qwikify$(MotionDemo, { eagerness: "load" })
