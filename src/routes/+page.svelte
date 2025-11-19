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
		emoji="🥔"
		title="Potato Classifier"
		description="ML-powered app that identifies potatos. Because why not make something fun while practicing computer vision? I did engineering, my gf did computer vision part."
		tech={['FastAPI', 'React']}
		href="https://byvova.com/potato/"
	/>
	<Project
		emoji="🕊️"
		title="Artists Boycott russia"
		description="Public database tracking artists who perform in russia after the invasion of Ukraine. Built to help people make informed decisions about who they support."
		tech={['SvelteKit', 'Python']}
		href="https://projects.byvova.com/nowar/en"
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
	.emoji {
		position: absolute;
		font-size: 2.6rem;
		pointer-events: none;
	}
</style>
