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
.shop-filter-sort-by__label {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    color: #171717;
    cursor: pointer;
    white-space: nowrap;
}

.shop-filter-sort-by__dropdown {
    right: 0;
    position: absolute;
    background-color: #fff;
    z-index: 3;
    transition: all .3s cubic-bezier(0.22,0.61,0.36,1);
    border: 1px solid #dedede;
    transition: all .3s cubic-bezier(0.22,0.61,0.36,1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
}

.shop-filter-sort-by__dropdown li {
    display: block;
    border-bottom: 1px solid #dedede;
}

.shop-filter-button__btn {
    @apply text-lg;
    /* font-size: 20px; */
    /* font-weight: 400; */
    /* line-height: 30px; */
    /* color: #171717; */
    padding: 2px 12px 2px;
    border: 1px solid #000000;
    background-color: transparent;
}
.i-mdi-light-format-list-bulleted {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M20 18v1H7v-1zm-16.5-.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M20 12v1H7v-1zm-16.5-.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M20 6v1H7V6zM3.5 5.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1'/%3E%3C/svg%3E");
  -webkit-mask: var(--un-icon) no-repeat;
  mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  background-color: currentColor;
  color: inherit;
  width: 1.2em;
  height: 1.2em;
}
</style>
<template>
    <div class="home-content-block container">
        <BreadCrumb :path="state.path"></BreadCrumb>
        <div class="px-2 md:px-4 lg:px-6 xl:px-8">
            <div class="flex">
                <div class="shop-filter flex justify-between align-items-center mb-4 flex-1	">
                    <div class="shop-filter-default flex justify-content-between align-items-center">
                        <div class="shop-filter-count d-none d-sm-block text-lg">我们为您找到了90条结果</div>
                    </div>
                    <!-- <div class="shop-filter-sort-by"><div class="shop-filter-sort-by__label"><span>Sort by Default</span><i class="lastudioicon-down-arrow"></i></div><ul class="shop-filter-sort-by__dropdown"><li class="active"><a href="#">Sort by Default</a></li><li><a href="#">Sort by Popularity</a></li><li><a href="#">Sort by Rated</a></li><li><a href="#">Sort by Latest</a></li><li><a href="#">Sort by Price:<i class="lastudioicon-arrow-up"></i></a></li><li><a href="#">Sort by Price:<i class="lastudioicon-arrow-down"></i></a></li></ul></div> -->
                </div>
                <div class="shop-filter-button"><button @click="state.isShowFilter = !state.isShowFilter" class="shop-filter-button__btn shop-filter-toggle flex items-center cursor-pointer"><span>筛选</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg></button></div>
            </div>
            <div class="updates__grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:mx-auto">
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
        <Drawer :isShow="state.isShowFilter"></Drawer>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { show } from '@/api/v1';
import BreadCrumb from '@/components/BreadCrumb.vue'
import Drawer from '@/components/Drawer.vue';

interface DataProviderDataList{
    brand: string,
    title: string,
    cover: string
}

interface DataProvider {
    list: DataProviderDataList[]
}

interface State {
    dataProvider: DataProvider
    isShowFilter: boolean
    path: string[]
}
const state = reactive<State>({
    dataProvider: {
        list: []
    },
    isShowFilter: false,
    path: ['秀场']
})

onMounted(() => {
    getIndex()
})

const closeFilter = () => {
    console.log('closeFilter')
    state.isShowFilter = false
}
const getIndex = () => {
    show({}).then((e) => {
        state.dataProvider = e.data
        console.log(state.dataProvider)
    })
}
</script>