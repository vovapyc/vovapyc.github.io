<script>
	import Card from './Card.svelte';
</script>

<Card title="📦 Projects">
	<div class="space-y-6">
		<slot />
		{#if $$slots.more}
			<details class="extra-projects">
				<summary class="show-more">
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
		gap: 1rem;
		padding: 0.375rem 0.375rem 0.375rem 1.125rem;
		border: 1px solid #242424;
		border-radius: 999px;
		color: #fafafa;
		background: linear-gradient(180deg, #454545, #292929 70%, #242424);
		box-shadow:
			inset 0 1px 1px rgb(255 255 255 / 0.28),
			inset 0 -1px 1px rgb(0 0 0 / 0.35),
			0 2px 3px rgb(0 0 0 / 0.12),
			0 6px 12px -6px rgb(0 0 0 / 0.3);
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.5;
		text-shadow: 0 1px 1px rgb(0 0 0 / 0.35);
		cursor: pointer;
		list-style: none;
		transition:
			translate 0.14s ease-out,
			box-shadow 0.14s ease-out;
	}

	.show-more::-webkit-details-marker {
		display: none;
	}

	.show-more:hover {
		background: linear-gradient(180deg, #505050, #333333 70%, #292929);
		translate: 0 -1px;
	}

	.show-more:active {
		translate: 0 1px;
		box-shadow:
			inset 0 2px 4px rgb(0 0 0 / 0.3),
			inset 0 -1px 0 rgb(255 255 255 / 0.12);
	}

	.show-more:focus-visible {
		outline: 2px solid #737373;
		outline-offset: 4px;
	}

	.disclosure-icon {
		display: grid;
		place-items: center;
		width: 1.75rem;
		height: 1.75rem;
		border-radius: 50%;
		border: 1px solid rgb(255 255 255 / 0.08);
		background: linear-gradient(180deg, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.03));
		box-shadow: inset 0 1px 1px rgb(255 255 255 / 0.08);
		font-size: 1.25rem;
		font-weight: 400;
		line-height: 1;
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

	@media (prefers-reduced-motion: reduce) {
		.show-more {
			transition: none;
		}
	}
</style>
