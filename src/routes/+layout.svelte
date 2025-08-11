<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>

<svelte:head>
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧑‍💻</text></svg>"
	/>
	<title>Volodymyr Pytsiuk</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

{@render children?.()}
