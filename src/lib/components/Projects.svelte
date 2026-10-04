<script>
	import Card from './Card.svelte';
</script>

<Card title="📦 Projects">
	<div class="space-y-6">
		<slot />
		{#if $$slots.more}
			<details class="extra-projects">
				<summary class="show-more font-mono">
					<span class="collapsed-label">Show more<span class="sr-only"> projects</span></span>
					<span class="expanded-label">Show less<span class="sr-only"> projects</span></span>
					<span class="disclosure-icon" aria-hidden="true">+</span>
				</summary>
				<div class="pt-6">
					<slot name="more" />
				</div>
			</details>
		{/if}
	</div>
</Card>

<style>
	.show-more {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.875rem;
		border: 1px solid color-mix(in srgb, currentColor 20%, transparent);
		border-radius: 999px;
		font-size: 0.8125rem;
		cursor: pointer;
		list-style: none;
	}

	.show-more::-webkit-details-marker {
		display: none;
	}

	.show-more:hover {
		background: color-mix(in srgb, currentColor 5%, transparent);
	}

	.show-more:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 4px;
	}

	.expanded-label {
		display: none;
	}

	.extra-projects[open] .collapsed-label {
		display: none;
	}

	.extra-projects[open] .expanded-label {
		display: inline;
	}

	.extra-projects[open] .disclosure-icon {
		rotate: 45deg;
	}
</style>
