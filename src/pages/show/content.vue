<style scoped>
.home-content-block {
    padding-left: 0;
    padding-right: 0;
    /* max-width: 1024px; */
    margin: 0 auto;
}
.updates__grid {
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr)); */
    grid-auto-rows: 32rem;
    row-gap: 32px;
    column-gap: 32px;
}
.updates__card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    /* background-size: 100%; */
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
    height: 12rem;
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
.tile {
    --tile-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .14), inset 0 0 0px 2px transparent;
    --tile-shadow-hover: 0 0 2px rgba(0, 0, 0, .12), 0 8px 16px rgba(0, 0, 0, .14), inset 0 0 0px 5px var(--fluent-color-neutral-background-1);
    --accent-border-width: 3px;
    --arbutus-border-radius-accent: 22px;
    text-decoration: none;
    z-index: 1;
    position: relative;
    background-color: #fff;
    border-top-left-radius: var(--arbutus-border-radius-accent);
    border-top-right-radius: var(--arbutus-border-radius-accent);
    border-bottom-right-radius: var(--arbutus-border-radius-accent);
    border-bottom-left-radius: var(--arbutus-border-radius-accent);
    box-shadow: var(--tile-shadow);
    transition: all ease-in-out .25s;
    cursor: pointer;
}

.tile:hover {
    box-shadow: var(--tile-shadow-hover);
}

</style>
<template>
    <div class="home-content-block container">
        <div class="updates__grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 md:px-4 lg:px-6 xl:px-8 2xl:mx-auto">
            <a v-for="item, index in state.dataProvider.list" class="tile tile--padding-relaxed updates__card bg-cover border-solid" :style="{ 'background-image': 'url(' + item.cover + ')' }" href="/show/gallary">
                <span class="updates__card-content">
                    <p class="text-2xl font-bold mt0 mb4">{{ item.brand }}</p>
                    <div class="text-sm font-semibold mt0 mb4 updates__card-description">
                        {{ item.title }}
                    </div>
                    <div class="text--body-2 text__color--action mt0 updates__card-link">Read more →</div>
                </span>
                <span aria-hidden="true" class="updates__card-gradient"></span>
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { show } from '@/api/v1';

interface DataProviderDataList{
    brand: string,
    title: string,
    cover: string
}

interface DataProvider {
    list: DataProviderDataList[]
}

interface State {
    dataProvider: DataProvider,
}
const state = reactive<State>({
    dataProvider: {
        list: []
    },
})

onMounted(() => {
    getIndex()
})

const getIndex = () => {
    show({}).then((e) => {
        state.dataProvider = e.data
        console.log(state.dataProvider)
    })
}
</script>