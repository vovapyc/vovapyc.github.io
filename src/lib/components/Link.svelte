<script>
	export let href;

	$: external = href.startsWith('http');
</script>

<a target={external ? '_blank' : undefined} {href} class="keycap font-mono">
	<slot />
</a>

<style>
	/* A small keyboard key that presses down on hover and click */
	.keycap {
		display: inline-block;
		margin: 0 0.15em;
		padding: 0.05em 0.55em 0.12em;
		border-radius: 7px;
		font-size: 0.9em;
		color: #18181b;
		background: linear-gradient(180deg, #ffffff, #efefef);
		box-shadow:
			inset 0 1px 0 #ffffff,
			0 0 0 1px #d2d2d2,
			0 2px 0 #c2c2c2,
			0 3px 6px rgb(0 0 0 / 0.1);
		transition:
			translate 0.08s,
			box-shadow 0.08s;
	}

	.keycap:hover {
		translate: 0 1px;
		box-shadow:
			inset 0 1px 0 #ffffff,
			0 0 0 1px #d2d2d2,
			0 1px 0 #c2c2c2,
			0 2px 3px rgb(0 0 0 / 0.08);
	}

	.keycap:active {
		translate: 0 2px;
		box-shadow:
			inset 0 1px 0 #ffffff,
			0 0 0 1px #d2d2d2;
	}

	@media (prefers-color-scheme: dark) {
		.keycap {
			color: #ececec;
			background: linear-gradient(180deg, #3c3c3c, #2c2c2c);
			box-shadow:
				inset 0 1px 0 rgb(255 255 255 / 0.1),
				0 0 0 1px #161616,
				0 2px 0 #0e0e0e,
				0 3px 6px rgb(0 0 0 / 0.4);
		}

		.keycap:hover {
			box-shadow:
				inset 0 1px 0 rgb(255 255 255 / 0.1),
				0 0 0 1px #161616,
				0 1px 0 #0e0e0e,
				0 2px 3px rgb(0 0 0 / 0.4);
		}

		.keycap:active {
			box-shadow:
				inset 0 1px 0 rgb(255 255 255 / 0.1),
				0 0 0 1px #161616;
		}
	}
</style>
