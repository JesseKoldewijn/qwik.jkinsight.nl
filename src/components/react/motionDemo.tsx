/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react"

import { useMotionAnimate, Motion } from "@glitchtech-dev/react-motion/dist/cjs"
import { useEffect, useRef } from "react"

const MotionDemo = () => {
  const firstElem = useRef(null)
  const secondElem = useRef(null)

  const textShadow1 =
    "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18"
  const textShadow2 =
    "0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00"

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
    <div className="flex flex-col gap-3">
      <div className="relative w-32 select-none pb-6">
        <span ref={firstElem} className="absolute" style={{ opacity: 0 }}>
          {"I've appeared!"}
        </span>
        <span ref={secondElem} className="absolute">
          {"I'm disappearing!"}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-md text-center font-semibold">
          Motion.div example
        </h3>
        <Motion
          animate={{
            color: ["white", "cyan"],
            textShadow: [textShadow1, textShadow2],
            paddingTop: ["1rem", "2rem", "0rem"],
            paddingBottom: ["1rem", "2rem", "0rem"],
          }}
          transition={{ duration: 2.5, easing: "ease-out" }}
        >
          <span>{"I'm a Motion div element!"}</span>
        </Motion>
      </div>
    </div>
  )
}
export default qwikify$(MotionDemo, { eagerness: "load" })
