<script lang="ts">
	export let title;
	export let emoji;
	export let description;
	export let href;
</script>

<a {href} target="_blank" class="group block">
	<div class="flex gap-4 items-start">
		<div class="text-4xl mt-1">{emoji}</div>
		<div class="flex-1">
			<h3
				class="font-serif font-semibold text-[1.1875rem] tracking-[-0.01em] mb-1 group-hover:opacity-70 transition-opacity"
			>
				{title}
			</h3>
			<p class="text-sm md:text-base leading-relaxed">
				{description}
			</p>
		</div>
		<span class="text-lg opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
	</div>
</a>
