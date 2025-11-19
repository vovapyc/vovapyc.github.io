<script>
	export let title;
	export let emoji;
	export let description;
	export let tech = [];
	export let href;
</script>

<a {href} target="_blank" class="group block">
	<div class="flex gap-4 items-start">
		<div class="text-4xl mt-1">{emoji}</div>
		<div class="flex-1">
			<h3 class="text-base md:text-lg font-bold mb-1 group-hover:opacity-70 transition-opacity">{title}</h3>
			<p class="text-sm md:text-base mb-2 leading-relaxed">
				{description}
			</p>
			<div class="flex flex-wrap gap-2">
				{#each tech as item}
					<span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">{item}</span>
				{/each}
			</div>
		</div>
		<span class="text-lg opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
	</div>
</a>
