import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"

export default component$(() => {
  return (
    <div class="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <h1 class="font-bold italic text-amber-400">Hi 👋</h1>
      <p class="font-bold text-white">Welcome to JKinsight Qwik!</p>
    </div>
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
