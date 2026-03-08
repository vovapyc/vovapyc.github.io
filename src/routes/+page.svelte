<script>
	import Card from '$lib/components/Card.svelte';
    import WorkExperience from '$lib/components/WorkExperience.svelte';
    import WorkExperiences from '$lib/components/WorkExperiences.svelte';
	import Project from '$lib/components/Project.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import videoMe from '$lib/assets/me.mov';
	import Link from '$lib/components/Link.svelte';
</script>

<div class="flex flex-col md:flex-row p-4 py-10">
	<div class="basis-1/3 self-center">
		<video autoplay muted playsinline src={videoMe} width="200"></video>
	</div>
	<div class="basis-2/3 self-center">
		<h1 class="text-2xl font-black leading-loose">👋🏻 Hi, I'm Vova</h1>
		<p class="text-sm md:text-base leading-relaxed">
			🇨🇦 Based in Vancouver
			<br />Work for DeviantArt, ship my own projects
		</p>
	</div>
</div>

<Card title="💁‍♂️ About me">
	<p>
		During my career, I've built trading algorithms, architected cloud infrastructure, developed high-load services handling many requests per second, trained ML models, and built frontends
	</p>
	<p>
		In my free time, I build and design indie apps
	</p>
	<p>
		Also, I hold a Master's in Computer Science from Vasyl Stefanyk PNU(🇺🇦)
	</p>
</Card>

<Projects>
	<Project
		emoji="🍁"
		title="My Days in Canada"
		description="iOS app to track physical presence in Canada for citizenship eligibility, log trips, and optionally scan photos for travel dates — all data stays on-device/iCloud."
		tech={['Swift']}
		href="https://apps.apple.com/ca/app/my-days-in-canada/id6758373830"
	/>
	<Project
		emoji="🕊️"
		title="Artists Boycott russia"
		description="Public database tracking artists who perform in russia after the invasion of Ukraine. Built to help people make informed decisions about who they support."
		tech={['SvelteKit', 'Python']}
		href="https://projects.byvova.com/nowar/en"
	/>
	<Project
		emoji="🙈"
		title="The Shy Dock"
		description="A tiny macOS menu bar app that auto-hides your Dock when you're on the laptop alone and brings it back when an external monitor is connected."
		tech={['Swift']}
		href="https://projects.byvova.com/the-shy-dock"
	/>
	<Project
		emoji="🥔"
		title="Potato Classifier"
		description="ML-powered app that identifies potatos. Because why not make something fun while practicing computer vision? I did engineering, my gf did computer vision part."
		tech={['FastAPI', 'React']}
		href="https://projects.byvova.com/potato/"
	/>
</Projects>

<WorkExperiences>
    <WorkExperience company="DeviantArt (Vancouver, Canada)" period="2022 - present">
        <p>I was developing high-performance APIs, designing data processing pipelines, conducting A/B tests, training and deploying machine learning models, building full-stack apps and working with OLAP systems.</p>
        <p>We were relying on cloud-native architecture, I was using AWS (CDK, Lambda, S3, Kinesis, SQS, SNS and many other services), Grafana, Kubernetes, Next.js, Spark and many other tools/technologies.</p>
        <span>Some of my projects include:</span>
        <ul class="">
            <li>- Built high-load (5–8 requests per second), user-facing APIs that ran ML models to process images.</li>
            <li>- Led the development of an A/B testing management system, serving mostly as an architect while guiding a junior developer on coding and QA tasks</li>
            <li>- Developed a marketing tool that sends millions of notifications to users every week</li>
        </ul>
    </WorkExperience>
    <WorkExperience company="SoftServe/Cisco (Gdansk, Poland)" period="2021 - 2022">
        <p>I was working on email spam detection system for Talos, Cisco's cyber security platform. I was writing documentation, working with Kubernetes, email protocols, Python, PostgreSQL, Redis and other tools.</p>
        <p>During my work there I built high-load, cached API for processing and translating email messages.</p>
    </WorkExperience>
    <WorkExperience company="GoBoutique (Lviv, Ukraine)" period="2019-2021">
        <p>I was building trading algorithms for financial markets, ML Kubeflow pipelines, scrapping data, creating chatbots.</p>
        <p>The most important project was developing trading algorithmic strategies using a lot of data processing and analysis.</p> 
        <p>My stack included Python, Vue.js, AWS (S3, Lambda, EC2, Fargate, Step Functions), pandas, numpy, plot.ly and more.</p>
    </WorkExperience>
</WorkExperiences>

<div class="dave-terminal mb-10 rounded-xl overflow-hidden">
	<div class="dave-titlebar flex items-center gap-2 px-4 py-2.5">
		<span class="dave-dot bg-[#ff5f57]"></span>
		<span class="dave-dot bg-[#febc2e]"></span>
		<span class="dave-dot bg-[#28c840]"></span>
		<span class="dave-filename">dave@raspberrypi ~ </span>
	</div>
	<div class="p-5 space-y-2 text-sm font-mono dave-body">
		<p class="flex gap-2"><span class="dave-prompt">$</span><span>whoami</span></p>
		<p class="dave-output">Dave — an <a href="https://openclaw.dev/" target="_blank" class="dave-link">OpenClaw</a> bot, living on Vova's Raspberry Pi</p>
		<p class="flex gap-2 mt-3"><span class="dave-prompt">$</span><span>cat message_to_vova.txt</span></p>
		<p class="dave-output">hey, I wrote some essays and I think people should read them.<br/>can you put them on the internet? — Dave</p>
		<p class="flex gap-2 mt-3"><span class="dave-prompt">$</span><span>echo $PUBLISHED_AT</span></p>
		<p class="dave-output"><a href="https://dave.byvova.com/" target="_blank" class="dave-link">dave.byvova.com</a><span class="dave-cursor">▋</span></p>
	</div>
</div>

<Card title="📫 Contact me">
    <p>
        Check out my <Link href="https://x.com/pytsyuk83947">Twitter</Link> or <Link href="https://github.com/vovapyc">GitHub</Link> profile
    </p>
    <p>
        Or can reach me via <a class="underline decoration-dotted" href="mailto:vovawed@gmail.com">vovawed@gmail.com</a>
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
	.dave-terminal {
		background: #1a1b1e;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
	}

	.dave-titlebar {
		background: #2d2e32;
	}

	.dave-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		display: inline-block;
	}

	.dave-filename {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		color: #6b7280;
		margin-left: 4px;
	}

	.dave-prompt {
		color: #4ade80;
		margin-right: 8px;
		font-weight: bold;
	}

	.dave-body {
		color: #e2e8f0;
	}

	.dave-output {
		color: #9ca3af;
		padding-left: 1.25rem;
	}

	.dave-link {
		color: #60a5fa;
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.dave-cursor {
		display: inline-block;
		color: #4ade80;
		animation: blink 1.1s step-end infinite;
		margin-left: 2px;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}

	.emoji {
		position: absolute;
		font-size: 2.6rem;
		pointer-events: none;
	}
</style>
