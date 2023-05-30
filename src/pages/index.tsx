import QwikImage from "@/utils/qwik-image"
import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"

import QwikLogo from "@/images/qwik-logo.webp"
import Button from "@/components/react/button"
import MotionDemo from "@/components/react/motionDemo"
import ButtonSR from "@/components/react/buttonSR"

import DocsMDX from "@/content/demo-docs.mdx"

export default component$(() => {
  return (
    <>
      <div class="flex w-full max-w-4xl flex-col gap-2">
        <div class="flex w-full flex-col items-center gap-3 border-white pb-2">
          <h1 class="text-xl font-bold italic text-amber-400">Hi 👋</h1>
          <p class="text-2xl font-bold">Welcome to JKinsight Qwik!</p>
        </div>
        <div class="flex w-full flex-col items-center gap-3 border-t-2 border-white pt-2">
          <h2 class="font-bold">ImageComponent wrapper</h2>
          <QwikImage
            src={QwikLogo}
            alt="Some random image"
            res={100}
            height={88}
            width={250}
            class="border-2 border-x-purple-400 border-y-blue-400 p-3"
          />
          <p class="max-w-2xl text-center font-light italic">
            This image component wrapper practically behaves and is used the
            same way as the next/image component in Next.js
          </p>
        </div>
        <div class="flex w-full flex-col items-center gap-3 border-t-2 border-white pt-2">
          <h2 class="font-bold">React.js flow included + code-snippets</h2>
          <Button />
          <p class="max-w-2xl text-center font-light italic">
            This component is a React.js element that is loaded on hover.
          </p>
        </div>
        <div class="flex w-full flex-col items-center gap-3 border-t-2 border-white pt-2">
          <h2 class="font-bold">Custom Motion wrapper</h2>
          <MotionDemo />
          <p class="max-w-2xl text-center font-light italic">
            This component uses my WIP custom Motion wrapper.
          </p>
        </div>
        <div class="flex w-full flex-col items-center gap-3 border-t-2 border-white pt-2">
          <h2 class="font-bold">Screenreader support</h2>
          <ButtonSR />
          <div class="flex flex-col">
            <span class="max-w-2xl text-center font-light italic">
              {`Some users might use a screenreader.`}
            </span>
            <span class="max-w-2xl text-center font-light italic">
              {`So using tailwind's "sr-only" class you can add descriptive names to buttons for instance.`}
            </span>
          </div>
        </div>
        <div class="flex w-full flex-col items-center gap-3 border-t-2 border-white pt-2">
          <h2 class="font-bold">MDX</h2>
          <DocsMDX />
          <p class="max-w-2xl text-center font-light italic">
            MDX supported out of the box.
          </p>
        </div>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: "JKinsight Qwik",
  meta: [
    {
      name: "description",
      content: "A very Qwik website right?",
    },
  ],
}
