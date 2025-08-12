<script>
    export let company;
    export let period;
</script>

<li class="[&:not(:last-child)]:mb-8 ms-4">
	<div
		class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
	></div>
	<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{period}</time>
	<h3 class="text-lg font-semibold mb-1">
		{company}
	</h3>
	<div class="text-base font-normal space-y-3">
		<slot />
	</div>
</li>
