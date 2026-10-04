<script>
	import { onMount } from 'svelte';
	import Card from '$lib/components/Card.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
	import WorkExperiences from '$lib/components/WorkExperiences.svelte';
	import Project from '$lib/components/Project.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import videoMe from '$lib/assets/me.mp4';
	import videoMeWebm from '$lib/assets/me.webm';
	import videoPoster from '$lib/assets/me-poster.webp';
	import Link from '$lib/components/Link.svelte';
	import deviantArtLogo from '$lib/assets/companies/deviantart.svg';
	import softServeLogo from '$lib/assets/companies/softserve.svg';
	import goBoutiqueLogo from '$lib/assets/companies/goboutique.png';

	let playVideo = false;

	onMount(() => {
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const updateMotion = () => {
			playVideo = !reducedMotion.matches;
		};
		updateMotion();
		reducedMotion.addEventListener('change', updateMotion);
		return () => reducedMotion.removeEventListener('change', updateMotion);
	});
</script>

<div class="intro flex flex-col md:flex-row md:items-center gap-6 md:gap-4 p-4 pt-12 pb-16">
	<div class="shrink-0 self-center md:-ml-8">
		<div class="memoji w-60 md:w-[300px] aspect-square">
			{#if playVideo}
				<video
					class="block w-full h-full"
					autoplay
					muted
					playsinline
					preload="metadata"
					poster={videoPoster}
					width="512"
					height="512"
					aria-hidden="true"
					on:error={() => (playVideo = false)}
				>
					<source src={videoMe} type={'video/mp4; codecs="hvc1"'} />
					<source
						src={videoMeWebm}
						type={'video/webm; codecs="vp9"'}
						on:error={() => (playVideo = false)}
					/>
				</video>
			{:else}
				<img
					class="block w-full h-full"
					src={videoPoster}
					alt=""
					width="512"
					height="512"
					decoding="async"
					fetchpriority="high"
				/>
			{/if}
		</div>
	</div>
	<div>
		<p class="note mx-auto md:mx-0">
			Builder from Vancouver <span class="note-flag">🇨🇦</span>
		</p>
		<h1 class="name text-center md:text-left" aria-label="Hi, I'm Vova">
			{#each ['Hi,', "I'm", 'Vova'] as word, i}<span
					class="word"
					style="--i: {i}"
					aria-hidden="true">{word}</span
				>{' '}{/each}
		</h1>
		<p class="bio max-w-xl text-sm md:text-base">
			<strong>Software engineer</strong> with 7 years of experience and a master’s in CS. Born and raised
			in 🇺🇦, based in 🇨🇦. Outside of work: snowboarding, concerts and travelling.
		</p>
	</div>
</div>

<Projects>
	<Project
		emoji="🤖"
		title="Vibe Buddy"
		description="A small ESP32 desk robot that keeps your Codex and Claude Code usage limits visible while you work, including how much is left and when each limit resets."
		href="https://vibebuddy.sh/?ref=byvova.com"
	/>
	<Project
		emoji="🕊️"
		title="Played in Russia"
		description="Public database tracking artists who perform in russia after the invasion of Ukraine. Built to help people make informed decisions about who they support."
		href="https://playedinrussia.com?ref=byvova.com"
	/>
	<Project
		emoji="🍁"
		title="My Days in Canada"
		description="iOS app to track physical presence in Canada for citizenship eligibility, log trips, and optionally scan photos for travel dates — all data stays on-device/iCloud."
		href="https://apps.apple.com/ca/app/my-days-in-canada/id6758373830"
	/>
	<div slot="more" class="space-y-6">
		<Project
			emoji="🙈"
			title="The Shy Dock"
			description="A tiny macOS menu bar app that auto-hides your Dock when you're on the laptop alone and brings it back when an external monitor is connected."
			href="https://projects.byvova.com/the-shy-dock/?ref=byvova.com"
		/>
		<Project
			emoji="🥔"
			title="Potato Classifier"
			description="ML-powered app that identifies potatos. Because why not make something fun while practicing computer vision? I did engineering, my gf did computer vision part."
			href="https://projects.byvova.com/potato/?ref=byvova.com"
		/>
	</div>
</Projects>

<WorkExperiences>
	<WorkExperience
		company="DeviantArt"
		period="2022 - 2026"
		location="Vancouver, Canada"
		logo={deviantArtLogo}
	>
		<p>
			I developed high-performance APIs, designed data processing pipelines, conducted A/B tests,
			trained and deployed machine learning models, built full-stack apps and worked with OLAP
			systems.
		</p>
		<p>
			We relied on cloud-native architecture. I used AWS (CDK, Lambda, S3, Kinesis, SQS, SNS and
			many other services), Grafana, Kubernetes, Next.js, Spark and many other tools/technologies.
		</p>
		<span>Some of my projects included:</span>
		<ul class="">
			<li>
				- Built high-load (5–8 requests per second), user-facing APIs that ran ML models to process
				images.
			</li>
			<li>
				- Led the development of an A/B testing management system, serving mostly as an architect
				while guiding a junior developer on coding and QA tasks
			</li>
			<li>- Developed a marketing tool that sent millions of notifications to users every week</li>
		</ul>
	</WorkExperience>
	<WorkExperience
		company="SoftServe/Cisco"
		period="2021 - 2022"
		location="Gdansk, Poland"
		logo={softServeLogo}
		monochrome
	>
		<p>
			I was working on email spam detection system for Talos, Cisco's cyber security platform. I was
			writing documentation, working with Kubernetes, email protocols, Python, PostgreSQL, Redis and
			other tools.
		</p>
		<p>
			During my work there I built high-load, cached API for processing and translating email
			messages.
		</p>
	</WorkExperience>
	<WorkExperience
		company="GoBoutique"
		period="2019 - 2021"
		location="Lviv, Ukraine"
		logo={goBoutiqueLogo}
	>
		<p>
			I worked closely with traders to turn their market insights and hypotheses into algorithmic
			trading strategies. This involved collecting, processing and analyzing financial data, then
			translating trading ideas into code.
		</p>
		<p>
			I also built chatbots and automated data pipelines using Kubeflow and AWS Step Functions to
			collect and prepare data for training machine learning models.
		</p>
		<p>
			My stack included Python, Vue.js, AWS (S3, Lambda, EC2, Fargate, Step Functions), pandas,
			NumPy and Plotly.
		</p>
	</WorkExperience>
</WorkExperiences>

<Card title="📫 Contact me">
	<p>
		Check out my <Link href="https://x.com/pytsyuk83947">Twitter</Link> or <Link
			href="https://github.com/vovapyc">GitHub</Link
		> profile
	</p>
	<p>
		Or can reach me via <Link href="mailto:me@byvova.com">me@byvova.com</Link>
	</p>

	<div slot="footer" class="hidden md:block absolute inset-0 pointer-events-none">
		<span class="emoji" style="top: -15px; right: 20px;">🧐</span>
		<span class="emoji" style="top: 25px; right: 70px;">🍻</span>
		<span class="emoji" style="top: 65px; right: 120px;">🙉</span>
		<span class="emoji" style="top: 105px; right: 170px;">🗽</span>
		<!--Second row-->
		<span class="emoji" style="top: 40px; right: -10px;">🧳</span>
		<span class="emoji" style="top: 80px; right: 40px;">🥳</span>
		<span class="emoji" style="top: 120px; right: 90px;">🔥</span>
		<span class="emoji" style="top: 105px; right: 170px;">🗽</span>
		<!--Third row-->
		<span class="emoji" style="top: 95px; right: -20px;">🇨🇦</span>
		<span class="emoji" style="top: 135px; right: 30px;">🎸</span>
	</div>
</Card>

<style>
	.emoji {
		position: absolute;
		font-size: 2.6rem;
		pointer-events: none;
	}

	.note {
		width: fit-content;
		font-family: 'Caveat', cursive;
		font-size: 1.5rem;
		line-height: 1.2;
		color: #737373;
		rotate: -2deg;
		transform-origin: left center;
	}

	.note-flag {
		margin-inline: 0.1em 0.15em;
		font-size: 0.8em;
	}

	.name {
		margin: 0.375rem 0 1.25rem;
		font-family: 'Fraunces', Georgia, serif;
		font-size: clamp(3.25rem, 8vw, 4.75rem);
		font-weight: 400;
		line-height: 1;
		letter-spacing: -0.03em;
		font-variation-settings: 'opsz' 144;
	}

	.bio {
		line-height: 1.7;
		color: #525252;
	}

	.bio strong {
		color: #18181b;
	}

	/* Entrance: memoji, then the handwritten line writes itself, then the name, bio and cards */
	@media (prefers-reduced-motion: no-preference) {
		.memoji {
			animation: appear calc(0.8s / 1.3 / 1.2) cubic-bezier(0.2, 0.8, 0.2, 1) both;
		}

		.note {
			mask-image: linear-gradient(90deg, #000 40%, transparent 60%);
			mask-size: 250% 100%;
			animation: write calc(1.1s / 1.3 / 1.2) ease-in-out calc(0.25s / 1.3 / 1.2) both;
		}

		.note-flag {
			display: inline-block;
			animation: pop calc(0.5s / 1.3 / 1.2) cubic-bezier(0.3, 1.6, 0.5, 1) calc(1.2s / 1.3 / 1.2)
				both;
		}

		.word {
			display: inline-block;
			animation: rise calc(0.8s / 1.3 / 1.2) cubic-bezier(0.2, 0.8, 0.2, 1) both;
			animation-delay: calc((0.45s + var(--i) * 0.12s) / 1.3 / 1.2);
		}

		.bio {
			animation: fade-up calc(0.7s / 1.3 / 1.2) ease-out calc(0.95s / 1.3 / 1.2) both;
		}

		.intro + :global(.card) {
			animation: settle calc(0.9s / 1.3 / 1.2) cubic-bezier(0.2, 0.8, 0.2, 1)
				calc(1.15s / 1.3 / 1.2) both;
		}
	}

	@keyframes appear {
		from {
			opacity: 0;
			scale: 0.9;
		}
	}

	@keyframes write {
		from {
			mask-position: 100% 0;
		}
		to {
			mask-position: 0 0;
		}
	}

	@keyframes pop {
		from {
			scale: 0;
		}
	}

	@keyframes rise {
		from {
			opacity: 0;
			translate: 0 0.3em;
			filter: blur(10px);
		}
	}

	@keyframes fade-up {
		from {
			opacity: 0;
			translate: 0 8px;
		}
	}

	@keyframes -global-settle {
		from {
			opacity: 0;
			translate: 0 32px;
			scale: 0.98;
		}
	}

	@media (prefers-color-scheme: dark) {
		.note {
			color: #9a9a9a;
		}

		.bio {
			color: #c4c4c4;
		}

		.bio strong {
			color: #e8e8e8;
		}
	}
</style>
