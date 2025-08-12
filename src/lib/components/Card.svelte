<script>
    export let title;
</script>

<div class="card bg-base-100 shadow-sm mb-10 rounded-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
	<div class="card-body gap-5 p-6">
		<h2 class="card-title font-black">{title}</h2>
        <div class="text-base font-normal space-y-3">
            <slot />
        </div>
	</div>
    <slot name="footer" />
</div>
