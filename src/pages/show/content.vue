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

.breadcrumb-wrapper__items {
    flex-wrap: wrap;
    margin-top: 12px;
}

.breadcrumb-wrapper__items li:not(:last-child)::after {
    content: ">";
    line-height: 1;
    color: #886e6e;
    margin: 0 10px;
}

.breadcrumb-wrapper__items li {
    position: relative;
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
</style>
<template>
    <div class="home-content-block container">
        <ul class="breadcrumb-wrapper__items flex justify-center text-xl pb-8"><li><a href="index.html">Home</a></li><li><span>Shop</span></li></ul>
        <div class="px-2 md:px-4 lg:px-6 xl:px-8">
            <div class="flex">
                <div class="shop-filter flex justify-between align-items-center mb-4 flex-1	">
                    <div class="shop-filter-default flex justify-content-between align-items-center">
                        <div class="shop-filter-count d-none d-sm-block text-lg">我们为您找到了90条结果</div>
                    </div>
                    <div class="shop-filter-sort-by"><div class="shop-filter-sort-by__label"><span>Sort by Default</span><i class="lastudioicon-down-arrow"></i></div><ul class="shop-filter-sort-by__dropdown"><li class="active"><a href="#">Sort by Default</a></li><li><a href="#">Sort by Popularity</a></li><li><a href="#">Sort by Rated</a></li><li><a href="#">Sort by Latest</a></li><li><a href="#">Sort by Price:<i class="lastudioicon-arrow-up"></i></a></li><li><a href="#">Sort by Price:<i class="lastudioicon-arrow-down"></i></a></li></ul></div>
                </div>
                <div class="shop-filter-button"><button class="shop-filter-button__btn shop-filter-toggle"><span>Filter</span><i class="lastudioicon-menu-4-2"></i></button></div>
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

        <div class="flex justify-center">
    <ul class="inline-flex -space-x-px list-inside my-2">
        <li>
          <a href="#" class="py-2 px-3 ml-0  text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
        </li>
        <li>
          <a href="#" class="py-2 px-3  text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
        </li>                                        
        <li>
          <a href="#" aria-current="page" class="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">2</a>
        </li>
        <li>
            <a href="#" class="py-2 px-3  text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
          </li>
        <li>
          <a href="#" class="py-2 px-3  text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
    </ul>
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