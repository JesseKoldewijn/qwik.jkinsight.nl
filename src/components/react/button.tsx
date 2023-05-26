/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react"

import type { SetStateAction } from "react"
import { useState } from "react"

const button = () => {
  const [clicked, setClicked] = useState(0)

  const incrementClicked = (clickedNew: SetStateAction<number>) => {
    localStorage.setItem("q-preclick-jki", String(clickedNew))
    setClicked(clickedNew)
  }

  return (
    <>
      <button
        onClick={() => incrementClicked(clicked + 1)}
        className="bg-purple-500 px-4 py-3 font-bold text-black"
      >
        Click me to increment: {clicked}
      </button>
    </>
  )
}
export default qwikify$(button, { eagerness: "hover" })
