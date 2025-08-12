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
	<meta name="description" content="Portfolio of Volodymyr Pytsiuk. Big data, applied ML, and backend engineering. Python, AWS, FastAPI, Docker. Based in Vancouver, Canada.">
	<link rel="canonical" href="https://vovapyc.github.io/" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Volodymyr Pytsiuk" />
	<meta property="og:title" content="Volodymyr Pytsiuk — Portfolio" />
	<meta property="og:description" content="Big data, applied ML, and backend engineering. Python, AWS, FastAPI, Docker. Based in Vancouver, Canada." />
	<meta property="og:url" content="https://vovapyc.github.io/" />

	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: 'Volodymyr Pytsiuk',
			url: 'https://vovapyc.github.io/',
		})}
	</script>
</svelte:head>

{@render children?.()}
