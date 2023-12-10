<script lang="ts">

const src: string = "profile.jpg";
</script>


<div class="p-2 flex-grow h-screen dark:text-darkText text-Text">
    <div class="text-center flex flex-col justify-center items-center">
        <img
            {src}
            alt="The mountain"
            class="rounded-full h-96 w-96 border-4 ring-4 ring-offset-4 ring-terminalBlackYellow my-4"
        />
        <h1 class="relative text-4xl">Henri Vandersleyen</h1>
        <p class="underline decoration-darkYellow text-xl">Software developer</p>
        <div class="space-y-4 dark:text-darkText text-Text text-l relative w-full flex flex-col items-center">
            <br class="m-4" />
            <p class="w-1/2 text-center">In late 2019, while serving in the Canadian Navy, I automated the repetitive and mundane tasks assigned to my office using the already obsolete but powerful Excel VBA language.</p>
            <p class="w-1/2 text-center">This experience changed me by reigniting the forgotten passion of learning. This ultimately made me reconsider the course of my life upon realizing that this newfound knowledge was incompatible with the rigid and outdated thinking that was common in the military.</p>
            <p class="w-1/2 text-center">Since then, I have grown tremendously as a Software Engineer and specialized in DevOps, while maintaining interests and competencies as a full stack developer.</p>
        </div>
    </div>
</div>
