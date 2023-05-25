/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react"

import type { SetStateAction } from "react"
import { useEffect, useState } from "react"

const button = () => {
  const [preClicked, setPreClicked] = useState(1)

  useEffect(() => {
    if (
      localStorage.getItem("q-preclick-jki") !== null &&
      localStorage.getItem("q-preclick-jki") !== undefined
    ) {
      setPreClicked(parseInt(String(localStorage.getItem("q-preclick-jki"))))
    }
  })

  const [clicked, setClicked] = useState(preClicked)

  const incrementClicked = (clickedNew: SetStateAction<number>) => {
    localStorage.setItem("q-preclick-jki", String(clickedNew))
    setClicked(clickedNew)
  }

  return (
    <>
      <button
        onClick={() =>
          incrementClicked((preClicked !== 1 ? preClicked : clicked) + 1)
        }
        className="bg-purple-500 px-4 py-3 font-bold text-black"
      >
        Click me to increment: {preClicked !== 1 ? preClicked : clicked}
      </button>
    </>
  )
}
export default qwikify$(button, { eagerness: "load" })
