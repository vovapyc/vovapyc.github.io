<script lang="ts">
	export let title;
	export let emoji;
	export let description = '';
	export let href;
</script>

<div class="group relative">
	<div class="flex gap-4 items-start">
		<div class="text-4xl mt-1">{emoji}</div>
		<div class="flex-1">
			<h3
				class="font-serif font-semibold text-[1.1875rem] tracking-[-0.01em] mb-1 group-hover:opacity-70 transition-opacity"
			>
				<a {href} target="_blank" class="project-link">{title}</a>
			</h3>
			<p class="description text-sm md:text-base leading-relaxed">
				<slot>{description}</slot>
			</p>
		</div>
		<span class="text-lg opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
	</div>
</div>

<style>
	.project-link::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 0.25rem;
	}

	.project-link:focus-visible {
		outline: none;
	}

	.project-link:focus-visible::after {
		outline: 2px solid currentColor;
		outline-offset: 4px;
	}

	.description :global(a) {
		position: relative;
		z-index: 1;
	}
</style>
