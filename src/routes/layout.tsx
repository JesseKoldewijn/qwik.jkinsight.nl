import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
	return (
		<main class="w-full min-h-screen">
			<Slot />
		</main>
	);
});
