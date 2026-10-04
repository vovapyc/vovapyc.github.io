<script>
	export let company;
	export let period;
	export let logo;
	export let monochrome = false;
</script>

<div class="flex gap-4 items-start mb-8 last:mb-0">
	<img
		class="company-logo mt-1"
		class:monochrome
		src={logo}
		alt=""
		width="44"
		height="44"
		loading="lazy"
	/>
	<div class="flex-1 min-w-0">
		<h3 class="font-serif font-semibold text-[1.1875rem] tracking-[-0.01em] mb-1">{company}</h3>
		<p class="font-mono text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3">{period}</p>
		<div class="text-sm md:text-base leading-relaxed space-y-3">
			<slot />
		</div>
	</div>
</div>

<style>
	.company-logo {
		flex-shrink: 0;
		width: 44px;
		height: 44px;
		object-fit: contain;
		border-radius: 8px;
	}

	.monochrome {
		filter: brightness(0);
	}

	@media (prefers-color-scheme: dark) {
		.monochrome {
			filter: brightness(0) invert(1);
		}
	}
</style>
