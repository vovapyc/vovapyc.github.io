<script>
	export let company;
	export let period;
</script>

<div class="border-l-2 border-gray-300 dark:border-gray-600 pl-4 mb-8">
	<div class="flex flex-wrap items-baseline gap-2 mb-2">
		<h3 class="font-serif font-semibold text-[1.1875rem] tracking-[-0.01em]">{company}</h3>
		<span class="font-mono text-xs md:text-sm text-gray-500 dark:text-gray-400">{period}</span>
	</div>
	<div class="text-sm md:text-base space-y-2">
		<slot />
	</div>
</div>
