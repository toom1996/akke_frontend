<style scoped>
    .home-content-block {
    padding-left: 0;
    padding-right: 0;
    max-width: 1024px;
    margin: 0 auto;
}
.updates__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    grid-auto-rows: 30rem;
    row-gap: 32px;
    column-gap: 32px;
}
.updates__card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    background-size: 100%;
    background-position-x: center;
    background-position-y: 0%;
    background-repeat: no-repeat;
    transition: all ease-in-out .3s;
}
.updates__card:hover {
    background-position-y: -28px;
}

.updates__card-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: linear-gradient(0deg, #ffffff 15%, rgba(255, 255, 255, 0) 100%);
    border-bottom-right-radius: var(--arbutus-border-radius-accent);
    border-bottom-left-radius: var(--arbutus-border-radius-accent);
}
.updates__card:hover .updates__card-content {
    bottom: 0;
}
.updates__card-link {
    transition: all ease-in-out .25s;
    transition-delay: .15s;
    opacity: 0;
}
.updates__card:hover .updates__card-link {
    opacity: 1;
}
.text__color--action {
    color: var(--arbutus-color-action);
}
.updates__card-content {
    position: relative;
    z-index: 1;
    bottom: -16px;
    transition: all ease-in-out .25s;
    padding-bottom: 16px;
}
.tile--padding-relaxed {
    padding: 32px;
}
</style>
<template>
    <div class="home-content-block">
        <div class="updates__grid">
            <a class="tile tile--padding-relaxed updates__card" style='background-image:url("https://fluent2websitecdn.azureedge.net/cdn/teams_update_cover.L4JnP_ME.webp")' href="https://microsoft.design/articles/designing-a-new-outlook-experience">
                <span class="updates__card-content">
                    <p class="text-2xl font-bold mt0 mb4">Paula Canovas del Vas</p>
                    <div class="text-sm font-semibold mt0 mb4 updates__card-description">
                        2024/25秋冬巴黎女装发布会
                    </div><div
                        class="text--body-2 text__color--action mt0 updates__card-link"
                        >Read more →</div
                    ></span
                ><span aria-hidden="true" class="updates__card-gradient"
                    >&nbsp;</span
                ></a
            ><a
                class="tile tile--padding-relaxed updates__card"
                style='background-image: url("https://assets.vogue.com/photos/5ba66fd82d53962db47f091a/master/w_1280,c_limit/_ARC0085.jpg");'
                href="https://microsoft.design/articles/designing-in-the-open-source"
                target="_blank"
                rel="noopener noreferrer"
                ><span class="updates__card-content"
                    ><h4
                        class="text--title-3 text__color--foreground-1 mt0 mb4"
                    >
                        Emoji update
                    </h4><p
                        class="text--body-2 text__color--foreground-2 mt0 mb4 updates__card-description"
                    >
                        Whatever the moment calls for, there's an emoji for that
                    </p><span
                        class="text--body-2 text__color--action mt0 updates__card-link"
                        >Read more →</span
                    ></span
                ><span aria-hidden="true" class="updates__card-gradient"
                    >&nbsp;</span
                ></a
            ><a
                class="tile tile--padding-relaxed updates__card"
                style='background-image:url("https://fluent2websitecdn.azureedge.net/cdn/outlook_update_cover_2x.dPUrzBZ_.webp")'
                href="https://microsoft.design/articles/designing-the-new-era-of-teams"
                target="_blank"
                rel="noopener noreferrer"
                ><span class="updates__card-content"
                    ><h4
                        class="text--title-3 text__color--foreground-1 mt0 mb4"
                    >
                        A modern Outlook
                    </h4><p
                        class="text--body-2 text__color--foreground-2 mt0 mb4 updates__card-description"
                    >
                        Outlook, Windows, and Fluent unite for a customizable
                        hub experience
                    </p><span
                        class="text--body-2 text__color--action mt0 updates__card-link"
                        >Read more →</span
                    ></span
                ><span aria-hidden="true" class="updates__card-gradient"
                    >&nbsp;</span
                ></a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
    console.log(12312312321)
})
</script>