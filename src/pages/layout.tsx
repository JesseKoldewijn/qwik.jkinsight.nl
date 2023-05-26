import { component$, Slot } from "@builder.io/qwik"

export default component$(() => {
  return (
    <main class="min-h-screen w-full">
      <div class="flex min-h-screen w-full flex-col items-center justify-center bg-black text-white">
        <Slot />
      </div>
    </main>
  )
})
