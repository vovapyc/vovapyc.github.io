<script>
	export let company;
	export let period;
	export let location = '';
	export let logo;
	export let monochrome = false;
</script>

<div
	class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-3 items-center mb-8 last:mb-0 md:flex md:gap-4 md:items-start"
>
	<img
		class="company-logo md:mt-1"
		class:monochrome
		src={logo}
		alt=""
		width="44"
		height="44"
		loading="lazy"
	/>
	<div class="contents md:block md:flex-1 md:min-w-0">
		<div class="min-w-0">
			<h3 class="font-serif font-semibold text-[1.1875rem] tracking-[-0.01em] mb-1">{company}</h3>
			<p class="font-mono text-xs md:text-sm text-gray-500 dark:text-gray-400 md:mb-3">
				<span class="whitespace-nowrap">{period}</span>{#if location}{' · '}{location}{/if}
			</p>
		</div>
		<div class="col-span-2 text-sm md:text-base leading-relaxed space-y-3">
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
