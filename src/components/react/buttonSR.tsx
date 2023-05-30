/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react"

import type { SetStateAction } from "react"
import { useState } from "react"

import { HomeIcon } from "lucide-react"

const button = () => {
  const [clicked, setClicked] = useState(0)

  const incrementClicked = (clickedNew: SetStateAction<number>) => {
    setClicked(clickedNew)
  }

  return (
    <>
      <button
        onClick={() => incrementClicked(clicked + 1)}
        className="rounded-xl bg-purple-500 px-4 py-3 font-bold text-black"
      >
        <HomeIcon />
        {clicked}
        <span className="sr-only">A button to the home page</span>
      </button>
    </>
  )
}
export default qwikify$(button, { eagerness: "hover" })
