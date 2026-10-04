<script lang="ts">
	let { children } = $props();
	import '../app.css';
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" sizes="32x32 64x64" />
	<link rel="icon" type="image/png" href="/favicon-64.png" sizes="64x64" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
	<title>Volodymyr Pytsiuk</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="Portfolio of Volodymyr Pytsiuk. Big data, applied ML, and backend engineering. Python, AWS, FastAPI, Docker. Based in Vancouver, Canada."
	/>
	<link rel="canonical" href="https://vovapyc.github.io/" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Volodymyr Pytsiuk" />
	<meta property="og:title" content="Volodymyr Pytsiuk — Portfolio" />
	<meta
		property="og:description"
		content="Big data, applied ML, and backend engineering. Python, AWS, FastAPI, Docker. Based in Vancouver, Canada."
	/>
	<meta property="og:url" content="https://vovapyc.github.io/" />

	<!-- prettier-ignore -->
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
