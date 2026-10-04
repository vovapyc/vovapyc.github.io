<script>
	import Card from '$lib/components/Card.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
	import WorkExperiences from '$lib/components/WorkExperiences.svelte';
	import Project from '$lib/components/Project.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import videoMe from '$lib/assets/me.mov';
	import Link from '$lib/components/Link.svelte';
</script>

<div class="intro flex flex-col md:flex-row md:items-center gap-6 md:gap-4 p-4 pt-12 pb-16">
	<div class="shrink-0 md:-ml-8">
		<video class="memoji w-60 md:w-[300px]" autoplay muted playsinline src={videoMe} width="300"
		></video>
	</div>
	<div>
		<p class="note">
			Builder from Vancouver <span class="note-flag">🇨🇦</span>
		</p>
		<h1 class="name" aria-label="Hi, I'm Vova">
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
</Projects>

<WorkExperiences>
	<WorkExperience company="DeviantArt (Vancouver, Canada)" period="2022 - present">
		<p>
			I was developing high-performance APIs, designing data processing pipelines, conducting A/B
			tests, training and deploying machine learning models, building full-stack apps and working
			with OLAP systems.
		</p>
		<p>
			We were relying on cloud-native architecture, I was using AWS (CDK, Lambda, S3, Kinesis, SQS,
			SNS and many other services), Grafana, Kubernetes, Next.js, Spark and many other
			tools/technologies.
		</p>
		<span>Some of my projects include:</span>
		<ul class="">
			<li>
				- Built high-load (5–8 requests per second), user-facing APIs that ran ML models to process
				images.
			</li>
			<li>
				- Led the development of an A/B testing management system, serving mostly as an architect
				while guiding a junior developer on coding and QA tasks
			</li>
			<li>- Developed a marketing tool that sends millions of notifications to users every week</li>
		</ul>
	</WorkExperience>
	<WorkExperience company="SoftServe/Cisco (Gdansk, Poland)" period="2021 - 2022">
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
	<WorkExperience company="GoBoutique (Lviv, Ukraine)" period="2019-2021">
		<p>
			I was building trading algorithms for financial markets, ML Kubeflow pipelines, scrapping
			data, creating chatbots.
		</p>
		<p>
			The most important project was developing trading algorithmic strategies using a lot of data
			processing and analysis.
		</p>
		<p>
			My stack included Python, Vue.js, AWS (S3, Lambda, EC2, Fargate, Step Functions), pandas,
			numpy, plot.ly and more.
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
			animation: appear 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
		}

		.note {
			mask-image: linear-gradient(90deg, #000 40%, transparent 60%);
			mask-size: 250% 100%;
			animation: write 1.1s ease-in-out 0.25s both;
		}

		.note-flag {
			display: inline-block;
			animation: pop 0.5s cubic-bezier(0.3, 1.6, 0.5, 1) 1.2s both;
		}

		.word {
			display: inline-block;
			animation: rise 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
			animation-delay: calc(0.45s + var(--i) * 0.12s);
		}

		.bio {
			animation: fade-up 0.7s ease-out 0.95s both;
		}

		.intro + :global(.card) {
			animation: settle 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 1.15s both;
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
