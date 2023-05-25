import QwikImage from "@/utils/qwik-image"
import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"

import QwikLogo from "@/images/qwik-logo.webp"

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
            width={88}
            class="border-2 border-x-amber-400 border-y-amber-600 p-3"
          />
          <p class="max-w-2xl text-center font-light italic">
            This image component wrapper practically behaves and is used the
            same way as the next/image component in Next.js
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
