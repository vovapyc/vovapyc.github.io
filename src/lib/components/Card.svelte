<script>
	export let title;
</script>

<div class="card surface mb-10 rounded-xl relative overflow-hidden">
	<div class="card-body gap-5 px-4 py-6 md:p-6">
		<h2 class="card-title font-serif font-medium text-[1.625rem] tracking-[-0.015em]">{title}</h2>
		<div class="text-sm md:text-base font-normal space-y-3">
			<slot />
		</div>
	</div>
	<slot name="footer" />
</div>

<style>
	/* Clean card: hairline border, a close shadow and a soft one further below */
	.surface {
		background: #ffffff;
		border: 1px solid rgb(0 0 0 / 0.07);
		box-shadow:
			0 1px 2px rgb(0 0 0 / 0.04),
			0 14px 32px -18px rgb(0 0 0 / 0.16);
	}

	@media (prefers-color-scheme: dark) {
		.surface {
			background: #242424;
			border-color: rgb(255 255 255 / 0.07);
			box-shadow:
				0 1px 2px rgb(0 0 0 / 0.4),
				0 14px 32px -18px rgb(0 0 0 / 0.7);
		}
	}
</style>
